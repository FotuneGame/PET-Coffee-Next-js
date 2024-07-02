"use client"
import {useState} from "react";
import useTimer from "@/hooks/useTimer";

interface IProps{
    label:string,
    text:string,
    children: React.ReactNode,
}

export default function Info({label,text,children}:IProps){
    return(
        <div className="md:flex align-center gap-3  pt-6 ">
            <div className="flex text-center md:text-start basis-1/2 transition-all flex-col justify-center py-10">
                <h1 className={"text-3xl"}>{label}
                </h1>
                <p className={"text-xl  pt-3"}>{text}</p>
            </div>
            <div className={"basis-1/2"}>
                {children}
            </div>
        </div>
    )
}