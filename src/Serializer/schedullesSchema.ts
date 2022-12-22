import { IScheduleRequest } from "../interfaces/schedules";
import * as yup from "yup"

export const schedulesSchema: yup.SchemaOf<IScheduleRequest> = yup.object().shape({
    userId: yup.string().required(),
    propertyId: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required()

})

