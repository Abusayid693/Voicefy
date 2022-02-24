import { AWS_ID, AWS_SECRET, AWS_BUCKET_NAME } from "../local.config";

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
