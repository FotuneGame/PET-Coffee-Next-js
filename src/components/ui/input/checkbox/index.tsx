"use client"
import { useState } from "react"

interface IProps{
    placeholder:string,
    value:boolean | undefined,
    label:string,
    callback:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function InputCheckbox({placeholder,value,callback,label}:IProps){

    const [valueNow,setValueNow] = useState<boolean|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setValueNow(event.target.checked);
        callback(event)
    }

    return(
        <div className="flex items-center p-2 w-full">
           <input 
                type="checkbox"
                onChange={wrapper} 
                checked={valueNow} 
                className="w-4 h-4 rounded-md active:scale-110 transition-all p-6 text-xl border "
            />
            <label  className="ms-2 text-xl font-medium">{label}</label>
            <p className="ms-2 text-sm">({placeholder})</p>
        </div>

    )
}