import { AWS_ID, AWS_SECRET,IBM_API_KEY, IBM_URL } from "../local.config";
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

import AWS from "aws-sdk";

export const polly = new AWS.Polly({
  region: "ap-south-1",
  credentials: {
    accessKeyId: AWS_ID,
    secretAccessKey: AWS_SECRET,
  },
});

export const s3 = new AWS.S3({
  credentials: {
    accessKeyId: AWS_ID,
    secretAccessKey: AWS_SECRET,
  },
});

export const ibmTts = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: IBM_API_KEY,
  }),
  serviceUrl: IBM_URL,
});