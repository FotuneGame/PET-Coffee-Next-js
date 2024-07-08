import Item from "@/components/layout/item";
import Info from "@/components/layout/info";
import FormSpecialOrder from "@/components/layout/form/order/special";
import Breadcrumb from "@/components/ui/breadcrumb";
import Quote from "@/components/layout/quote";
import Video from "@/components/ui/video";
import NotFound from "@/app/not-found";

import {IItem} from "@/types/item";
import { getItemByIdAPI } from "@/api/item";
import { getCoffeeshopByItemByIdAPI,getCoffeeshopByItemAllAPI } from "@/api/coffeeshop";

interface IPropsSSR{
    params:{
        id:number,
    }
}

export default async function ItemPage({params}:IPropsSSR) {
    const item = await getItemInfo({params});
    const listOfCoffeeshop = await getAllCoffeeshopById({params});
    const allOfCoffeeshop = await getAllCoffeeshop();
    if(!item) return (<NotFound/>);
    return (
        <>
            <div className={"w-full flex justify-center md:justify-start mt-6"}>
                <Breadcrumb path={[
                    {name:"Главная",url:"/"},
                    {name:"Ассортимент",url:"/item"},
                    {name:item.name,url:"/item/"+item.id},
                ]} />
            </div>
            <Item item={item} arrayCoffeeshop={listOfCoffeeshop}/>
            {item.video &&
                <>
                    <Quote label={"Видео рецепт"} text={"Посмотрите за качеством исполнения барист"} />
                    <Video src={item.video} />
                </>
            }
            <Info
                label={"Сделать специальный заказ"}
                text={"Если вы не нашли подходящего вам кофе, то напишите нам"}
            >
                {allOfCoffeeshop && <FormSpecialOrder arrayCoffeeshop={allOfCoffeeshop}/>}
            </Info>
        </>
    );
}

async function getItemInfo({params}:IPropsSSR) : Promise<IItem | null>{
    if(!params.id || !Number(params.id)) return null;
    const res = await  getItemByIdAPI(params.id);
    return res;
}

async function getAllCoffeeshopById({params}:IPropsSSR) : Promise<Array<string> | null>{
    if(!params.id || !Number(params.id)) return null;
    const res = await  getCoffeeshopByItemByIdAPI(params.id);
    return res;
}

async function getAllCoffeeshop() : Promise<Array<string> | null>{
    const res = await  getCoffeeshopByItemAllAPI();
    return res;
}
