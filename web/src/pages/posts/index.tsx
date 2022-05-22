import { Menu } from "../../components/Menu";

import { CgSearch } from "react-icons/cg"
import Link from "next/link";

export default function Posts() {
    return (
        <>
            <Menu />

            <div className="flex w-[70%] mx-[15%] justify-start items-center mt-[30px]">
                <input
                    className="w-[300px] h-[35px] flex-wrap rounded-lg px-5  my-[10px] text-black focus:outline-none"
                    placeholder="Pesquisar"
                    type="text"
                />
                <button className="flex justify-center items-center bg-green-900 ml-4 px-[30px] h-[35px] py-5 rounded-lg hover:brightness-125">
                    <CgSearch className="w-[29px] h-[29px]" />
                </button>
            </div>

            <div className="flex flex-col w-[70%] mx-[15%] mt-[50px] gap-4 mb-6">
                <Link href={"/posts/sdas-21312-asda"}>
                    <a>
                        <div className="flex flex-col jusify-center px-9 pt-3 pb-9 border-b-2 border-green-400 hover:brightness-75 transition-all">
                            <time className="font-medium mb-4">22 de maio de 2022</time>
                            <h1 className="text-4xl font-bold mb-8">Título da postagem</h1>
                            <p className="font-medium text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, debitis? Alias iusto neque velit. Quam perspiciatis a modi quod, eos quo pariatur nisi, iusto iure alias, debitis doloribus eum assumenda.</p>
                        </div>
                    </a>
                </Link>

                <Link href={"/posts/sdas-21312-asda"}>
                    <a>
                        <div className="flex flex-col jusify-center px-9 pt-3 pb-9 border-b-2 border-green-400 hover:brightness-75 transition-all">
                            <time className="font-medium mb-4">22 de maio de 2022</time>
                            <h1 className="text-4xl font-bold mb-8">Título da postagem</h1>
                            <p className="font-medium text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, debitis? Alias iusto neque velit. Quam perspiciatis a modi quod, eos quo pariatur nisi, iusto iure alias, debitis doloribus eum assumenda.</p>
                        </div>
                    </a>
                </Link>

                <Link href={"/posts/sdas-21312-asda"}>
                    <a>
                        <div className="flex flex-col jusify-center px-9 pt-3 pb-9 border-b-2 border-green-400 hover:brightness-75 transition-all">
                            <time className="font-medium mb-4">22 de maio de 2022</time>
                            <h1 className="text-4xl font-bold mb-8">Título da postagem</h1>
                            <p className="font-medium text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, debitis? Alias iusto neque velit. Quam perspiciatis a modi quod, eos quo pariatur nisi, iusto iure alias, debitis doloribus eum assumenda.</p>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}
