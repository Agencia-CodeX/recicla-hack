import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"

@Entity("products")
class Product {
    @PrimaryColumn()
    id_product: number;

    @Column()
    name: string;

    @Column()
    description: string;
}

export { Product }