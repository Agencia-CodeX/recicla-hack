import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCoopProductUseCase } from "./CreateCoopProductUseCase";

class CreateCoopProductController {
    async handle(request: Request, response: Response) {
        const { coopProducts, fk_coop_id_coop } = request.body;

        const createCoopProductUseCase = container.resolve(CreateCoopProductUseCase)

        await createCoopProductUseCase.execute({
            fk_coop_id_coop,
            coopProducts
        })
    }
}

export { CreateCoopProductController }