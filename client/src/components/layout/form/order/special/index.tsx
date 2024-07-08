"use client"
import Input from "@/components/ui/input";
import Dropdown from "@/components/ui/dropdown";
import Button from "@/components/ui/button";
import Popup from "@/components/ui/popup";

import URL from "@/config/route";
import { useRouter } from "next/navigation";

import type { RootState } from '@/store'
import { useSelector, useDispatch } from "react-redux";
import { actions } from '@/store/slice/form/special';
import {buySpecialAPI} from "@/api/item";
import { useState } from "react";

interface IProps{
    arrayCoffeeshop:Array<string>
}

export default function FormSpecialOrder({arrayCoffeeshop}:IProps){

    const router = useRouter();
    const [valid,setValid] = useState<boolean>(true);
    const specialInfo = useSelector((state: RootState) => state.form.special);
    const dispatch = useDispatch();

    const sendOrder = async () =>{
        if(!specialInfo.message || !specialInfo.count || !specialInfo.feedback || !specialInfo.place || !specialInfo.time || !specialInfo.date)
          return setValid(false);
        setValid(true);
        //console.log(specialInfo) - redux хранилище
        const res = await buySpecialAPI(specialInfo);
        if(res){
          dispatch(actions.setDefault());
          router.replace(URL.send.order+"/"+res.idOrder);
        }
    }



    return(
        <div className="flex flex-col justify-center gap-1 w-full px-6 border-2 p-6 rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center py-6">
                <Input type={"number"} value={specialInfo.count} label={"Штук:"} callback={(e)=>dispatch(actions.setCount(Number(e.target.value)))} placeholder="1" max={100} min={1}/>
                <Input type={"time"} value={specialInfo.time} label={"Время:"} callback={(e)=>dispatch(actions.setTime(e.target.value))}/>
                <Input type={"date"} value={specialInfo.date} label={"Дата:"} callback={(e)=>dispatch(actions.setDate(e.target.value))}/>
                <Input type={"phone"} value={specialInfo.feedback} label={"Номер телефона:"} callback={(e)=>dispatch(actions.setFeedback(e.target.value))} placeholder="+7 (953) 349-61-09"/>
            </div>
            <Input type={"textaria"} value={specialInfo.message} label={"Ваши пожелания:"} callback={(e)=>dispatch(actions.setMessage(e.target.value))} placeholder="Ваши пожелания"/>
            <div className={"flex justify-between gap-1"}>
                <Dropdown label={"Кофейня"} key_hash="chouse coffeeshop" array={arrayCoffeeshop} callback={(value)=>dispatch(actions.setPlace(value))}/>
                <Button type={"success"} callback={sendOrder}>Отправить спец. заказ</Button>
            </div>
            {!valid &&         
            <Popup className="z-40">
                <p className="text-red-500">Неверно заполнены поля!</p>
            </Popup>
            }
        </div>
    )
}