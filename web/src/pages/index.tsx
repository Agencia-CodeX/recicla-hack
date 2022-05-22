import { AiOutlineSearch } from "react-icons/ai"
import { Menu } from "../components/Menu";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>  
            <Menu />
            <div className="flex mt-20  justify-between px-20 md:mt-10 items-center min-h-[700px] w-full ">
                <div className="flex items-center justify-between w-full flex-col gap-6 md:flex-row md:gap-0">
                    <div className="flex flex-col sm:items-center">
                        <h1 className="text-4xl text-green-400 font-bold xs:text-center">Encontre os pontos de coleta <br /> mais próximos de você.</h1>
                        <Link href={'/cooperativas'}>
                            <button className="flex bg-green-50 w-[384px] h-[72px] items-center rounded-full mt-[61px] relative transition-all  hover:brightness-75">
                                <div className="absolute h-[72px] w-14 rounded-l-full left-[-1px] flex justify-center items-center bg-green-700">
                                    <AiOutlineSearch className="w-10 h-10 font-bold" />
                                </div>
                                <span className="flex py-2 pl-20 text-zinc-900">Buscar ponto de coleta</span>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Image width={450} height={470} src="/images/recicle-image.svg" alt="Imagem de reciclagem" />
                    </div>
                </div>
            </div>
        </>
    )
}
