import { Properties } from "../../entities/createProperties.entity"

export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}


export interface IScheduleResponse {
    userId: string
    propertyId: Properties
    date: string
    hour: string
}