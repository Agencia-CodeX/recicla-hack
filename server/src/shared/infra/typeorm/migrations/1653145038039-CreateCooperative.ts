import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCooperative1653145038039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cooperatives",
                columns: [
                    {
                        name: "id_cooperative",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "razao_social",
                        type: "varchar",
                    },
                    {
                        name: "cep",
                        type: "varchar",
                    },
                    {
                        name: "logradouro",
                        type: "varchar",
                    },
                    {
                        name: "numero_casa",
                        type: "varchar",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                    },
                    {
                        name: "responsavel",
                        type: "varchar",
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                    },
                    {
                        name: "uf",
                        type: "varchar",
                    },
                    {
                        name: "bairro",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cooperatives")
    }

}
