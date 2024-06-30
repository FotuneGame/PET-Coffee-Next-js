"use client"

import {motion,AnimatePresence} from "framer-motion";
import style from "./loader.module.css";
import CoffeeSVG from "@/../public/icon/coffee.svg"

interface IProps{
    loading:boolean,
}

export default function Loader({loading=false}:IProps){
    return(
        <AnimatePresence>
            {!loading &&
                <div className={style.position}>
                    <div className={style.center}>
                        <motion.div
                            layout={false}
                            animate={{
                                width:["100px","100px", "100px",],
                                height: ["100px","100px", "100px",],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration:1,
                                repeat: Infinity,
                                repeatDelay:1,
                            }}
                        >
                            <CoffeeSVG className={style.size} width={"100px"} heigth={"100px"}/>
                            <h1>Завариваем...</h1>
                        </motion.div>
                    </div>
                </div>
            }
        </AnimatePresence>
    )
}