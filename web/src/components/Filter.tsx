/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IoFilterOutline } from "react-icons/io5"

export function Filter() {
    const [papelButton, setPapelButton] = useState(false);
    const [plasticoButton, setPlasticoButton] = useState(false);
    const [metalButton, setMetalButton] = useState(false);
    const [vidroButton, setVidroButton] = useState(false);
    const [bateriaButton, setBateriaButton] = useState(false);
    const [papelaoButton, setPapelaoButton] = useState(false);

    return (
        <>
            <div className=" py-4 flex w-[90%] mx-[5%] mt-8 min-h-24 bg-green-900 bg-opacity-80 rounded-lg justify-between items-center gap-6 px-6 flex-wrap ">

                <div className="flex gap-6 flex-wrap">
                    <select name="select" className="w-[80px] min-h-[34px] rounded-lg px-4 text-black focus:outline-none focus:ring-4 focus:ring-[#60F089]" placeholder="Insira a UF">
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
                    <input className="w-[90%] sm:w-[350px] h-[34px] rounded-lg px-5 text-black focus:outline-none focus:ring-4 focus:ring-[#60F089]" placeholder="Insira a cidade" />
                </div>

                <ul className="flex items-center gap-6 flex-wrap">
                    <li className="flex flex-col items-center">
                        <button
                            className={papelButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full"}
                            onClick={() => setPapelButton(!papelButton)}
                        >
                            <Image width={25} height={25} src={"/images/papel.svg"} alt="icone representativo do papel"></Image>
                        </button>
                        <span className="mt-1">Papel</span>
                    </li>

                    <li className="flex flex-col items-center">
                        <button
                            className={plasticoButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full"}
                            onClick={() => setPlasticoButton(!plasticoButton)}
                        >
                            <Image width={25} height={25} src={"/images/plastico.svg"} alt="icone representativo do platico"></Image>
                        </button>
                        <span className="mt-1">Pl??stico</span>
                    </li>

                    <li className="flex flex-col items-center">
                        <button
                            className={metalButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full"}
                            onClick={() => setMetalButton(!metalButton)}
                        >
                            <Image width={25} height={25} src={"/images/metal.svg"} alt="icone representativo do metal"></Image>
                        </button>
                        <span className="mt-1">Metal</span>
                    </li>

                    <li className="flex flex-col items-center">
                        <button
                            className={vidroButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full"}
                            onClick={() => setVidroButton(!vidroButton)}
                        >
                            <Image width={25} height={25} src={"/images/vidro.svg"} alt="icone representativo do vidro"></Image>
                        </button>
                        <span className="mt-1">Vidro</span>
                    </li>

                    <li className="flex flex-col items-center">
                        <button
                            className={bateriaButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full"}
                            onClick={() => setBateriaButton(!bateriaButton)}
                        >
                            <Image width={25} height={25} src={"/images/bateria.svg"} alt="icone representativo do bateria"></Image>
                        </button>
                        <span className="mt-1 text-xs">Bateria</span>
                    </li>

                    <li className="flex flex-col items-center">
                        <button
                            className={papelaoButton ? "w-[45px] h-[45px] flex items-center justify-center bg-green-50 rounded-full" : "w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full"}
                            onClick={() => setPapelaoButton(!papelaoButton)}
                        >
                            <Image width={25} height={25} src={"/images/papelao.svg"} alt="icone representativo do papel??o"></Image>
                        </button>
                        <span className="mt-1 text-xs">Papel??o</span>
                    </li>
                </ul>

                <button className="flex bg-green-50 w-[88px] h-[34px] items-center rounded-lg relative transition-all  hover:brightness-125">
                    <div className="absolute h-[34px] w-8 rounded-l-lg left-[-1px] flex justify-center items-center bg-zinc-900">
                        <IoFilterOutline className="w-6 h-5 font-bold" />
                    </div>
                    <span className="flex py-2 pl-9 text-zinc-900">Filtrar</span>
                </button>

            </div>

            <div className="flex flex-col w-[90%] mx-[5%] justify-center">
                <div className="mt-16 mb-6">
                    <h3>3 Resultados encontrados</h3>
                </div>

                <div className="flex flex-wrap w-full gap-4 justify-center lg:justify-between">
                    <Link href={"/cooperativas/123123-asdsd-231"}>
                        <a className="flex-1">
                            <div className="min-w-[350px] flex flex-col items-center bg-zinc-800 rounded-xl gap-2 pb-6 mb-8">
                                <div className="flex flex-col gap-1">
                                    <img src="images/logo.svg" alt="Logo Cooperativa" className="w-full h-[200px]" />
                                    <h1 className="text-2xl font-bold text-center">Recicla Tudo</h1>
                                </div>

                                <ul className="flex items-center gap-4">
                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/papel.svg"} alt="icone representativo do papel"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Papel</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/plastico.svg"} alt="icone representativo do platico"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Pl??stico</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/metal.svg"} alt="icone representativo do metal"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Metal</span>
                                    </li>
                                </ul>

                                <div className="flex flex-col justify-start">
                                    <p>Rio de Janeiro - Volta Redonda</p>
                                    <p>Vila Rica, Trezentos e Quinze</p>
                                    <p>N?? 89</p>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link href={"/cooperativas/123123-asdsd-231"}>
                        <a className="flex-1">
                            <div className="min-w-[350px] flex flex-col items-center bg-zinc-800 rounded-xl gap-2 pb-6 mb-8">
                                <div className="flex flex-col gap-1">
                                    <img src="images/trash-image.png" alt="Logo Cooperativa" className="w-full h-[200px]" />
                                    <h1 className="text-2xl font-bold text-center">Recicla Tudo</h1>
                                </div>

                                <ul className="flex items-center gap-3">
                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/papel.svg"} alt="icone representativo do papel"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Papel</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/plastico.svg"} alt="icone representativo do platico"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Pl??stico</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/metal.svg"} alt="icone representativo do metal"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Metal</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/vidro.svg"} alt="icone representativo do vidro"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Vidro</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#60F089]" type="button">
                                            <Image width={25} height={25} src={"/images/bateria.svg"} alt="icone representativo do bateria"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Bateria</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/papelao.svg"} alt="icone representativo do bateria"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Papel??o</span>
                                    </li>
                                </ul>

                                <div className="flex flex-col justify-start">
                                    <p>Rio de Janeiro - Volta Redonda</p>
                                    <p>Vila Rica, Trezentos e Quinze</p>
                                    <p>N?? 89</p>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link href={"/cooperativas/123123-asdsd-231"}>
                        <a className="flex-1 lg:max-w-[590px]">
                            <div className="min-w-[350px] max-w[600px] flex flex-col items-center bg-zinc-800 rounded-xl gap-2 pb-6 mb-8">
                                <div className="flex flex-col gap-1">
                                    <img src="images/trash-image.png" alt="Logo Cooperativa" className="w-full h-[200px]" />
                                    <h1 className="text-2xl font-bold text-center">Recicla Tudo</h1>
                                </div>

                                <ul className="flex items-center gap-3">
                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/papel.svg"} alt="icone representativo do papel"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Papel</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/plastico.svg"} alt="icone representativo do platico"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Pl??stico</span>
                                    </li>

                                    <li className="flex flex-col items-center">
                                        <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full" >
                                            <Image width={25} height={25} src={"/images/metal.svg"} alt="icone representativo do metal"></Image>
                                        </button>
                                        <span className="mt-1 text-xs">Metal</span>
                                    </li>
                                </ul>

                                <div className="flex flex-col justify-start">
                                    <p>Rio de Janeiro - Volta Redonda</p>
                                    <p>Vila Rica, Trezentos e Quinze</p>
                                    <p>N?? 89</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}