import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCoopProductUseCase } from "../../../coopProducts/useCases/createCoopProduct/CreateCoopProductUseCase";
import { CreateCooperativeUseCase } from "./CreateCooperativeUseCase";

class CreateCooperativeController {
    async handle(request: Request, response: Response) {
        const {
        bairro,
        cep,
        cidade,
        email, 
        logradouro,
        numero_casa,
        password,
        razao_social,
        responsavel,
        telefone,
        uf,
        coopProducts
        } = request.body

        const createCooperativeUseCase = container.resolve(CreateCooperativeUseCase);
        const createCoopProductUseCase = container.resolve(CreateCoopProductUseCase);

        const coop = await createCooperativeUseCase.execute({
            bairro,
            cep,
            cidade,
            email, 
            logradouro,
            numero_casa,
            password,
            razao_social,
            responsavel,
            telefone,
            uf 
        })

        await createCoopProductUseCase.execute({
            coopProducts,
            fk_coop_id_coop: coop.id_cooperative
        })
        return response.json(coop)
    }
}

export { CreateCooperativeController }