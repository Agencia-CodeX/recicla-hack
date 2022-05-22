import { ICreteCooperativeDTO } from "../dtos/CreateCooperativeDTO"
import { Cooperative } from "../infra/typeorm/entities/Cooperative"

interface ICoopRepository {
    create(data: ICreteCooperativeDTO): Promise<Cooperative>;
    findByEmail(email: string): Promise<Cooperative>;
    listCoop(uf: string, municipio: string): Promise<Cooperative>;
}


export { ICoopRepository }