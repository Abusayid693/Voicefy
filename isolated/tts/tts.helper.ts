import crypto from 'crypto';
import {Request, Response} from 'express';
import {AWS_BUCKET_NAME} from '../../local.config';
import {returnError} from '../../middlewares/errorHandler';
import {InternalServerError} from '../../utils/errorResponse';
import {TTSSuccessResponse} from '../../utils/successResponse';
import {s3} from '../cloud.config';

export const getParamsObjectForPolly = (
  ssmlText: string,
  VoiceId: string,
  lan: string
) => {
  return {
    Text: ssmlText,
    OutputFormat: 'mp3',
    VoiceId: VoiceId,
    LanguageCode: lan
  };
};

export const getParamsObjectForIbmWatson = (
  ssmlText: string,
  VoiceId: string,
  lan: string
) => {
  return {
    text: ssmlText,
    accept: 'audio/wav',
    voice: 'en-US_AllisonV3Voice' // input.VoiceId
  };
};

const getAWSBucketLink = (file: string) => {
  return `https://${AWS_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${file}`;
};

const getResponseObject = (req: Request, url: string) => {
  const {VoiceId, lan, provider} = req.body;

  return {
    VoiceId,
    language: lan,
    service: provider,
    url,
    gender: 'F'
  };
};

export const storeVoiceInAWS = (req: Request, res: Response, stream: any) => {
  const randomBytes = crypto.randomBytes(64).toString('hex');

  const key = `${randomBytes}.mp3`;

  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
    Body: stream
  };

  s3.putObject(params, (error: any) => {
    if (error) {
      returnError(new InternalServerError('S3 object error'), res);
    }

    const {VoiceId, language, service, url, gender} = getResponseObject(
      req,
      getAWSBucketLink(key)
    );

    res
      .status(200)
      .send(new TTSSuccessResponse(url, service, language, gender, VoiceId));
  });
};
