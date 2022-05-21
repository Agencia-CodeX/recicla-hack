export default function Register() {
    return (
        <div className="w-[90%] mx-[5%] my-[57px] py-10 flex items-center bg-[#005E2C] flex-col rounded-2xl">
            <h1 className="text-4xl py-5 font-bold">
                Cadastre-se
            </h1>
            <form className="px-20 flex flex-col w-full">
                <div className="flex gap-5 flex-wrap w-full">
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">Insira o CNPJ da sua emrpesa</h3>
                        <input
                            className="w-full h-[34px] flex-wrap rounded-lg px-5 py-5 my-[10px] text-black"
                            type="text"
                            placeholder="CNPJ"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">Insira a razão social</h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 py-5 my-[10px]"
                            type="text"
                            placeholder="Nome"
                        />
                    </div>
                </div>
                <div className="flex w-full gap-8 my-[10px] flex-wrap">
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            CEP
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 my-[10px]"
                            type="number"
                            placeholder="CEP"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Lograduro
                        </h3>
                        <input
                            className="w-full h-[34px] px-5 rounded-lg my-[10px]"
                            type="text"
                            placeholder="Logradouro"
                        />
                    </div>
                    <div className="flex-1 min-w-[105px]">
                        <h3 className="text-[16px] font-bold">
                            Número
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 my-[10px]"
                            type="number"
                            placeholder="Número"
                        />
                    </div>
                </div>
                <div className="flex w-full gap-10 my-[10px] flex-wrap">
                    <div className="flex-1 min-w-[75px]">
                        <h3 className="text-[16px] font-bold">
                            Insira a UF
                        </h3>
                        <input
                            className="w-full h-[34px] px-5 rounded-lg"
                            type="text"
                            placeholder="UF"
                        />
                    </div>
                    <div className="flex-1 min-w-[270px]">
                        <h3 className="text[16px] font-bold">
                            Insira a cidade
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5"
                            type="text"
                            placeholder="Cidade"
                        />
                    </div>
                    <div className="flex-1 min-w-[240px]">
                        <h3 className="text[16px] font-bold">
                            Insira o bairro
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5"
                            type="text"
                            placeholder="Bairro"
                        />
                    </div>
                </div>
                <div className="flex w-full gap-10 my-[10px] flex-wrap">
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Responsavel
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5"
                            type="text"
                            placeholder="Responsável"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Telefone responsável
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5"
                            type="text"
                            placeholder="Telefone responsável"
                        />
                    </div>
                </div>
                <div className="flex w-full gap-10 my-[10px] flex-wrap">
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Email
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5"
                            type="text"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Senha
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5"
                            type="text"
                            placeholder="Senha"
                        />
                    </div>
                </div>
                {/* <div className="flex-1 min-w-[320px]">
                    <h3 className="text-[16px] font-bold">
                        Materiais
                    </h3>
                    <ul>
                        <li><img src="" alt="" /></li>
                    </ul>
                </div> */}
            </form>
        </div>
    )
}