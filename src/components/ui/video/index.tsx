"use client"
import WrapperCreateAnimation from "@/components/animation/WrapperCreateAnimation";

interface IProps{
    src:string,
}

export default function Video({src}:IProps){
    return(
        <WrapperCreateAnimation className={"rounded-md overflow-hidden flex justify-center"}>
            <video  height="480px" controls >
                <source src={src} />
            </video>
        </WrapperCreateAnimation>
    );
}