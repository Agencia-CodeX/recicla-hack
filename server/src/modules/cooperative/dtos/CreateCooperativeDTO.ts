interface ICreteCooperativeDTO {
    id_cooperative?: string;
    email: string;
    password: string;
    razao_social: string;
    cep: string;
    logradouro: string;
    numero_casa: string;
    telefone: string;
    responsavel: string;
    cidade: string; 
    uf: string; 
    bairro: string;
    created_at?: Date;
}

export { ICreteCooperativeDTO }