import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1653145778054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "products",
                columns: [
                    {
                        name: "id_product",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fk_coop_id_coop",
                        type: "uuid"
                    },

                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ],
                foreignKeys: [
                    {
                        name: "fk_coop_prod",
                        referencedTableName: "cooperatives",
                        referencedColumnNames: ["id_cooperative"],
                        columnNames: ["fk_coop_id_coop"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
