import {httpStatusCodes} from '../constants';

export class ErrorResponse extends Error {
  constructor(message: any | string, public statusCode: number) {
    super(message);
  }
}

export class Api404Error extends ErrorResponse {
  constructor(message: any | string) {
    super(message, httpStatusCodes.NOT_FOUND);
  }
}

export class InternalServerError extends ErrorResponse {
  constructor(message: any | string) {
    super(message, httpStatusCodes.NOT_FOUND);
  }
}
