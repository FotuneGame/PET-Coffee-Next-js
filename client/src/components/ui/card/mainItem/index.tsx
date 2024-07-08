"use client"
import WrapperScrollAnimation from "@/components/animation/WrapperScrollAnimation";
import Link from "next/link";
import {IItem} from "@/types/item"
import EyeSVG from "@/../public/icon/eye.svg";
import TimeSVG from "@/../public/icon/time.svg";

import { useRouter } from "next/navigation";

interface IProps{
    url:string,
    item:IItem,
    className?:string,
}

export default function MainItemCard({item,url,className}:IProps){
    const router = useRouter();
    return(
        <WrapperScrollAnimation className={className}>
            <div
                onClick={()=>router.push(url)}
                className={"hover:cursor-pointer border flex w-full h-72  md:h-96 rounded-md overflow-hidden flex flex-col justify-between hover:scale-105 transition-all"}
                style={{
                    backgroundImage:`url(${item.preview})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={"bg-gradient-to-b from-white to-transparent flex justify-end items-center p-2  gap-3"} >
                    <p className={"flex items-center gap-1 text-sm md:text-base"}>
                        <TimeSVG width={"1rem"} height={"1rem"}/>
                        {item.time}
                    </p>
                    <p className={"flex items-center gap-1 text-sm md:text-base"}>
                        <EyeSVG width={"1.5rem"} height={"1.5rem"}/>
                        {item.view}
                    </p>
                </div>

                <div className={"h-3/5 text-white bg-gradient-to-b from-transparent to-black p-2 flex justify-around md:justify-between items-center gap-1"} >
                    <div className={"basis-3/4 md:basis-full"}>
                        <p className={"text-xl md:text-3xl"}>{item.name}</p>
                        <p className={"md:text-xl"}>{item.category}</p>
                        <p className={"text-sm md:text-base"}>{item.description}</p>
                        <p className={"text-sm md:text-base"}>Состав: {item.structure}</p>
                        <Link className={"py-0 text-sky-500 hover:text-sky-700 text-sm md:text-base"} href={url}>Подробнее</Link>
                    </div>
                    <div className={"basis-1/4 flex flex-col justify-end"}>
                        <strong className={"text-xl md:text-2xl"}>{item.price} ₽</strong>
                        <p className={"text-sm text-red-500 line-through"}>{item.oldPrice} ₽ </p>
                    </div>
                </div>
            </div>
        </WrapperScrollAnimation>
    )
}