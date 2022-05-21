import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"

@Entity("products")
class Product {
    @PrimaryColumn()
    id_product: string;

    @Column()
    name: string;

    @Column()
    description: string;

    constructor() {
        if (!this.id_product) {
            this.id_product = uuidv4()
        }
    }
}

export { Product }