import { Router } from "express";
import { coopRoutes } from "./coop.routes";
import { postRoutes } from "./post.routes";

const router = Router();

router.use("/coop", coopRoutes)
router.use("/post", postRoutes)

export { router }
