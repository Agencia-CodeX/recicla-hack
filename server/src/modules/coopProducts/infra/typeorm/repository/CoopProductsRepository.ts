import { getRepository, Repository } from "typeorm";
import { ICreateCoopProductsDTO } from "../../../dtos/CreateCoopProductsDTO";
import { ICoopProductsRepository } from "../../../repository/ICoopProductsRepository";
import { CoopProducts } from "../entities/CoopProducts";


class CoopProductsRepository implements ICoopProductsRepository {
    private repository: Repository<CoopProducts>

    constructor() {
        this.repository = getRepository(CoopProducts)
    }
    async create({ fk_coop_id_coop, fk_prod_id_prod }: ICreateCoopProductsDTO): Promise<void> {
        const products = this.repository.create({
            fk_coop_id_coop,
            fk_prod_id_prod
        })

        await this.repository.save(products)
    }
}

export { CoopProductsRepository }