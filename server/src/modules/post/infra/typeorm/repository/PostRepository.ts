import { getRepository, Repository } from "typeorm";
import { ICreatePostDTO } from "../../../dtos/ICreatePostDTO";
import { IPostRepository } from "../../../repository/IPostRepository";
import { Post } from "../entities/Post";

class PostRepository implements IPostRepository {
    private repository: Repository<Post>
    constructor() {
        this.repository = getRepository(Post)
    }
    async create({ body, like, resume, shares, title }: ICreatePostDTO): Promise<Post> {
        const post = this.repository.create({
            body, 
            like, 
            resume, 
            shares, 
            title
        })

        await this.repository.save(post)

        return post;
    }
}


export { PostRepository }