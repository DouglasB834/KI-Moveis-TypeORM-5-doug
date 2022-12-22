import * as yup from "yup";
import { IAddressRequest } from "../interfaces/properties";

export const addressReq: yup.SchemaOf<IAddressRequest | any> = yup.object().shape({
    district: yup.string().min(3).required(),
    zipCode: yup.string().max(8).required(),
    number: yup.number(),
    city: yup.string().required(),
    state: yup.string().max(2).required()
  });


  