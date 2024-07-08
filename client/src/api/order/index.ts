import { OrderType } from "../types/order";
import { orderTest } from "./test";

export const getOrderAPI = async (id:number) : Promise<OrderType>=>{
    const res = await  orderTest;
    return res;
}
