"use client"
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Popup from "@/components/ui/popup";

import URL from "@/config/route";
import { useRouter } from "next/navigation";

import type { RootState } from '@/store'
import { useSelector, useDispatch } from "react-redux";
import { actions } from '@/store/slice/form/team';
import {sendSupportTeamAPI} from "@/api/team";
import { useState } from "react";


export default function FormPartnerAdd(){

    const router = useRouter();
    const [valid,setValid] = useState<boolean>(true);
    const teamInfo = useSelector((state: RootState) => state.form.team);
    const dispatch = useDispatch();

    const sendOrder = async () =>{
        if(!teamInfo.name || !teamInfo.message || !teamInfo.feedback)
          return setValid(false);
        setValid(true);
        console.log(teamInfo) 
        const res = await sendSupportTeamAPI(teamInfo);
        if(res){
          dispatch(actions.setDefault());
          router.replace(URL.send.support);
        }
    }


    return (
        <div className="flex flex-col justify-center gap-1 w-full px-6 border-2 p-6 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center py-6">
            <Input type={"text"} value={teamInfo.name} label={"ФИО"} callback={(e)=>dispatch(actions.setName(e.target.value))} placeholder="Иванов Иван Иванович"/>
            <Input type={"phone"} value={teamInfo.feedback} label={"Номер телефона:"} callback={(e)=>dispatch(actions.setFeedback(e.target.value))} placeholder="+7 (953) 349-61-09"/>
        </div>
        <Input type={"textaria"} value={teamInfo.message} label={"Ваши пожелания:"} callback={(e)=>dispatch(actions.setMessage(e.target.value))} placeholder="Ваши пожелания"/>
        <div className={"flex justify-end gap-1"}>
            <Button type={"success"} callback={sendOrder}>Отправить предложение</Button>
        </div>
        {!valid &&         
        <Popup className="z-40">
            <p className="text-red-500">Неверно заполнены поля!</p>
        </Popup>
        }
    </div>
    )
}