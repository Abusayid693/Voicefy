import {NextFunction, Request, Response} from 'express';
import {Readable} from 'stream';
import {returnError} from '../../middlewares/errorHandler';
import {Api404Error} from '../../utils/errorResponse';
import {ibmTts, polly} from '../cloud.config';
import {
  getParamsObjectForIbmWatson,
  getParamsObjectForPolly,
  storeVoiceInAWS
} from './tts.helper';

export const cloudVoice = (req: Request, res: Response, next: NextFunction) => {
  const {ssmlText, VoiceId, lan, provider} = req.body;

  switch (provider) {
    case 'aws': {
      const input = getParamsObjectForPolly(ssmlText, VoiceId, lan);
      return ttsPollyVoice(input, res, req, next);
    }
    case 'ibm': {
      const input = getParamsObjectForIbmWatson(ssmlText, VoiceId, lan);
      return ttsIbmWatsonVoice(res, req, input);
    }
    default:
      const input = getParamsObjectForPolly(ssmlText, VoiceId, lan);
      return ttsPollyVoice(input, res, req, next);
  }
};

export const ttsPollyVoice = (
  params: any,
  res: Response,
  req: Request,
  next: NextFunction
) => {
  polly.synthesizeSpeech(params, (error, data) => {
    if (error) {
      returnError(new Api404Error(error.message), res);
    }
    if (data?.AudioStream instanceof Buffer) {
      storeVoiceInAWS(req, res, data.AudioStream);
    }
  });
};

export const ttsIbmWatsonVoice = (res: Response, req: Request, params: any) => {
  console.log(params);
  ibmTts
    .synthesize(params)
    .then(response => {
      return ibmTts.repairWavHeaderStream(response.result as Readable);
    })
    .then(buffer => {
      storeVoiceInAWS(req, res, buffer);
    })
    .catch(err => {
      returnError(new Api404Error(err.message), res);
    });
};
