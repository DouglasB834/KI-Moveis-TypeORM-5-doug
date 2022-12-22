import { Properties } from "../../entities/createProperties.entity"
import { IUser } from "../users"

export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}


export interface IScheduleResponse {
    userId: string
    propertyId: string
    date: string
    hour: string
    user:IUser

}