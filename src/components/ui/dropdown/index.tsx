"use client"
import { ButtonType } from "@/components/ui/types/button";
import Button from "../button";
import DropdownSVG from '@/../public/icon/dropdown.svg'
import { useState,useEffect } from "react";

interface IProps{
    label:string,
    callback:(value:string)=>void,
    array:Array<string>,
    key_hash:string,
}

export default function Dropdown({label,callback,array,key_hash}:IProps){
    const [show,setShow] = useState<boolean>(false);
    const [value,setValue] = useState<string>(label);

    useEffect(()=>{
        if(value!==label)
            callback(value);
    },[value]);
    return(
        <>
            <Button type='info' className="flex gap-1 items-center " callback={()=>setShow(!show)}>{value}<DropdownSVG className={show ? "transition-all transform rotate-0 active:scale-110" : "transition-all transform rotate-180 active:scale-110"} width={"1rem"} height={"1rem"}/></Button>
            {show && array &&
                <div className="z-10  bg-amber-500  divide-y divide-amber-100 rounded-lg shadow w-44 mt-2">
                    <ul className="py-2 text-xl overflow-y-scroll" style={{maxHeight:"10rem"}}>
                        {array.map((el:string,index:number)=>{
                                return(
                                    <li key={"dropdown "+key_hash+index+el}>
                                        <p className={["block px-4 py-2 bg-amber-500 active:bg-amber-400 hover:bg-amber-400 text-white",value===el && "bg-amber-700"].join(" ")} onClick={()=>setValue(el)}>{el}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            }
        </>
    );
}