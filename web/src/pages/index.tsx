import { Menu } from "../components/Menu";
import { AiOutlineSearch } from "react-icons/ai"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Menu />
            <div className="flex justify-between px-20 mt-10 items-center min-h-[600px] w-full sm:flex-wrap xs:flex-wrap">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <h1 className="text-4xl text-green-400 font-bold">Encontre os pontos de coleta <br /> mais próximos de você.</h1>
                        <Link href={'/'}>
                        <button className="flex bg-green-50 w-[384px] h-[72px] items-center rounded-full mt-[61px] relative transition-all  hover:brightness-75">
                            <div className="absolute h-[72px] w-14   rounded-l-3xl border-l-2 border-l-green-700 flex justify-center items-center bg-green-700">
                                <AiOutlineSearch className="w-10 h-10 font-bold" />
                            </div>
                            <span className="flex py-2 pl-20 text-zinc-900">Buscar ponto de coleta</span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
