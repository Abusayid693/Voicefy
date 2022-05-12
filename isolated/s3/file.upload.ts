import crypto from 'crypto';
import express, {NextFunction, Request, Response} from 'express';
import multer from 'multer';
import {IFile} from '../../@types/types';
import {AWS_BUCKET_NAME} from '../../local.config';
import {ErrorResponse} from '../../utils/errorResponse';
import {s3} from '../cloud.config';

const router = express.Router();

// @ts-ignore
const storage = multer.memoryStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    callback: any
  ) {
    callback(null, '');
  }
});

const upload = multer({storage}).single('image');

const S3UploadFile = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  let image = req.files.file as IFile;
  let imageType = image.mimetype.split('/')[1];
  let randomBytes = crypto.randomBytes(64).toString('hex');

  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: `${randomBytes}.${imageType}`,
    Body: image.data
  };

  s3.upload(params, (error: any, data: any) => {
    if (error) {
      res.send(new ErrorResponse('S3 image upload error', 500));
    }
    res.status(200).send(data);
  });
};

router.route('/upload').post(upload, S3UploadFile);

export default router;
