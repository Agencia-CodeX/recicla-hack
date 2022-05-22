import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCoopProducts1653169463682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "coop_products",
                columns: [
                    {
                        name: "id_coopProducts",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fk_coop_id_coop",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fk_prod_id_prod",
                        type: "numeric",
                        isPrimary: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_coop_prod",
                        referencedTableName: "cooperatives",
                        referencedColumnNames: ["id_cooperative"],
                        columnNames: ["fk_coop_id_coop"],
                        onDelete: "CASCADE"
                    },
                    {
                        name: "fk_prod_coop",
                        referencedTableName: "products",
                        referencedColumnNames: ["id_product"],
                        columnNames: ["fk_prod_id_prod"],
                        onDelete: "CASCADE"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
