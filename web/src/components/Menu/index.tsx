import Image from "next/image";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi"
import { NavLink } from "./NavLink";

export function Menu() {
    return (
        <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-20 ml-5">
                <Image width={73} height={73} src="/images/logo.svg" alt="Imagem de logo" />
                <nav className="flex justify-start gap-12 text-2xl">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/posts">Posts</NavLink>
                    <NavLink href="#">Pontos de Coleta</NavLink>
                </nav>
            </div>
            <Link href={"/register"}>
            <div className="flex items-center gap-1 font-bold text-xl cursor-pointer transition-all hover:brightness-50">
                <h1>Cadastre sua empresa</h1>
                <BiLogIn className="w-6 h-6" />
            </div>
            </Link>
        </div>
    );
}