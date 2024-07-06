"use client"
import { ChangeEvent } from "react";
import { useState } from "react"

interface IProps{
    placeholder?:string,
    value:number | undefined,
    label?:string,
    max?:number,
    min?:number,
    callback:(event: ChangeEvent<HTMLInputElement>) => void,
}

export default function InputNumber({placeholder,value,callback,label,max=100,min=0}:IProps){
    const [valueNow,setValueNow] = useState<number|undefined>(value);

    const wrapper = (event: ChangeEvent<HTMLInputElement>) =>{
        if(event.target.value!==""){
            if(Number(event.target.value)>max)
                setValueNow(max);
            else if (Number(event.target.value)<min)
                setValueNow(min);
            else
                setValueNow(Number(event.target.value));
        }else setValueNow(Number(event.target.value));
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