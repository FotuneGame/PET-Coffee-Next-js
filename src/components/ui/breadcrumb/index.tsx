"use client"
import {BreadcrumbType} from "@/components/ui/types/breadcrumb";
import Link from "next/link";

interface IProps{
    path:Array<BreadcrumbType>,
}

export default function Breadcrumb({path}:IProps){

    return(
        <ol className="list-reset flex">
            {path && path.map((el,index)=>{
                if(index!==path.length-1) {
                    return (
                        <li key={"breadcrumb"+el.url+el.name+index}>
                            <Link className={"hover:text-sky-700"} href={el.url}>{el.name}</Link>
                            <span className="mx-2 text-neutral-400">/</span>
                        </li>
                    );
                }else{
                    return (
                        <li key={"breadcrumb"+el.url+el.name+index} className="text-neutral-400">
                            <Link href={el.url}>{el.name}</Link>
                        </li>
                    );
                }
            })}
        </ol>
    )
}