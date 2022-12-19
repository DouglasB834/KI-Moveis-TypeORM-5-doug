import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { IUserResponse } from "../interfaces/users";
import { listResSchema } from "../Serializer/usersSchemas";

export const listUsersService = async ():Promise <IUserResponse[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.find();
  const responserUser = await listResSchema.validate(user, {
    stripUnknown: true,
  });
  return responserUser;
};
