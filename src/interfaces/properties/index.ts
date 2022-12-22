import { ICategoryResponse } from "../categories";

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
    value: number
    size: number
    address: IAddressRequest
    category: ICategoryResponse
    id: string
	sold: boolean
	createdAt: Date
	updatedAt: Date

}