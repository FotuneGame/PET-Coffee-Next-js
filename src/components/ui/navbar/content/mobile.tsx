"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import URL from "@/config/route";

const NavMobileContent = () =>{
    const pathname = usePathname();
    return(
    <div className='w-full absolute bg-white z-40 py-4'>
        <ul className="transition-color font-medium flex-col justify-center items-center space-y-12">
            <li className="py-0 active:text-sky-700 text-center">
                <Link href={URL.item} className={` ${pathname === URL.item ? 'font-bold' : ''}`}>
                    Ассортимент
                </Link>
            </li>
            <li className="py-0 active:text-sky-700 text-center">
                <Link href={URL.map} className={` ${pathname === URL.map ? 'font-bold' : ''}`}>
                    Карта
                </Link>
            </li>
            <li className="py-0 active:text-sky-700 text-center">
                <Link href={URL.about} className={` ${pathname === URL.about ? 'font-bold' : ''}`}>
                    О нас
                </Link>
            </li>
    </ul>
    </div>
    );
}

export default NavMobileContent;