import { container } from "tsyringe"
import { CoopRepository } from "../../modules/cooperative/infra/typeorm/repository/CoopRepository";
import { ICoopRepository } from "../../modules/cooperative/repository/ICoopRepository";
import { CoopProductsRepository } from "../../modules/coopProducts/infra/typeorm/repository/CoopProductsRepository";
import { ICoopProductsRepository } from "../../modules/coopProducts/repository/ICoopProductsRepository";



container.registerSingleton<ICoopRepository>(
    "CoopRepository",
    CoopRepository
);

container.registerSingleton<ICoopProductsRepository>(
    "CoopProductsRepository",
    CoopProductsRepository
);




