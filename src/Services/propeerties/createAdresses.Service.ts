import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/createAdresses.entity";
import { appErros } from "../../error/appErros";
import { IAddressRequest } from "../../interfaces/properties";

export const createAdressesService = async (
  data: IAddressRequest
): Promise<IAddressRequest> => {
  const addressResp = AppDataSource.getRepository(Addresses);
  if (data.zipCode.length > 8 || data.state.length > 2) {
    throw new appErros("invalid zipCode", 400);
  }
  const findAdres = await addressResp.findOneBy({ zipCode: data.zipCode });

  if (findAdres) {
    throw new appErros("already exists22", 409);
  }

  const add = addressResp.create(data);
  await addressResp.save(add);

  return add;
};
