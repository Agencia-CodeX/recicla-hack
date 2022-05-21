import { getRepository, Repository } from "typeorm";
import { ICreteCooperativeDTO } from "../../../dtos/CreateCooperativeDTO";
import { ICoopRepository } from "../../../repository/ICoopRepository";
import { Cooperative } from "../entities/Cooperative";

class CoopRepository implements ICoopRepository {
    private repository: Repository<Cooperative>;

    constructor() {
        this.repository = getRepository(Cooperative);
    }

    async create({ 
        bairro, 
        cep, 
        cidade, 
        email, 
        logradouro, 
        numero_casa, 
        password, 
        razao_social, 
        responsavel, 
        telefone, 
        uf,
        created_at 
    }: ICreteCooperativeDTO): Promise<Cooperative> {
        const coop = this.repository.create({
            bairro, 
            cep, 
            cidade, 
            email, 
            logradouro, 
            numero_casa, 
            password, 
            razao_social, 
            responsavel, 
            telefone, 
            uf,
            created_at 
        })

        await this.repository.save(coop)

        return coop;
    }

    async findByEmail(email: string): Promise<Cooperative> {
        const coop = await this.repository.findOne({ email })

        return coop;
    }

}

export { CoopRepository }