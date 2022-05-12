class Success {
    constructor(public statusCode: number)  {
        this.statusCode = statusCode;
      }
}
export class TTSSuccessResponse extends Success {
    constructor(public url: any | string) {
        super(200)
    }  
}