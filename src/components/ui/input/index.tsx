"use client"
import InputCheckbox from "./checkbox";
import InputDate from "./date";
import InputNumber from "./number";
import InputText from "./text";
import InputTextAria from "./textaria";
import InputTime from "./time";
import InputPhone from "./phone";
import InputFile from "./file";
import InputPassword from "./password";

import type { InputType } from "@/components/ui/types/input";


interface IPrpos{
    type:InputType,
    placeholder:string,
    value:string | number | boolean | undefined,
    label:string,
    max:number,
    min:number,
    callback:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function Input({type,placeholder,value,callback,label,max=100,min=0}:IPrpos){
    switch(type){
        case "text":
            return (<InputText placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "textaria":
            return (<InputTextAria placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "number":
            return (<InputNumber placeholder={placeholder} value={value} callback={callback} label={label} max={max} min={min}/>);
        case "date":
            return (<InputDate placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "checkbox":
            return (<InputCheckbox placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "time":
            return (<InputTime placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "phone":
            return (<InputPhone placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "file":
            return (<InputFile placeholder={placeholder} value={value} callback={callback} label={label}/>);
        case "password":
            return (<InputPassword placeholder={placeholder} value={value} callback={callback} label={label}/>);
        default:
            return (<InputText placeholder={placeholder} value={value} callback={callback} label={label}/>);
    }

}