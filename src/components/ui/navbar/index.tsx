"use client"
import Link from "next/link";
import URL from "@/config/route";
import { useState } from 'react';
import {NavDesktopContent,NavMobileContent} from "./content";

import Logo from "@/../public/icon/coffee.svg";
import Burger from "@/../../public/icon/burger.svg";
import Close from "@/../public/icon/close.svg";


export default function Navbar(){
    const [burger,setBurger] = useState<boolean>(false);
    return(
        <>
            <nav className=" bg-white opacity-70 z-50 flex items-center  justify-between  py-3 rtl:space-x-reserse">
                <Link href={URL.main} className="flex items-center space-x-3 rtl:space-x-reserse">
                    <Logo alt="logo" width={30} height={30}/>
                    <span className="self-center text-xl font-semibold">Кофеюшка</span>
                </Link>
                
                <NavDesktopContent/>

                <button className='active:scale-110 m-2 rounded md:hidden transition-all' onClick={()=>setBurger(!burger)}>
                { burger ?
                    <Close alt="burger" width={30} height={30}/>
                :
                    <Burger alt="burger" width={30} height={30}/>
                }
                </button>
            </nav>
            {burger && <NavMobileContent/>}
        </>
    )
}
