import Link from "next/link";
import URL from "@/config/route";
import Logo from "../../../../public/icon/coffee.svg";

import VK from "../../../../public/icon/vk.svg";
import Whatsapp from "../../../../public/icon/whatsapp.svg";
import Telegram from "../../../../public/icon/telegram.svg";
import Instagram from "../../../../public/icon/instagram.svg";


export default function Footer(){

    return(
        <footer className="bg-white flex flex-col-reverse md:flex-row bg-white md:bg-slate-200 w-full rounded-md mt-12">
            <div className="items-center flex flex-col justify-center my-3">
                <Link href={URL.main} className="flex items-center space-x-3 rtl:space-x-reserse">
                    <Logo alt="logo" width={30} height={30}/>
                    <span className="self-center text-3xl font-semibold">Кофеюшка</span>
                </Link>
                <p className="my-3">© 2024 Kofeushka.com</p>
            </div>
            <div className="transition-color font-medium my-3 bg-slate-200 w-full rounded-md flex flex-col md:flex-row justify-end items-center md:space-x-12">
                <div>
                    <ul className="justify-center  flex flex-col  md:justify-start  md:flex-row md:items-center md:space-x-12">
                        <li className="py-3 text-center md:text-start">
                            <strong>Страницы:</strong>
                        </li>
                        <li className="py-3 hover:text-sky-700 text-center">
                            <Link href={URL.item} className="text-center">
                                Ассортимент
                            </Link>
                        </li>
                        <li className="py-3 hover:text-sky-700 text-center">
                            <Link href={URL.map} className="text-center">
                                Карта
                            </Link>
                        </li>
                        <li className="py-3 hover:text-sky-700 text-center">
                            <Link href={URL.about} className="text-center">
                                О нас
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-center md:justify-start  md:flex-row md:items-center md:space-x-12">
                        <div className="py-3 text-center md:text-start">
                            <strong>Социальные сети:</strong>
                        </div>
                        <ul className="flex justify-center items-center space-x-6">
                            <li className="py-3 hover:text-sky-700 text-center hover:scale-110">
                                <Link href={"#"} className="text-center">
                                    <VK  width={40} height={40}/>
                                </Link>
                            </li>
                            <li className="py-3 hover:text-sky-700 text-center hover:scale-110">
                                <Link href={"#"}className="text-center">
                                    <Whatsapp  width={40} height={40}/>
                                </Link>
                            </li>
                            <li className="py-3 hover:text-sky-700 text-center hover:scale-110">
                                <Link href={"#"} className="text-center">
                                    <Telegram  width={40} height={40}/>
                                </Link>
                            </li>
                            <li className="py-3 hover:text-sky-700 text-center hover:scale-110">
                                <Link href={"#"} className="text-center">
                                    <Instagram  width={40} height={40}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}