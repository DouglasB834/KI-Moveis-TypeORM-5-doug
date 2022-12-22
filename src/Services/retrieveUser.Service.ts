import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";

export const retrieveUserService = async (userId: string): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);
  return await userRepo.findOneBy({ id: userId });
};
