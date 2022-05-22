import { ICreateCoopProductsDTO } from "../dtos/CreateCoopProductsDTO"

interface ICoopProductsRepository {
    create(data: ICreateCoopProductsDTO): Promise<void>
}


export { ICoopProductsRepository }