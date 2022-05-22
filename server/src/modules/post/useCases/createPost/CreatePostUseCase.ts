import { inject, injectable } from "tsyringe";
import { IPostRepository } from "../../repository/IPostRepository";

interface IRequest {
    body: string;
    like: number;
    resume: string;
    shares: number
    title: string;
}

@injectable()
class CreatePostUseCase {

    constructor (
        @inject("PostRepository")
        private postRepository: IPostRepository
    ) {}

    async execute({ body, like, resume, shares, title }: IRequest) {
        const post = await this.postRepository.create({
            body, 
            like, 
            resume, 
            shares, 
            title
        })

        return post
    }
}


export { CreatePostUseCase }