"use client"
import {useState} from "react";
import useTimer from "@/hooks/useTimer";

interface IProps{
    label:string,
    text:string,
    arrayAddLabel:Array<string>
    children: React.ReactNode,
}

export default function Preview({label,text,arrayAddLabel,children}:IProps){
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
        <div className="md:flex align-center  pt-6 ">
            <div className="flex basis-1/2 transition-all flex-col justify-center py-10">
                <h1 className={"text-3xl"}>{label +" "}
                    <strong>{arrayAddLabel[wordIndex]}</strong>
                </h1>
                <p className={"text-xl  pt-3"}>{text}</p>
            </div>
            <div className={"basis-1/2"}>
                {children}
            </div>
        </div>
    )
}