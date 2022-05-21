import { Router } from "express"
import { CreateCooperativeController } from "../../../../modules/cooperative/useCases/createCooperative/CreateCooperativeController"


const coopRoutes = Router()

const createCooperativeController = new CreateCooperativeController()

coopRoutes.post("/", createCooperativeController.handle)

export { coopRoutes }