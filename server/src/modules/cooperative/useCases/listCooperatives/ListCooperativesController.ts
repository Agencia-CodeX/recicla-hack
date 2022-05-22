import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCooperativesUseCase } from "./ListCooperativesUseCase";

class ListCooperativesController {
    async handle(request: Request, response: Response) {
        const { uf, cidade } = request.query;

        const listCooperativesUseCase = container.resolve(ListCooperativesUseCase)

        const coops = await listCooperativesUseCase.execute({
            uf: uf as string, 
            cidade: cidade as string
        })

        return response.json(coops)
    }
}


export { ListCooperativesController }