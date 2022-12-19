import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";
import { IUser, IUserRequest } from "../interfaces/users";
import { resUpdateSchema } from "../Serializer/usersSchemas";

export const createUserService = async (data: IUserRequest): Promise<IUser> => {
  const { email } = data;
  const userRes = AppDataSource.getRepository(User);
  const userExist = await userRes.findOneBy({ email: email });

  if (userExist) {
    throw new appErros("E-mail already registered", 409);
  }
  const user = userRes.create(data);
  await userRes.save(user);

  const resUSer = await resUpdateSchema.validate(user,{
    stripUnknown:true
})
  return  resUSer;
};
