import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    id_user: string;

    @Column()
    name:string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id_user) {
            this.id_user = uuidv4()
        }
    }
}

export { User }