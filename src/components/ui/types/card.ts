import {ItemMoreType, ItemType} from "@/types/item";

export type ElementCardType = {
    url:string,
    data: ItemType | ItemMoreType,
    type: "ItemType" | "ItemMoreType"
}

export type MethodLoadResultType = {
    arrayAdd:Array<ElementCardType>,
    pageAll:number,
}