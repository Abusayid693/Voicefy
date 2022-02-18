import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";

interface IRequest extends Request{
  user?:any;
}

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: IRequest ;
  res: Response;
};
