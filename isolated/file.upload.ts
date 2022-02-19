import express from "express";
import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { AWS_ID, AWS_SECRET, AWS_BUCKET_NAME } from "../local.config";
import { IFile } from "../types";
import AWS from "aws-sdk";
import crypto from "crypto";

const router = express.Router();

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: AWS_ID,
    secretAccessKey: AWS_SECRET,
  },
});

// @ts-ignore
const storage = multer.memoryStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    callback: any
  ) {
    callback(null, "");
  },
});

const upload = multer({ storage }).single("image");

const S3UploadFile = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  let image = req.files.file as IFile;
  let imageType = image.mimetype.split("/")[1];
  let randomBytes = crypto.randomBytes(64).toString("hex");

  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: `${randomBytes}.${imageType}`,
    Body: image.data,
  };

  s3.upload(params, (error: any, data: any) => {
    if (error) {
      res.status(500).send(error);
    }
    console.log("S3 :", data);
    res.status(200).send(data);
  });
};

router.route("/upload").post(upload, S3UploadFile);

export default router;
