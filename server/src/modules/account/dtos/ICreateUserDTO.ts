interface ICreateUserDTO {

    id_user?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
}

export { ICreateUserDTO }