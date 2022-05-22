import { Router } from "express";
import { coopRoutes } from "./coop.routes";
import { postRoutes } from "./post.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/coop", coopRoutes)
router.use("/post", postRoutes)
router.use("/user", usersRoutes)

export { router }
