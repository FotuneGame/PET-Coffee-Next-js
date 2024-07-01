"use client"
import { useState } from "react"

interface IProps{
    placeholder:string,
    value:string | undefined,
    label:string,
    callback:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function InputPhone({placeholder,value,callback,label}:IProps){

    const [valueNow,setValueNow] = useState<string|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setValueNow(event.target.value);
        console.log(event.target.value)
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-2xl font-medium">{label}</label>
            <input 
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={wrapper} 
                placeholder={placeholder} 
                value={valueNow} 
                className="rounded-md active:scale-110 transition-all p-2 text-xl border-4 "
            />
        </div>
    )
}