"use client"
import Input from "@/components/ui/input";
import Dropdown from "@/components/ui/dropdown";
import Button from "@/components/ui/button";
import Popup from "@/components/ui/popup";

import {IItem} from "@/types/item";
import URL from "@/config/route";
import { useRouter } from "next/navigation";
import {buyItemAPI} from '@/api/item';


import type { RootState } from '@/store'
import { useSelector, useDispatch } from "react-redux";
import { actions } from '@/store/slice/form/item';
import { useEffect, useState } from "react";

interface IProps{
    item:IItem,
    arrayCoffeeshop:Array<string>
}

export default function FormAddOrder({item,arrayCoffeeshop}:IProps){

    const router = useRouter();
    const [valid,setValid] = useState<boolean>(true);
    const itemInfo = useSelector((state: RootState) => state.form.item);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.setId(item.id));
    },[]);

    const sendOrder = async () =>{
        if(!itemInfo.id || !itemInfo.count || !itemInfo.feedback || !itemInfo.place || !itemInfo.time)
          return setValid(false);
        //console.log(itemInfo) - в redux храним наши заполнение формы
        setValid(true);
        const res = await buyItemAPI(item,itemInfo);
        if(res){
          dispatch(actions.setDefault());
          router.replace(URL.send.order+"/"+res.idOrder);
        }
    }

    return(
      <div className="flex flex-col justify-center gap-1 w-full px-6">
        <h1 className="text-xl">Форма заказа кофе: <strong>{item.name}</strong> ({item.category})</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center py-6">
            <Input type={"number"} value={itemInfo.count} label={"Штук:"} callback={(e)=>dispatch(actions.setCount(e.target.value))} placeholder="1" max={100} min={1}/>
            <Input type={"number"} value={itemInfo.sugar} label={"Ложек сахара:"} callback={(e)=>dispatch(actions.setSugar(e.target.value))} placeholder="0" max={30} min={0}/>
            <Input type={"time"} value={itemInfo.time} label={"Время:"} callback={(e)=>dispatch(actions.setTime(e.target.value))}/>
            <Input type={"date"} value={itemInfo.date} label={"Дата (необязательно):"} callback={(e)=>dispatch(actions.setDate(e.target.value))}/>
            <Input type={"phone"} value={itemInfo.feedback} label={"Номер телефона:"} callback={(e)=>dispatch(actions.setFeedback(e.target.value))} placeholder="+7 (953) 349-61-09"/>
        </div>
        <div className={"flex justify-between gap-1"}>
          <Dropdown label={"Кофейня"} key_hash="chouse coffeeshop" array={arrayCoffeeshop} callback={(value)=>dispatch(actions.setPlace(value))}/>
          <Button type={"success"} callback={sendOrder}>Отправить заказ</Button>
        </div>
        {!valid &&         
          <Popup className="z-40">
            <p className="text-red-500">Неверно заполнены поля!</p>
          </Popup>
        }
      </div>
    );
}