import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogIn, BiMenu } from "react-icons/bi"
import { CgClose } from "react-icons/cg";
import { NavLink } from "./NavLink";

export function Menu() {
    return (
        <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-20 ml-5">
                <Image width={73} height={73} src="/images/logo.svg" alt="Imagem de logo" />
                <nav className="flex justify-start gap-12 text-2xl">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/posts">Posts</NavLink>
                    <NavLink href="/cooperativas">Pontos de Coleta</NavLink>
                    <NavLink href="/cooperativas">Carteira</NavLink>
                </nav>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-1">
                    <img src="/images/coin.svg" alt="moedas do usuário" />
                    <span className="text-lg font-medium">2000</span>
                </div>
                <Link href={"/register"}>
                    <div className="flex items-center gap-1 font-bold text-xl cursor-pointer transition-all hover:brightness-50 mr-5">
                        <h1>Cadastrar empresa</h1>
                        <BiLogIn className="w-6 h-6" />
                    </div>
                </Link>
            </div>
        </div>
    );
}