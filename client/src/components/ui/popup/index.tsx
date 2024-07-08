"use client"
import {useState} from "react";
import WrapperCreateAnimation from "@/components/animation/WrapperCreateAnimation";
import CloseSVG from "@/../public/icon/close.svg";


interface IProps{
    children:React.ReactNode,
    className?:string,
}

export default function Popup({children,className=''}:IProps){
    const [exit,setExit] = useState<boolean>(false);
    if(!exit)
        return (
            <div className={["fixed z-30  right-0 bottom-0 m-2 w-1/2",className].join(" ")}>
                <WrapperCreateAnimation className={"border w-1/2 bg-white rounded-md flex flex-row justify-between items-center p-2"}>
                    <div>
                        {children}
                    </div>
                    <div className={"flex justify-end"}>
                        <CloseSVG width={"2rem"} height={"2rem"} onClick={()=>setExit(true)}/>
                    </div>
                </WrapperCreateAnimation>
            </div>
        );
    else return null;
}