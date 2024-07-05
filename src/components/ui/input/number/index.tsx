"use client"
import { useState } from "react"

interface IProps{
    placeholder:string,
    value:number | undefined,
    label:string,
    max:number,
    min:number,
    callback:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function InputNumber({placeholder,value,callback,label,max,min}:IProps){
    const [valueNow,setValueNow] = useState<number|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        if(event.target.value!==""){
            if(event.target.value>max)
                setValueNow(max);
            else if (event.target.value<min)
                setValueNow(min);
            else
                setValueNow(event.target.value);
        }else setValueNow(event.target.value);
        callback(event)
    }

    return(
        <div className="flex flex-col p-2 w-full">
            <label  className="m-2 text-xl font-medium">{label}</label>
            <input 
                min={min}
                max={max}
                type="number"
                onChange={wrapper} 
                placeholder={placeholder} 
                value={valueNow} 
                className="rounded-md active:scale-110 transition-all p-2 border "
            />
        </div>
    )
}