import NotFound from "@/app/not-found";
import { OrderType } from "@/api/types/order";
import { getOrderAPI } from "@/api/order";
import Preview from "@/components/ui/preview";
import URL from "@/config/route";
import Quote from "@/components/layout/quote";

interface IPropsSSR{
    params:{
        id:number,
    }
}

export default async function Send({params}:IPropsSSR){

    const order = await getOrderInfo({params});
    if(!order) return (<NotFound/>);
    return(
        <>
            <Preview
                label={"Ваш заказ в обработке c номером: " + order.idOrder}
                text={"Мы свяжемся с вами в ближаёщее время!"}
                arrayAddLabel={[]}
                buttonLabel={"На главную"}
                img={"/img/4.jpg"}
                href={URL.main}
            />
            <Quote label="Более подробная информация о заказе:" text={"Чек покупки: "+order.check}/>
        </>
    );    
}

async function getOrderInfo({params}:IPropsSSR) : Promise<OrderType | null>{
    if(!params.id || !Number(params.id)) return null;
    const res = await getOrderAPI(params.id);
    return res;
}