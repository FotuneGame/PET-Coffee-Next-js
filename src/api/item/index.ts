import {MethodLoadResultType} from "@/components/ui/types/card";
import {arrTest} from "./test";

export const getItemsAPI = (page:number,limit:number,category:string) : MethodLoadResultType=>{

    const res =  {
        arrayAdd: arrTest,
        pageAll: 4,
    };
    return res;
}