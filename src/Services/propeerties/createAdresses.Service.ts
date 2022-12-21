import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/createAdresses.entity";
import { IAddressRequest } from "../../interfaces/properties";

export const createAdressesService = async (data: IAddressRequest): Promise<IAddressRequest> =>{
    const addressResp = AppDataSource.getRepository(Addresses)

    const add = addressResp.create(data);
    await addressResp.save(add)

    return add
}