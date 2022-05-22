import { Popover } from "@headlessui/react";
import Link from "next/link";
import { BiLogIn, BiMenu } from "react-icons/bi"
import { CgClose } from "react-icons/cg";
import { NavLink } from "./NavLink";

export function Menu() {
    return (
        <>
            <Popover className="flex flex-col justify-end items-end  md:hidden content-center">
                <Popover.Button className="flex flex-col mt-5 mr-5 z-9">
                    <BiMenu className="w-10 h-10" />
                </Popover.Button>
                <Popover.Panel className="absolute top-0 pt-16 w-full min-h-screen bg-zinc-700 flex justify-center z-10">
                    <Popover.Button className="absolute top-5 right-5">
                        <CgClose className="w-10 h-10" />
                    </Popover.Button>
                    <ul className="flex flex-col items-center gap-5 text-2xl font-medium">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/posts">Posts</NavLink>
                        </li>
                        <li>
                            <NavLink href="/cooperativas">Pontos de Coleta</NavLink>
                        </li>
                        <li>
                            <NavLink href="/wallet">Carteira</NavLink>
                        </li>
                    </ul>
                </Popover.Panel>
            </Popover>
            <div className="hidden md:flex justify-between items-center mt-3">
                <div className="flex items-center gap-20 ml-5">
                    <img width={73} height={73} src="/images/logo.svg" alt="Imagem de logo" />
                    <nav className="flex justify-start gap-12 text-2xl">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/posts">Posts</NavLink>
                        <NavLink href="/cooperativas">Pontos de Coleta</NavLink>
                        <NavLink href="/wallet">Carteira</NavLink>
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
        </>
    );
}