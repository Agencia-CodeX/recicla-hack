import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { email, password, name } = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute({
            email, 
            password, 
            name
        })

        return response.status(201).send()
    }
}


export { CreateUserController }