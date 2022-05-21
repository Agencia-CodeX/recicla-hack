import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    shouldMathExactHref?: boolean;
}

export function NavLink({ href, children, shouldMathExactHref = false, }: NavLinkProps) {
    const { asPath } = useRouter();

    let isActive = false;

    if (shouldMathExactHref && (asPath === href)) {
        isActive = true;
    }

    if (!shouldMathExactHref &&
        asPath !== "/" &&
        String(href) !== "/" &&
        (asPath.startsWith(String(href)))
    ) {
        isActive = true;
    }

    if (!shouldMathExactHref &&
        asPath === "/" &&
        String(href) === "/"
    ) {
        isActive = true;
    }

    if (isActive) {
        return (
            <a href={href} className="font-bold relative h-10 leading-10 cursor-pointer transition-all hover:brightness-50 after:h-1 after:bg-green-400 after:w-full after:absolute after:left-0 after:bottom-0">
                {children}
            </a >
        )
    }

    return (
        <a href={href} className="font-bold relative h-10 leading-10 cursor-pointer transition-all hover:brightness-50 ">
            {children}
        </a>
    );
}