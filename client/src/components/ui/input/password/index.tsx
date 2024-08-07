"use client"
import { ChangeEvent } from "react";
import { useState } from "react"

interface IProps{
    placeholder?:string,
    value:string | undefined,
    label?:string,
    callback:(event: ChangeEvent<HTMLInputElement>) => void,
}

export default function InputPassword({placeholder,value,callback,label}:IProps){

    const [show,setShow] = useState<boolean|undefined>(false);
    const [valueNow,setValueNow] = useState<string|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement>) =>{
        setValueNow(event.target.value);
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-xl font-medium">{label}</label>
            <div className="w-full">
                <input 
                    type={show ?  "text" : "password"}
                    onChange={wrapper} 
                    placeholder={placeholder} 
                    value={valueNow} 
                    className="rounded-s-md active:scale-110 transition-all p-2 border"
                    style={{width:"80%"}}
                />
                <button 
                    onClick={()=>setShow(!show)} 
                    className={"p-2 bg-slate-500 rounded-e-md text-white active:scale-110 active:bg-slate-700 hover:bg-slate-400 transition-all"}
                    style={{width:"20%"}}
                >
                    {show ? "0_0": "-_-"}
                </button>
            </div>
        </div>
    )
}