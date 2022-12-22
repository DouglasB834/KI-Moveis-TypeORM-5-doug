import { NextFunction, Request, Response } from "express";
import { appErros } from "../error/appErros";


export const ValidatedMiddleware = (schema:any) => async (req:Request, res:Response, next: NextFunction) => {
    try {
      const validatedbody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      
      req.body = validatedbody;
      return next();

    } catch (error) {
      throw new appErros(error.message)
    }
  };

