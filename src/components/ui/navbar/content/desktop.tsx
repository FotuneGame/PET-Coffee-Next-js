"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import URL from "@/config/route";

const NavDesktopContent = () =>{
    const pathname = usePathname();
    return(
    <ul className="transition-color font-medium hidden md:flex items-center md:p-0 space-x-12">
        <li className="py-0 hover:text-sky-700">
            <Link href={URL.item} className={` ${pathname === URL.item ? 'font-bold' : ''}`}>
                Ассортимент
            </Link>
        </li>
        <li className="py-0 hover:text-sky-700">
            <Link href={URL.map} className={` ${pathname === URL.map ? 'font-bold' : ''}`}>
                Карта
            </Link>
        </li>
        <li className="py-0 hover:text-sky-700">
            <Link href={URL.about} className={` ${pathname === URL.about ? 'font-bold' : ''}`}>
                О нас
            </Link>
        </li>
    </ul>
    );
}

export default NavDesktopContent;