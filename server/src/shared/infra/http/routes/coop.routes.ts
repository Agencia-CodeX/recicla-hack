import { Router } from "express"
import { CreateCooperativeController } from "../../../../modules/cooperative/useCases/createCooperatives/CreateCooperativeController"
import { ListCooperativesController } from "../../../../modules/cooperative/useCases/listCooperatives/ListCooperativesController"

const coopRoutes = Router()

const createCooperativeController = new CreateCooperativeController()
const listCooperativesController = new ListCooperativesController()

coopRoutes.post("/", createCooperativeController.handle)
coopRoutes.get("/", listCooperativesController.handle)

export { coopRoutes }