"use client"
import {motion} from "framer-motion";

interface IProps{
    children:React.ReactNode,
    className?:string,
}

export default function WrapperCreateAnimation({children,className}:IProps){
    return(
        <motion.div
            className={["w-full",className].join(" ")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration:0.5,
            }}
        >
            {children}
        </motion.div>
    )
}