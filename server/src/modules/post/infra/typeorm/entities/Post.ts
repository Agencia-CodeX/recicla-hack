import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("posts")
class Post {
    @PrimaryColumn()
    id_post: string;

    @Column()
    like: number;

    @Column()
    shares: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    resume: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id_post) {
            this.id_post = uuidv4()
        }
    }
}

export { Post }