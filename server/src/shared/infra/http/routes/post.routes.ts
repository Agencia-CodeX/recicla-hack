import { Router } from "express"
import { CreatePostController } from "../../../../modules/post/useCases/createPost/CreatePostController"

const postRoutes = Router()

const createPostController = new CreatePostController()

postRoutes.post("/", createPostController.handle)


export { postRoutes }