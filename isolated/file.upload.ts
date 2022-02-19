import express from "express";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

const S3UploadFile = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  console.log(req.files)

  res.send("file uploaded successfully");
};

router.route("/").post(S3UploadFile);

export default router;
