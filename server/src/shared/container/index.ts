import { container } from "tsyringe"

import { CoopRepository } from "../../modules/cooperative/infra/typeorm/repositories/CoopRepository"
import { ICoopRepository } from "../../modules/cooperative/repositories/ICoopRepository"

container.registerSingleton<ICoopRepository>(
    "CoopRepository",
    CoopRepository
);