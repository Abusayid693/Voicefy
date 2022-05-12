import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../../utils/errorResponse';
import { ibmTts, polly } from '../cloud.config';
import {
  getParamsObjectForIbmWatson, getParamsObjectForPolly, storeVoiceInAWS
} from './tts.helper';

export const cloudVoice = (req: Request, res: Response, next: NextFunction) => {
  const {ssmlText, VoiceId, lan, provider} = req.body;

  switch (provider) {
    case 'aws': {
      const input = getParamsObjectForPolly(ssmlText, VoiceId, lan);
      return ttsPollyVoice(input, res, next);
    }
    case 'ibm': {
      const input = getParamsObjectForIbmWatson(ssmlText, VoiceId, lan);
      return ttsIbmWatsonVoice(res, input);
    }
    default:
      const input = getParamsObjectForPolly(ssmlText, VoiceId, lan);
      return ttsPollyVoice(input, res, next);
  }
};

export const ttsPollyVoice = (
  params: any,
  res: Response,
  next: NextFunction
) => {
  polly.synthesizeSpeech(params, (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    if (data.AudioStream instanceof Buffer) {
      storeVoiceInAWS(res, data.AudioStream);
    }
  });
};

export const ttsIbmWatsonVoice = (res: Response, params: any) => {
  console.log(params);
  ibmTts
    .synthesize(params)
    .then(response => {
      //@ts-ignore
      return ibmTts.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      storeVoiceInAWS(res, buffer);
    })
    .catch(err => {
      console.log('error:', err);
      return res.send(new ErrorResponse('IMB Watson error', 404));
    });
};
