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
            { id_product: 1, name: "Papel", description: "Produtos de papel" },
            { id_product: 2, name: "Plástico", description: "Produtos de plástico" },
            { id_product: 3, name: "Metal", description: "Produtos de metal" },
            { id_product: 4, name: "Vidro", description: "Produtos de vidro" },
            { id_product: 5, name: "Bateria", description: "Produtos de bateria" },
            { id_product: 6, name: "Papelão", description: "Produtos de papelão" },
        ])
        .execute();
    
        await connection.close();
}

create().then(() => console.log("Produtos cadastrados!"))
