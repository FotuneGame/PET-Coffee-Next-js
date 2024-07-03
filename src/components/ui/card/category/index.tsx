"use client"

interface IProps{
    className:string,
    callback:(category:string)=>void,
    label:string,
    active:boolean,
}

export default function CategoryCard({callback,label,active,className}:IProps){
    return(
        <div className={["flex justify-center   rounded-md md:px-6 hover:scale-105 transition-transform h-30",className].join(' ')}>
                <p className={["md:text-xl ",!active && "text-slate-400"].join(" ")} onClick={()=>callback(label)}>{label}</p>
        </div>
    )
}