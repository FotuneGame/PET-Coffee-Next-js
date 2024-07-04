export interface ItemType {
    id:number,
    name:string,
    preview:string,
    price:string,
    oldPrice:string,
    category:string,
    view:number,
}

export interface ItemMoreType extends ItemType{
    description:string,
    time:string,
    structure:string,
    img:Array<string> | undefined,
    video:string | undefined,
}