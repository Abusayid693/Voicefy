class Success {
  constructor(public statusCode: number) {
    this.statusCode = statusCode;
  }
}
export class TTSSuccessResponse extends Success {
  constructor(
    public url: any | string,
    public service: string,
    public language: string,
    public gender: string,
    public voiceId: string
  ) {
    super(200);
  }
}
