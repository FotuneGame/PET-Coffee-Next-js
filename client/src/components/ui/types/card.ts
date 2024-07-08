import {IItem, ItemType} from "@/types/item";

export type ElementCardType = {
    url:string,
    data: ItemType | IItem,
    type: "ItemType" | "IItem"
}

export type MethodLoadResultType = {
    arrayAdd:Array<ElementCardType>,
    pageAll:number,
}