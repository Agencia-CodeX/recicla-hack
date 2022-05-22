import { container } from "tsyringe"
import { CoopRepository } from "../../modules/cooperative/infra/typeorm/repository/CoopRepository";
import { ICoopRepository } from "../../modules/cooperative/repository/ICoopRepository";
import { CoopProductsRepository } from "../../modules/coopProducts/infra/typeorm/repository/CoopProductsRepository";
import { ICoopProductsRepository } from "../../modules/coopProducts/repository/ICoopProductsRepository";
import { PostRepository } from "../../modules/post/infra/typeorm/repository/PostRepository";
import { IPostRepository } from "../../modules/post/repository/IPostRepository";



container.registerSingleton<ICoopRepository>(
    "CoopRepository",
    CoopRepository
);

container.registerSingleton<ICoopProductsRepository>(
    "CoopProductsRepository",
    CoopProductsRepository
);

container.registerSingleton<IPostRepository>(
    "PostRepository",
    PostRepository
);




