import { inject, injectable } from "tsyringe";
import { ICoopProductsRepository } from "../../repository/ICoopProductsRepository";

interface IRequest {
    fk_coop_id_coop: string;

    coopProducts: {
        fk_prod_id_prod: string;
    }[];
}

@injectable()
class CreateCoopProductUseCase {
    constructor(
        @inject("CoopProductsRepository")
        private coopProdRepository: ICoopProductsRepository
    ) {}

    async execute({ fk_coop_id_coop, coopProducts }: IRequest) {
        coopProducts.map(async (coopProduct) => {
            const { fk_prod_id_prod } = coopProduct;

            await this.coopProdRepository.create({
                fk_coop_id_coop,
                fk_prod_id_prod
            })
        })
    }
}

export { CreateCoopProductUseCase }