import { Product } from "../../../../modules/product/infra/typeorm/entities/Product";
import createConnection from "../index";
import { v4 as uuidv4 } from "uuid";
async function create() {
    const connection = await createConnection("localhost")

    await connection
        .createQueryBuilder()
        .insert()
        .into(Product)
        .values([
            { id_product: uuidv4(), name: "Plastico", description: "Material Ruim" }, 
            { id_product: uuidv4(), name: "Papel", description: "Brabao" },
        ])
        .execute();
    
        await connection.close();
}

create().then(() => console.log("Produtos cadastrados!"))
