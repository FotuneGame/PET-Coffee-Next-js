import type {MethodLoadResultType} from "@/components/ui/types/card";
import type { IItem } from "@/types/item";
import type { IItemForm, ISpecialForm } from "@/store/slice/form/types";
import type  {OrderType}  from "../types/order";

import {arrTest,itemTest} from "./test";
import { orderTest } from "../order/test";

export const getItemsAPI = async (page:number,limit:number,category:string) : Promise<MethodLoadResultType | null>=>{
    const res = await {
        arrayAdd: arrTest,
        pageAll: 4,
    };
    return res;
}

export const getItemByIdAPI = async (id: number): Promise<IItem> =>{
    const res = await itemTest;
    return res;
}

export const buyItemAPI = async (item:IItem,info:IItemForm) : Promise<OrderType | null> =>{
    const res = await orderTest;
    return res;
}

export const buySpecialAPI = async (info:ISpecialForm) : Promise<OrderType | null> =>{
    const res = await orderTest;
    return res;
}