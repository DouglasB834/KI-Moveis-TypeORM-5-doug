import * as yup from "yup";
import { IUserRequest, IUserResponse, IUserUpdate } from "../interfaces/users";

export const userSchema: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6),
  isAdm: yup.boolean().required(),
});

export const UpdateSchema: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().min(3).notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().min(6).notRequired(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(6),
});

export const resUpdateSchema: yup.SchemaOf<IUserResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().min(3).notRequired(),
  email: yup.string().email().notRequired(),
  isActive: yup.boolean().notRequired(),
  isAdm: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export const listResSchema: yup.SchemaOf<IUserResponse[]> =
  yup.array(resUpdateSchema);
