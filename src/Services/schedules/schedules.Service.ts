import { format } from "path";
import AppDataSource from "../../data-source";
import { Properties } from "../../entities/createProperties.entity";
import { User } from "../../entities/createuser.entity";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties";
import { appErros } from "../../error/appErros";
import {
  IScheduleRequest,
  IScheduleResponse,
} from "../../interfaces/schedules";

export const schedulesCreateService = async (
  data: IScheduleRequest,
  id: string
) => {
  const { hour, date, propertyId } = data;
  const schedulesRep = AppDataSource.getRepository(SchedulesUserProperties);
  const propertiesRep = AppDataSource.getRepository(Properties);
  const userRep = AppDataSource.getRepository(User);



  const findUser = await userRep
    .createQueryBuilder()
    .select("u")
    .from("users", "u")
    .where("u.id = :id", { id: id })
    .getOne();

  if (!findUser) throw new appErros("user not found user ", 404);

  const findProper = await propertiesRep
    .createQueryBuilder()
    .select("p")
    .from("properties", "p")
    .where("p.id = :id", { id: propertyId })
    .getOne();
  if (!findProper) throw new appErros("property not found1", 404);


  const findSchedules = await schedulesRep
    .createQueryBuilder()
    .select("sup")
    .from("schedulesUserProperties", "sup")
    .where("sup.date = :date", { date: date })
    .andWhere("sup.hour = :hour", { hour: hour })
    .getOne();

  if (findSchedules) throw new appErros("Schedules time or day unavailable ", 409);

  const newDate = new Date(data.date).toString().split(" ")[0];

  if (newDate == "Sat" || newDate == "Sun") {
    throw new appErros("user not found ", 400);
  }

  if (data.hour > "18:00" || data.hour < "08:00") {
    throw new appErros("hora errada ", 400);
  }

  const addSchedules = schedulesRep.create({
    ...data,
    property: findProper,
    user: findUser,
  });
  await schedulesRep.save(addSchedules);

//   const insertSchedules = await schedulesRep.createQueryBuilder()
//   .insert()
//   .values([
//       { date: date, hour: hour, property: findProper, user:findUser}
//   ])
//   .returning("*")
//   .execute();
//   console.log(insertSchedules)
  return { message: "Schedule created" };
};
