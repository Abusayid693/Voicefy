import express from "express";
import { Request, Response, NextFunction } from "express";
import { AWS_BUCKET_NAME } from "../../local.config";
import { ErrorResponse } from "../../utils/errorResponse";
import { s3 } from "../cloud.config";
import crypto from "crypto";
import { ttsCommonService } from "./tts.controllers";

const router = express.Router();

const AwsTTSDemo = (req: Request, res: Response, next: NextFunction) => {
  const { ssmlText, VoiceId, lan, provider } = req.body;

  const input = {
    Text: ssmlText,
    OutputFormat: "mp3",
    VoiceId: VoiceId,
    LanguageCode: lan,
  };

  const data = ttsCommonService(res, input, provider);
  let randomBytes = crypto.randomBytes(64).toString("hex");

  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: `${randomBytes}.mp3`,
    // @ts-ignore
    Body: data as Buffer,
  };

  s3.putObject(params, (error: any, data: any) => {
    if (error) {
      console.log(error);
      return res.send(new ErrorResponse("S3 file upload", 404));
    }
    const params_ = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${randomBytes}.mp3`,
    };
    let url = s3.getSignedUrl("getObject", params_);
    res.status(200).send({
      success: true,
      url,
    });
  });
};

router.route("/tts").post(AwsTTSDemo);

export default router;
