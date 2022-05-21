import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/App.Error";
import { ICoopRepository } from "../../repositories/ICoopRepository";
import { hash } from "bcryptjs"
interface IRequest {
    email: string;
    password: string;
    razao_social: string;
    cep: string;
    logradouro: string;
    numero: string;
    telefone: string;
    responsavel: string;
    cidade: string; 
    uf: string; 
    bairro: string;
}

@injectable()
class CreateCooperativeUseCase {
    constructor(
        @inject("CoopRepository")
        private coopRepository: ICoopRepository
    ) {}

    async execute({ 
        bairro,
        cep,
        cidade,
        email, 
        logradouro,
        numero,
        password,
        razao_social,
        responsavel,
        telefone,
        uf 
        }: IRequest) {
        const coopAlreadyExists = await this.coopRepository.findByEmail(email)
        
        if (coopAlreadyExists) {
            throw new AppError("Cooperative already registered!", 401)
        }
        const passwordHash = await hash(password, 8) 
        const coop = await this.coopRepository.create({
            bairro,
            cep,
            cidade,
            email, 
            logradouro,
            numero,
            password: passwordHash,
            razao_social,
            responsavel,
            telefone,
            uf 
        })

        delete coop.password

        return coop;
    }
}

export { CreateCooperativeUseCase }