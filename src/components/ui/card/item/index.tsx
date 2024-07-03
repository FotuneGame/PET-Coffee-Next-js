"use client"
import WrapperScrollAnimation from "@/components/animation/WrapperScrollAnimation";
import {ItemType} from "@/components/ui/types/item";
import EyeSVG from "@/../public/icon/eye.svg";

import { useRouter } from "next/navigation";

interface IProps{
    url:string,
    item:ItemType,
    className:string,
}

export default function ItemCard({item,url,className}:IProps){
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
                <p className={"bg-gradient-to-b from-white to-transparent flex justify-end items-center p-2 "} >
                    <EyeSVG width={"1rem"} height={"1rem"}/>
                    {item.view}
                </p>
                <div className={"text-white bg-gradient-to-b from-transparent to-black p-2 flex justify-around md:justify-between items-center"} >
                    <div>
                        <p className={"text-xl"}>{item.name}</p>
                        <p>{item.category}</p>
                    </div>
                    <div className={"flex flex-col justify-end"}>
                            <strong>{item.price} ₽</strong>
                            <p className={"text-sm text-red-500 line-through"}>{item.oldPrice} ₽ </p>
                    </div>
                </div>
            </div>
        </WrapperScrollAnimation>
    )
}