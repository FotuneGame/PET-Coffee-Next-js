"use client"
import { useState } from "react"

interface IProps{
    placeholder:string,
    value:number | undefined,
    label:string,
    callback:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function InputPassword({placeholder,value,callback,label}:IProps){

    const [show,setShow] = useState<boolean|undefined>(false);
    const [valueNow,setValueNow] = useState<number|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setValueNow(event.target.value);
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-2xl font-medium">{label}</label>
            <div className="w-full">
                <input 
                    type={show ?  "text" : "password"}
                    onChange={wrapper} 
                    placeholder={placeholder} 
                    value={valueNow} 
                    className="rounded-s-md active:scale-110 transition-all p-2 text-xl border-4"
                    style={{width:"80%"}}
                />
                <button 
                    onClick={()=>setShow(!show)} 
                    className={"p-2 bg-slate-500 rounded-e-md text-white md:text-2xl active:scale-110 active:bg-slate-700 hover:bg-slate-400 transition-all"}
                    style={{width:"20%"}}
                >
                    {show ? "0_0": "-_-"}
                </button>
            </div>
        </div>
    )
}