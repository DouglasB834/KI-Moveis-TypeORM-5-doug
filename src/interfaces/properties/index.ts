import { ICategoryResponse } from "../categories";
import { IScheduleResponse } from "../schedules";

export interface IAddressRequest {
    id?:string;
    district: string
    zipCode: string
    number?: string
    city: string
    state: string
}

export interface IPropertyRequest {
    value: number
    size: number
    address: IAddressRequest
    categoryId: string
}
export interface IPropertyResponse {
    id: string
	sold: boolean
    value: number
    size: number
	createdAt: Date
	updatedAt: Date
    schedules: IScheduleResponse
    address: IAddressRequest
    category: ICategoryResponse

}