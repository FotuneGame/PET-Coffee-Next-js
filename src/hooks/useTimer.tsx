import {useEffect, useState} from "react";

const useTimer = (msSecond:number,callback: ()=>void)=>{
    const [active,setActive] = useState<boolean>(true);
    useEffect(()=>{
        const timer = setTimeout(() => {
            if(active) {
                setActive(false);
                callback();
            }
        }, msSecond);
        return ()=>{
            setActive(true);
            clearTimeout(timer);
        }
    },[active]);
}

export default useTimer;