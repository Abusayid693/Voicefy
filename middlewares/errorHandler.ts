import {NextFunction, Response} from 'express';
import {ErrorResponse} from '../utils/errorResponse';

export const logError = (err: ErrorResponse) => {
  console.error(err);
};

export const logErrorMiddleware = (err: ErrorResponse, next: NextFunction) => {
  console.error(err);
  next(err);
};

export const returnError = (err: ErrorResponse, res: Response) => {
  res.status(err.statusCode || 500).send(err);
};
