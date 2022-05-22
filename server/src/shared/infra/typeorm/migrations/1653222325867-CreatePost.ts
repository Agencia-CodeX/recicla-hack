import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePost1653222325867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id_post",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "like",
                        type: "numeric"
                    },
                    {
                        name: "shares",
                        type: "numeric"
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "body",
                        type: "varchar"
                    },
                    {
                        name: "resume",
                        type: "varchar"
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
        await queryRunner.dropTable("posts")
    }

}
