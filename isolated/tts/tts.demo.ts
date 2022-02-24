import express from "express";
import { Request, Response, NextFunction } from "express";
import { AWS_BUCKET_NAME } from "../../local.config";
import { polly, s3 } from "../aws.config";
import crypto from "crypto";
import fs from "fs";

const router = express.Router();

const AwsTTSDemo = (req: Request, res: Response, next: NextFunction) => {
  const input = {
    Text: "Hello everyone i am doin ",
    OutputFormat: "mp3",
    VoiceId: "Aditi",
    LanguageCode: 'arb'
  };
  polly.synthesizeSpeech(input, (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    if (data.AudioStream instanceof Buffer) {
      fs.writeFile("hello.mp3", data.AudioStream, (error) => {
        if (error) res.status(500).send(error);
      });

      let randomBytes = crypto.randomBytes(64).toString("hex");

      const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: `${randomBytes}.mp3`,
        Body: data.AudioStream,
        
      };

      s3.putObject(params, (error: any, data: any) => {
        if (error) {
          res.status(500).send(error);
        }
        const params_ = {
          Bucket: AWS_BUCKET_NAME,
          Key: `${randomBytes}.mp3`,
        };
        let url = s3.getSignedUrl("getObject", params_);
        res.status(200).send(url);
      });
    }
  });
};

router.route("/tts").post(AwsTTSDemo);

export default router;
