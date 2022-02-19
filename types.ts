import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";

export interface IFile {
  name: String
  data: Buffer
  size: Number
  encoding: String
  tempFilePath: String
  truncated: Boolean
  mimetype: String
  md5: String
}

interface IRequest extends Request{
  user?:any
  files:any
}

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: IRequest ;
  res: Response;
};
