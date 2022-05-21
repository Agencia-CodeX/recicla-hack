import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"
import { Cooperative } from "../../../../cooperative/infra/typeorm/entities/Cooperative";

@Entity("products")
class Product {
    @PrimaryColumn()
    id_product: string;

    @ManyToOne(() => Cooperative)
    @JoinColumn({ name: "fk_coop_id_coop" })
    cooperative: Cooperative;

    @Column()
    fk_coop_id_coop: string;

    @Column()
    name: string

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor () {
        if (!this.id_product) {
            this.id_product = uuidv4()
        }
    }
}

export { Product }