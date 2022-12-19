import { NextFunction, Request ,Response} from "express";


export class appErros extends Error  {
  statusCode : number
  constructor(message :string, statusCode :number =400) {
    super();
    this.message =  message ;
    this.statusCode = statusCode
  }
}
  export const handleErro =  async (error: Error, req: Request , res:Response, next:NextFunction) =>
  {
    const msg = {message: error.message}
    console.log( error)
    if (error instanceof appErros) {
      return res.status(error.statusCode).json(msg);
    }

    return res.status(500).json({ message: "internal serve error" });
  };