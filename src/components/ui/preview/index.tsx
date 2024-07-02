"use client"
import {useState} from "react";
import useTimer from "@/hooks/useTimer";
import Button from "../button";

interface IProps{
    label:string,
    text:string,
    arrayAddLabel:Array<string>
    callback:()=>void,
    buttonLabel:string
    img:string,
}

export default function Preview({label,text,arrayAddLabel,callback,buttonLabel,img}:IProps){
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
        <div className="w-full overflow-y-hidden">
            <div className={"bg-hero bg-no-repeat bg-cover bg-center bg-fixed brightness-50"}>
                <img src={img} alt={img} className="w-full rounded-md" style={{maxHeight:"60vh",minHeight:"40vh"}}/>
            </div>
            <div className="absolute  flex-col justify-center z-10 left-12 sm:left-16 md:left-24 lg:left-32" style={{top:"25vh"}}>
                <div className="flex text-xl sm:text-2xl lg:text-6xl 2xl:text-9xl ">
                    <h1 className={"text-white"}>{label +" "}</h1>
                    <h1 className="text-amber-400 ms-2 md:ms-4">{arrayAddLabel[wordIndex]}</h1>
                </div>
                
                <p className={"text-xl lg:text-2xl 2xl:text-3xl text-white  pt-3 lg:pt-12"}>{text}</p>
                <Button type={"info"} callback={callback} className="lg:p-4 mt-3 lg:mt-12">{buttonLabel}</Button>
            </div>
        </div>
    )
}