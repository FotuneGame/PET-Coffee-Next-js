export type ItemType {
    id:number,
    name:string,
    preview:string,
    price:number,
    oldPrice:number,
    category:string,
    view:number,
}

export interface IItem extends ItemType{
    description:string,
    time:string,
    structure:string,
    img:Array<string> | undefined,
    video:string | undefined,
}