import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md"

export default function Register() {
    const [cpnj, setCnpj] = useState("");

    const [papelButton, setPapelButton] = useState(false);
    const [plasticoButton, setPlasticoButton] = useState(false);
    const [metalButton, setMetalButton] = useState(false);
    const [vidroButton, setVidroButton] = useState(false);
    const [bateriaButton, setBateriaButton] = useState(false);
    const [papelaoButton, setPapelaoButton] = useState(false);

    function handleCreateCooperative(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <>
            <div className="absolute top-5 left-5">
                <Link href={"/"}>
                    <a className="flex items-center">
                        <MdKeyboardArrowLeft className="w-8 h-8 font-bold" />
                        <h3 className="font-bold">Voltar para a Home</h3>
                    </a>
                </Link>
            </div>
            <div className="w-[90%] mx-[5%] my-20 py-10 flex items-center bg-[#005E2C] flex-col rounded-2xl">
                <h1 className="text-4xl py-5 font-bold">
                    Cadastre-se
                </h1>
                <form className="px-5 flex flex-col w-full  md:px-20">
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
                            {/* w-full h-[34px] px-5 rounded-lg text-black focus:outline-none
                            focus:ring-4 focus:ring-[#60F089]" */}
                            <select 
                                className="w-full min-w[50px] h-[34px] px-5 rounded-lg text-black focus:outline-none focus:ring-4 focus:ring-[#60F089]"
                                
                            >
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
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
                    <div className="flex justify-between items-center sm:flex-col md:flex-row">
                        <div>
                            <h3>Materais</h3>
                            <ul className="flex items-center gap-[40px] flex-wrap">
                                <li className="flex flex-col items-center">
                                    <button
                                        className={papelButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]"}
                                        onClick={() => setPapelButton(!papelButton)}
                                        type="button"
                                    >
                                        <Image width={25} height={25} src={"/images/papel.svg"} alt="icone representativo do papel"></Image>
                                    </button>
                                    <span className="mt-[6px]">Papel</span>
                                </li>
                                <li className="flex flex-col items-center">

                                    <button
                                        className={plasticoButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]"}
                                        onClick={() => setPlasticoButton(!plasticoButton)}
                                        type="button"
                                    >
                                        <Image width={25} height={25} src={"/images/plastico.svg"} alt="icone representativo do plastico">

                                        </Image>
                                    </button>
                                    <span className="mt-[6px]">Plástico</span>
                                </li>
                                <li className="flex flex-col items-center">

                                    <button
                                        className={metalButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]"}
                                        onClick={() => setMetalButton(!metalButton)}
                                        type="button"
                                    >
                                        <Image width={25} height={25} src={"/images/metal.svg"} alt="icone representativo do metal"></Image>

                                    </button>
                                    <span className="mt-[6px]">Metal</span>
                                </li>
                                <li className="flex flex-col items-center">

                                    <button
                                        className={vidroButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]"}
                                        onClick={() => setVidroButton(!vidroButton)}
                                        type="button"
                                    >
                                        <Image width={25} height={25} src={"/images/vidro.svg"} alt="icone representativo do vidro"></Image>

                                    </button>
                                    <span className="mt-[6px]">Vidro</span>
                                </li>
                                <li className="flex flex-col items-center">

                                    <button
                                        className={bateriaButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]"}
                                        onClick={() => setBateriaButton(!bateriaButton)}
                                        type="button"
                                    >
                                        <Image width={25} height={25} src={"/images/bateria.svg"} alt="icone representativo do bateria"></Image>

                                    </button>
                                    <span className="mt-[6px]">Bateria</span>
                                </li>
                                <li className="flex flex-col items-center">

                                    <button
                                        className={papelaoButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]"}
                                        onClick={() => setPapelaoButton(!papelaoButton)}
                                        type="button"
                                    >
                                        <Image width={25} height={25} src={"/images/papelao.svg"} alt="icone representativo do bateria"></Image>

                                    </button>
                                    <span className="mt-[6px]">Papelão</span>
                                </li>
                            </ul >
                        </div >
                        <input
                            className="mr-2 w-[300px] bg-green-50 rounded-lg border-2 border-black text-black focus:outline-none focus:ring-4 focus:ring-[#60F089] sm:w-2[] md:w-[250px] md:h-[34px] sm:mt-10"
                            id="Logo"
                            type="file"
                        />

                    </div >
                    <div className="flex w-full justify-center mt-10">
                        <Link href={"/cooperativas/asdasdas-dasd-ad-asda"}>
                            <button
                                className="w-[200px] h-[60px] rounded-lg bg-green-50 border-2 border-black text-black focus:outline-none
                        focus:ring-4 focus:ring-[#60F089]"
                            // type="submit"
                            >
                                Cadastrar
                            </button>
                        </Link>
                    </div>
                </form >
            </div >
        </>
    )
}