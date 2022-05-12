import {Request, Response, NextFunction} from 'express';
import {ErrorResponse} from '../../utils/errorResponse';
import {polly, ibmTts} from '../cloud.config';
import {
  getParamsObjectForPolly,
  getParamsObjectForIbmWatson
} from './tts.helper';

import fs from 'fs';
export const ttsCommonService = (res: Response, input: any, type: string) => {
  switch (type) {
    case 'aws':
      return ttsPollyVoice(res, input);

    case 'ibm':
      return ttsIbmWatsonVoice(res, input);
    default:
      return ttsPollyVoice(res, input);
  }
};

export const ttsPollyVoice = (res: Response, input: any) => {
  const params = getParamsObjectForPolly(input);
  polly.synthesizeSpeech(params, (error, data) => {
    if (error) {
      console.log(error);
      return res.send(new ErrorResponse('Aws polly error', 404));
    }
    if (data.AudioStream instanceof Buffer) {
      fs.writeFile('hello.mp3', data.AudioStream, error => {
        if (error) console.log('Unable to write file locally for testing');
      });

      return data.AudioStream;
    }
    return res.send(new ErrorResponse('Aws polly error', 404));
  });
};

export const ttsIbmWatsonVoice = (res: Response, input: any) => {
  const params = getParamsObjectForIbmWatson(input);
  console.log(params);
  ibmTts
    .synthesize(params)
    .then(response => {
      //@ts-ignore
      return ibmTts.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync('hello_world.mp3', buffer);
      return buffer;
    })
    .catch(err => {
      console.log('error:', err);
      return res.send(new ErrorResponse('Aws polly error', 404));
    });
};
