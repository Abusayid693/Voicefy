import express from "express";
import { Request, Response, NextFunction } from "express";
import { AWS_BUCKET_NAME } from "../../local.config";
import { ErrorResponse } from "../../utils/errorResponse"
import { polly, s3 } from "../aws.config";
import crypto from "crypto";
import fs from "fs";

const router = express.Router();

const AwsTTSDemo = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const { ssmlText, VoiceId, lan } = req.body;

    const input = {
        Text: ssmlText,
        OutputFormat: "mp3",
        VoiceId: VoiceId,
        LanguageCode: lan,
    };
    polly.synthesizeSpeech(input, (error, data) => {
        if (error) {
            console.log(error)
            return res.send(new ErrorResponse("Aws polly error", 404));
        }
        if (data.AudioStream instanceof Buffer) {
            fs.writeFile("hello.mp3", data.AudioStream, (error) => {
                if (error) console.log('Unable to write file locally for testing')
            });

            let randomBytes = crypto.randomBytes(64).toString("hex");

            const params = {
                Bucket: AWS_BUCKET_NAME,
                Key: `${randomBytes}.mp3`,
                Body: data.AudioStream,
            };

            s3.putObject(params, (error: any, data: any) => {
                if (error) {
                    console.log(error)
                    return res.send(new ErrorResponse("S3 file upload", 404));
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