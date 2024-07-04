"use client"
import { useState } from "react";
import Button from "@/components/ui/button";
import type { ButtonType } from "@/components/ui/types/button";
import CloseSVG from "@/../public/icon/close.svg";

interface IProps{
    label:string,
    type: ButtonType,
    className:string,
    children: React.ReactNode,
}

export default function Modal({label,type,className,children}:IProps){
    const [show,setShow] = useState<boolean>(false);

    return (
        <>
            <Button className={className} type={type} callback={()=>setShow(!show)}>{label}</Button>
            {show &&
                <div className="fixed z-40 w-full h-lvh top-0 left-0 flex flex-col justify-center align-center" style={{background:"rgba(0,0,0,0.7)"}} onClick={()=>setShow(false)}>
                    <div className="rounded-md  h-lvh md:m-60 p-2 bg-white" onClick={(e)=>e.stopPropagation()}>
                        <div className="w-full h-full">
                            <div className="flex justify-end w-full">
                                <CloseSVG width={"2rem"} height={"2rem"} onClick={()=>setShow(false)} />
                            </div>
                            <div className="flex justify-center items-center">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}