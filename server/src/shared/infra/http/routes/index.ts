import { Router } from "express";
import { coopRoutes } from "./coop.routes";

const router = Router();

router.use("/coop", coopRoutes)

export { router }
