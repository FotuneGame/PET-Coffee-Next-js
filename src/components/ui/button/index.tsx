import type { ButtonType } from "@/components/ui/types/button"

interface IProps{
    className?:string,
    type: ButtonType,
    children:React.ReactNode,
    callback:()=>void,
}

export default function Button({type,children,callback,className}:IProps){
    switch (type){
        case "danger":
            return( <button className={["p-2 bg-red-500 rounded-md text-white md:text-xl active:scale-110 active:bg-red-700 hover:bg-red-400 transition-all", className].join(' ')} onClick={callback}>{children}</button>);
        case "success":
            return( <button className={["p-2 bg-lime-500 rounded-md text-white md:text-xl active:scale-110 active:bg-lime-700 hover:bg-lime-400 transition-all", className].join(' ')} onClick={callback}>{children}</button>);
        case "info":
            return( <button className={["p-2 bg-amber-500 rounded-md text-white md:text-xl active:scale-110 active:bg-amber-700 hover:bg-amber-400 transition-all", className].join(' ')} onClick={callback}>{children}</button>);
        default:
            return( <button className={["p-2 bg-slate-500 rounded-md text-white md:text-xl active:scale-110 active:bg-slate-700 hover:bg-slate-400 transition-all", className].join(' ')} onClick={callback}>{children}</button>);
    }

}