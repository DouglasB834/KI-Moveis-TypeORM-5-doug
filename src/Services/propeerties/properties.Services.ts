import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/createAdresses.entity";
import { Categories } from "../../entities/createCategories.entity";
import { Properties } from "../../entities/createProperties.entity";
import { appErros } from "../../error/appErros";
import {
  IPropertyRequest,
  IPropertyResponse,
} from "../../interfaces/properties";
import { createAdressesService } from "./createAdresses.Service";

export const createPropertiesService = async (data: IPropertyRequest): Promise<any> => {
  const { address, categoryId } = data;

  const properResp = AppDataSource.getRepository(Properties);
  const categoriesResp = AppDataSource.getRepository(Categories);
  const adressResp = AppDataSource.getRepository(Addresses);

  const findCategory = await categoriesResp.findOneBy({ id: categoryId });
  if (!findCategory) throw new appErros("invalid categoryId1", 404);

  const addadress = await createAdressesService(address);
  const idAdress = addadress.id;
  const findAdress = await adressResp.findOneBy({ id: idAdress });

  const salvando = properResp.create({
    ...data,
    category: findCategory,
    address: findAdress,
  });
  const addPropiedade = await properResp.save(salvando);

  return addPropiedade;
};

export const listePropertiesService = async (): Promise<Properties[]> => {
  const properResp = AppDataSource.getRepository(Properties);

  const findPropry = properResp.find({
    relations: { address: true, category: true },
  });
  return findPropry;
};
