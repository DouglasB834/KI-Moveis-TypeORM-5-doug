import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";

export const authorTokenMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  
  if(!authorization) return res.status(401).json( {message: "invalid toke authorization headers"})
  
  const token = authorization.split(" ")[1];
  jwt.verify( token, process.env.SECRET_KEY, (error, decoded:any) =>{
    if (error) {
      return res.status(403).json({ error: "Missing Authorization headers" });
    }
    req.user ={
      id: decoded.sub,
      isAdm: decoded.isAdm
    }
    return next()

  })
  
};
