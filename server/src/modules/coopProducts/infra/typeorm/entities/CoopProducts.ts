import { Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("coop_products")
class CoopProducts {
    @PrimaryColumn()
    id_coopProducts: string;

    @PrimaryColumn()
    fk_coop_id_coop: string;

    @PrimaryColumn()
    fk_prod_id_prod: number;

    constructor() {
        if (!this.id_coopProducts) {
            this.id_coopProducts = uuidv4()
        }
    }

}


export { CoopProducts }