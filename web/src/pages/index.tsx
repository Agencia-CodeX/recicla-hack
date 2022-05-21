import { Menu } from "../components/Menu";
import { AiOutlineSearch } from "react-icons/ai"
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Menu />
            <div className="flex justify-between px-20 mt-10 items-center min-h-[600px] w-full sm:flex-wrap xs:flex-wrap">
                <div className="flex flex-col max-w-2xl">
                    <h1 className="text-4xl text-green-400 font-bold">Encontre os pontos de coleta mais próximos de você.</h1>

                    <button className="flex bg-green-50 w-64 h-10 rounded-full mt-6 relative">
                        <div className="absolute h-10 w-10 rounded-l-3xl border-l-2 border-l-green-700 flex justify-center items-center bg-green-700">
                            <AiOutlineSearch className="w-6 h-6" />
                        </div>
                        <span className="py-2 pl-12 text-zinc-900">Buscar ponto de coleta</span>
                    </button>
                </div>
                <div>
                    <Image width={450} height={470} src="/images/recicle-image.svg" alt="Imagem de reciclagem" />
                </div>
            </div>
        </>
    )
}
