"use client"
import {motion} from "framer-motion";

interface IProps{
    children:React.ReactNode,
    className:string,
}

export default function WrapperScrollAnimation({children,className}:IProps){
    return(
        <motion.div
            className={["w-full",className].join(" ")}
            initial={{ y:-100, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{
                duration:0.5,
            }}
        >
            {children}
        </motion.div>
    )
}