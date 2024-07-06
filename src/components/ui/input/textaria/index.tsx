"use client"
import { ChangeEvent } from "react";
import { useState } from "react"

interface IProps{
    placeholder?:string,
    value:string | undefined,
    label?:string,
    callback:(event: ChangeEvent<HTMLTextAreaElement>) => void,
}

export default function InputTextAria({placeholder,value,callback,label}:IProps){

    const [valueNow,setValueNow] = useState<string|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLTextAreaElement>) =>{
        setValueNow(event.target.value);
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-xl font-medium">{label}</label>
            <textarea  
                rows={5}
                onChange={wrapper} 
                placeholder={placeholder} 
                value={valueNow} 
                className="rounded-md active:scale-110 transition-all p-2 border "
            />
        </div>
    )
}