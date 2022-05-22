import { inject, injectable } from "tsyringe";
import { ICoopRepository } from "../../repository/ICoopRepository";
interface IRequest {
    uf?: string;
    cidade?: string;

}
@injectable()
class ListCooperativesUseCase {
    constructor(
        @inject("CoopRepository")
        private coopRepository: ICoopRepository
    ) {}
    async execute({ cidade, uf }: IRequest) {
        const coops = await this.coopRepository.listCoop(
            uf,
            cidade
        )

        return coops
    }
}

export { ListCooperativesUseCase }