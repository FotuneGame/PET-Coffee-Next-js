"use client"
import {useState} from "react";
import ArrowSVG from "@/../public/icon/arrow.svg";

interface IProps{
    indicator:boolean,
    controls:boolean,
    children:React.ReactNode,
    key_hash: string,
    className:string,
}

export default function Carousel ({indicator=true,controls=true,children,key_hash,className}:IProps){
    const [now,setNow] = useState(0);

    const next = ()=>{
        if(now<children?.length-1)setNow(now+1);
        else setNow(0);
    }

    const before = () => {
        if(now>0)setNow(now-1);
        else setNow(children?.length-1);
    }


    return(
        <div className={["w-full overflow-hidden",className].join(" ")}>
            <div className={"relative transform transition-all"} style={{left:now*-100 + "%"}}>
                <div className={"flex w-full overflow-hidden"} style={{width:100*children?.length+"%",maxHeight:"380px"}}>
                    {children && children.map((el:any,index:number)=>{
                       return(
                        <div className={"w-full"} key={"content"+index+key_hash}>
                            {el}
                        </div>
                       )
                    })}
                </div>
            </div>
            <div className={["flex z-10 pt-2",controls ? "justify-between" : "justify-center"].join(" ")}>
                {controls && <ArrowSVG width={"2rem"} height={"2rem"} className={"active:scale-110 transition-all"} onClick={before}/>}
                {indicator &&
                    <div className={"grid grid-cols-2 md:grid-cols-3  gap-2"}>
                        {children && children.map((el:any,index:number)=>{
                            return(
                                <div
                                    key={"control"+index+key_hash}
                                    style={now===index ? {height:"3rem",opacity:1} : {height:"2rem",opacity:0.7}}
                                    className={"overflow-hidden w-20"}
                                    onClick={()=>setNow(index)}
                                >
                                    {el}
                                </div>
                            )
                        })}
                    </div>
                }
                {controls &&<ArrowSVG width={"2rem"} height={"2rem"} className={"transform rotate-180 active:scale-110 transition-all"} onClick={next}/>}
            </div>

        </div>
    )
}