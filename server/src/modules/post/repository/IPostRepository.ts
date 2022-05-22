import { ICreatePostDTO } from "../dtos/ICreatePostDTO"
import { Post } from "../infra/typeorm/entities/Post"

interface IPostRepository {
    create(data: ICreatePostDTO): Promise<Post>;
}

export { IPostRepository }