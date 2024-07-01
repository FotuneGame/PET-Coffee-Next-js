"use client"
import { useState } from "react"

interface IProps{
    placeholder:string,
    value:number | undefined,
    label:string,
    callback:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function InputNumber({placeholder,value,callback,label}:IProps){

    const [valueNow,setValueNow] = useState<number|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setValueNow(event.target.value);
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-2xl font-medium">{label}</label>
            <input 
                type="number"
                onChange={wrapper} 
                placeholder={placeholder} 
                value={valueNow} 
                className="rounded-md active:scale-110 transition-all p-2 text-xl border-4 "
            />
        </div>
    )
}