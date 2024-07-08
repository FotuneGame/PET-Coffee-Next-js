"use client"
import Link from "next/link";
import {useState} from "react";
import useTimer from "@/hooks/useTimer";
import Button from "../button";
import WrapperCreateAnimation from "@/components/animation/WrapperCreateAnimation";

interface IProps{
    label:string,
    text:string,
    arrayAddLabel:Array<string>
    callback?:()=>void,
    buttonLabel:string
    img:string,
    href?:string,
}

export default function Preview({label,text,arrayAddLabel,callback,buttonLabel,img,href=""}:IProps){
    const [wordIndex,SetWordIndex] = useState<number>(0);
    const nextWord = () =>{
        if(arrayAddLabel.length){
            if(wordIndex<arrayAddLabel.length-1)
                SetWordIndex(wordIndex+1);
            else
                SetWordIndex(0);
        }
    }
    const timer = useTimer(1000,nextWord);

    return(
        <WrapperCreateAnimation className="w-full overflow-y-hidden">
            <div
                className={"bg-hero bg-no-repeat bg-cover bg-center bg-fixed  rounded-md"}
                style={{
                    backgroundImage:`url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height:"60vh",
                }}
            >
                <div className="bg-gradient-to-b from-transparent to-black rounded-md h-full flex flex-col justify-center  items-center md:items-start z-10 px-6 ">
                    <div className="flex text-xl sm:text-2xl md:text-6xl 2xl:text-9xl text-center md:text-start md:mt-36">
                        <h1 className={"text-white"}>{label +" "}</h1>
                        <h1 className="text-amber-400 ms-2 md:ms-4">{arrayAddLabel[wordIndex]}</h1>
                    </div>

                    <p className={"my-6 text-xl lg:text-2xl 2xl:text-3xl text-white  text-center md:text-start"}>{text}</p>
                    <Link href={href}>
                        <Button type={"info"} callback={()=>{callback && callback()}} className="text-center md:text-start md:mt-6">{buttonLabel}</Button>
                    </Link>
                </div>
            </div>
        </WrapperCreateAnimation>
    )
}