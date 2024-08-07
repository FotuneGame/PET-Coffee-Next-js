"use client"
import { ChangeEvent } from "react";
import { useState } from "react"

interface IProps{
    placeholder?:string,
    value:string | undefined,
    label?:string,
    callback:(event: ChangeEvent<HTMLInputElement>) => void,
}

export default function InputFile({placeholder,value,callback,label}:IProps){

    const [valueNow,setValueNow] = useState<any>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement>) =>{
        setValueNow(event.target.files);
        console.log(event.target.files)
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-xl font-medium">{label}</label>
            <input 
                type="file"
                onChange={wrapper} 
                placeholder={placeholder} 
                value={valueNow} 
                className="rounded-md active:scale-110 transition-all p-2 border"
            />
        </div>
    )
}