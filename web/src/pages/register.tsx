import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Register() {
    const [cpnj, setCnpj] = useState("");

    function handleCreateCooperative(event: FormEvent) {
        event.preventDefault();
    }

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
                            className="w-full h-[34px] flex-wrap rounded-lg px-5 py-5 my-[10px] text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="CNPJ"
                            onChange={event => setCnpj(event.target.value)}
                            value={cpnj}
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <label htmlFor="rs" className="text-[16px] font-bold">Insira a razão social</label>
                        <input
                            id="rs"
                            className="w-full h-[34px] rounded-lg px-5 py-5 my-[10px] text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="Razão social"
                        />
                    </div>
                </div>
                <div className="flex w-full gap-8 my-[10px] flex-wrap">
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            CEP
                        </h3>
                        <input
                            className="w-full  h-[34px] rounded-lg px-5 my-[10px] text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="number"
                            placeholder="CEP"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Lograduro
                        </h3>
                        <input
                            className="w-full h-[34px] px-5 rounded-lg my-[10px] text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="Logradouro"
                        />
                    </div>
                    <div className="flex-1 min-w-[105px]">
                        <h3 className="text-[16px] font-bold">
                            Número
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 my-[10px] text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
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
                            className="w-full h-[34px] px-5 rounded-lg text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="UF"
                        />
                    </div>
                    <div className="flex-1 min-w-[270px]">
                        <h3 className="text[16px] font-bold">
                            Insira a cidade
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="Cidade"
                        />
                    </div>
                    <div className="flex-1 min-w-[240px]">
                        <h3 className="text[16px] font-bold">
                            Insira o bairro
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
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
                            className="w-full h-[34px] rounded-lg px-5 text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="Responsável"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Telefone responsável
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
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
                            className="w-full h-[34px] rounded-lg px-5 text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="flex-1 min-w-[320px]">
                        <h3 className="text-[16px] font-bold">
                            Senha
                        </h3>
                        <input
                            className="w-full h-[34px] rounded-lg px-5 text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]"
                            type="text"
                            placeholder="Senha"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h3>Materais</h3>
                        <ul className="flex items-center gap-[40px]">
                            <li className="flex flex-col items-center">
                                <button className="w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full">
                                    <Image width={25} height={25} src={"/images/papel.svg"} alt="icone representativo do papel"></Image>
                                </button>
                                <span className="mt-[6px]">Papel</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                    <Image width={25} height={25} src={"/images/plastico.svg"} alt="icone representativo do platico">
                                    </Image>
                                </button>
                                <span className="mt-[6px]">Plástico</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                    <Image width={25} height={25} src={"/images/metal.svg"} alt="icone representativo do metal"></Image>
                                </button>
                                <span className="mt-[6px]">Ferro</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                    <Image width={25} height={25} src={"/images/vidro.svg"} alt="icone representativo do vidro"></Image>
                                </button>
                                <span className="mt-[6px]">Vidro</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                    <Image width={25} height={25} src={"/images/baterias.svg"} alt="icone representativo do baterias"></Image>
                                </button>
                                <span className="mt-[6px]">Papelão</span>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="w-[208px] h-[34px] bg-green-50 rounded-lg border-2 border-black text-black "
                    >
                        Carregar logo
                    </button>
                </div>
                <button
                    className="w-[197] h-[40] rounded-lg bg-green-50 border-2 border-black"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}