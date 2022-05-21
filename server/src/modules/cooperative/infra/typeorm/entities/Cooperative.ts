import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("cooperatives")
class Cooperative {
    @PrimaryColumn()
    id_cooperative: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    razao_social: string;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    telefone: string;

    @Column()
    responsavel: string;

    @Column()
    cidade: string; 

    @Column()
    uf: string; 

    @Column()
    bairro: string;

    constructor () {
        if (!this.id_cooperative) {
            this.id_cooperative = uuidv4()
        }
    }
}

export { Cooperative }