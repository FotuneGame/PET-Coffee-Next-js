'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface IProps{
    className:string,
    url:string,
    label:string
}

export default function CategoryCard({url,label,className}:IProps){
    const pathname = usePathname();
    return(
        <div className={["flex justify-center   rounded-md md:px-6 hover:scale-105 transition-transform h-30",className].join(' ')}>
                <Link className={["md:text-xl",pathname!==url && "text-slate-400"].join(" ")}  href={url}>{label}</Link>
        </div>
    )
}