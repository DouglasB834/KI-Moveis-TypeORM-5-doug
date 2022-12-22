import { NextFunction, Request, Response } from "express";
import { AnySchema } from 'yup'
import { appErros } from "../error/appErros";

export const validateUpdatedMiddleware = (schema:AnySchema) => async (req:Request, res:Response, next: NextFunction) => {
    try {
      const validatedbody = await schema.validate(req.body, {
        stripUnknown: true,// nao deixa passar nenhm campo a mais 
        abortEarly: false,//mais de um erros 
      });
      req.body = validatedbody;

      return next();

    } catch (error) {
      throw new appErros(error.message)
    }
  };

