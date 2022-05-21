interface ICreteCooperativeDTO {

    id_cooperative?: string;
    email: string;
    password: string;
    razao_social: string;
    cep: string;
    logradouro: string;
    numero: string;
    telefone: string;
    responsavel: string;
    cidade: string; 
    uf: string; 
    bairro: string;
}

export { ICreteCooperativeDTO }