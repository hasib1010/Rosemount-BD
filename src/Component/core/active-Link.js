"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({href,className,children}) => {
    const currentPage=usePathname();
    return (
        <Link href={href} className={`hover:text-[#0A0A0A] opacity-100 ${currentPage===href&&"active"} ${className} font-bold`}>
            {children}
        </Link>
    );
};

export default ActiveLink;