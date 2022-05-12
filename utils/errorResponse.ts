export class ErrorResponse extends Error {
  constructor(message: any | string, public statusCode: number) {
    super(message);
  }
}