import { container } from "tsyringe"
import { CoopRepository } from "../../modules/cooperative/infra/typeorm/repository/CoopRepository";
import { ICoopRepository } from "../../modules/cooperative/repository/ICoopRepository";



container.registerSingleton<ICoopRepository>(
    "CoopRepository",
    CoopRepository
);


