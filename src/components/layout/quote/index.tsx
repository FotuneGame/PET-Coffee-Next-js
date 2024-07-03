import WrapperScrollAnimation from "@/components/animation/WrapperScrollAnimation";

interface IProps{
    label:string,
    text:string,
}

export default function Quote({label,text}:IProps){

    return(
        <WrapperScrollAnimation>
            <div className={"flex flex-col justify-center items-center text center my-6"}>
                <hr className="w-48 h-1 mx-auto my-4"/>
                <h1 className={"md:text-xl lg:text-2xl"}>{label}</h1>
                <p className={"lg:text-xl my-2"}>{text}</p>
                <hr className="w-48 h-1 mx-auto my-4"/>
            </div>
        </WrapperScrollAnimation>
    )
}