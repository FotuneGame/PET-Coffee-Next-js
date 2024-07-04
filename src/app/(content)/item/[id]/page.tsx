import Popup from "@/components/ui/popup";
import Item from "@/components/layout/item";
import Info from "@/components/layout/info";
import FormSpecialOrder from "@/components/layout/form/order/special";
import Breadcrumb from "@/components/ui/breadcrumb";
import {ItemMoreType} from "@/types/item";
import Carousel from "@/components/ui/carousel";
import Quote from "@/components/layout/quote";
import Video from "@/components/ui/video";

interface IPropsSSR{
    params:{
        id:number,
    }
}

export default async function Home({params}:IPropsSSR) {
    const item = await getData({params});
    return (
        <>
            <div className={"w-full flex justify-center md:justify-start"}>
                <Breadcrumb path={[
                    {name:"Главная",url:"/"},
                    {name:"Ассортимент",url:"/item"},
                    {name:item.name,url:"/item/"+item.id},
                ]} />
            </div>
            <Item item={item}/>
            {item.video &&
                <>
                    <Quote label={"Видео рецепт"} text={"Посмотрите за качеством исполнения барист"} />
                    <Video src={item.video} />
                </>
            }

            <Popup>
                Мы можем использовать cookie для работы сайта...
            </Popup>
            <Info
                label={"Сделать специальный заказ"}
                text={"Если вы не нашли подходящего вам кофе, то напишите нам"}
            >
                <FormSpecialOrder />
            </Info>
        </>
    );
}

async function getData({params}:IPropsSSR) : Promise<ItemMoreType> {
    const res = await  {
        id:params.id,
        name:"Ловина кайфа",
        preview:"/img/1.jpg",
        price:1200,
        oldPrice:2000,
        category:"Эспрессо",
        view:123,
        description:"Краткое описание sdsd sds sdsds d sd ssds sds d s dsds sd dd  sd sd d s ds sdsdsdaaaaaaaaaasd s ad asdasd d sd sdsd d sds  d",
        time:"20 мин",
        structure:"Кофе + молоко",
        img: ["/img/1.jpg","/img/2.jpg"],
        video: "/video/404.webm",
    }
    return res;
}
