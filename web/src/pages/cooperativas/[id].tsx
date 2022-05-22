/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Menu } from "../../components/Menu";

export default function CooperativePost() {
    return (
        <>
            <Head>
                <title>Coperativa Postagens</title>
            </Head>

            <Menu />

            <main className="bg-zinc-800 p-16 mt-[23px] rounded-md border-[3px] border-green-400 flex items-center flex-col">
                <img className="mt-[34px]" src="/images/logo-coperativa.svg" alt="imagem do logo da coperativa" />
                <h1 className="mt-[20px] text-4xl">Recicla tudo</h1>
                <h2 className="mt-[20px] text-2xl">Resíduos coletados</h2>
                <div>
                    <ul className="flex items-center gap-10 mt-[14px]">
                        <li className="flex flex-col items-center">
                            <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                <img className="w-[44.5px] h-[42.35px]" src="/images/papel.svg" alt="imagem representativa papel" />
                            </button>
                            <span className="mt-[10px]">Papel</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                <img className="w-[44.5px] h-[42.35px]" src="/images/plastico.svg" alt="imagem representativa plastico" />
                            </button>
                            <span className="mt-[10px]">Plastico</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                <img className="w-[44.5px] h-[42.35px]" src="/images/metal.svg" alt="imagem representativa metal" />
                            </button>
                            <span className="mt-[10px]">Metal</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                <img className="w-[44.5px] h-[42.35px]" src="/images/vidro.svg" alt="imagem representativa vidro" />
                            </button>
                            <span className="mt-[10px]">Vidro</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                <img className="w-[44.5px] h-[42.35px]" src="/images/bateria.svg" alt="imagem representativa bateria" />
                            </button>
                            <span className="mt-[10px]">Bateria</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <button className="w-[45px] h-[45px] flex items-center justify-center bg-white rounded-full focus:outline-none
                                focus:ring-4 focus:ring-[#60F089]"
                                type="button"
                            >
                                <img className="w-[44.5px] h-[42.35px]" src="/images/bateria.svg" alt="icone representativo do bateria" />

                            </button>
                            <span className="mt-[6px]">Bateria</span>
                        </li>
                        <li className="flex flex-col items-center">
                            <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                <img className="w-[44.5px] h-[42.35px]" src="/images/papelao.svg" alt="imagem representativa papelao" />
                            </button>
                            <span className="mt-[10px]">Papelao</span>
                        </li>
                    </ul>
                </div>
                <div className="w-[45%]">
                    <h2 className="mt-[35px]">Endereço</h2>
                    <p>São Paulo - São Paulo, Avenida Principal, Morumbi - N°738</p>
                </div>
            </main>
        </>
    )
}