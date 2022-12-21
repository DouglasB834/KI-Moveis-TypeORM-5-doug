import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";
export const deleteUserService = async (userId: string):Promise <{}> => {
  const userRes = AppDataSource.getRepository(User);
  const user = await userRes.findOneBy({ id: userId });

  if (!user) {
    throw new appErros("user not foud",404)
  }

    // await userRes.softRemove(user);
  // const tableDelete =await userRes.save({
  //   ...user, isActive:false
  // })
  
  await userRes.update(userId, { isActive: false });
  return {};
};
