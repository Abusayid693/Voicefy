import express, { NextFunction, Request, Response } from 'express';
import { cloudVoice } from './tts.controllers';

const router = express.Router();

const AwsTTSDemo = (req: Request, res: Response, next: NextFunction) => {
  cloudVoice(req, res, next);
};

router.route('/tts').post(AwsTTSDemo);

export default router;