import { Request, Response } from "express";
import { container } from "tsyringe";
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
        uf 
        } = request.body

        const createCooperativeUseCase = container.resolve(CreateCooperativeUseCase);

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

        return response.json(coop)
    }
}

export { CreateCooperativeController }