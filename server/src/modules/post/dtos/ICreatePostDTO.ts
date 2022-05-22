interface ICreatePostDTO {
    id_post?: string;
    like: number;
    shares: number;
    title: string;
    body: string;
    resume: string;
    created_at?: Date;
}

export { ICreatePostDTO }
