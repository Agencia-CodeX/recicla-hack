import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
    async handle(request: Request, response: Response) {
        const { 
            body, 
            like, 
            resume, 
            shares, 
            title 
        } = request.body

        const createPostUseCase = container.resolve(CreatePostUseCase)

        await createPostUseCase.execute({
            body, 
            like, 
            resume, 
            shares, 
            title 
        })

        return response.status(201).send()
    }
}

export { CreatePostController }