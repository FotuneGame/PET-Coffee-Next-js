import ItemList from "@/components/layout/itemList";
import Info from "@/components/layout/info";
import FormSpecialOrder from "@/components/layout/form/order/special";
import {getCoffeeshopByItemAllAPI} from "@/api/coffeeshop";

export default async function Items(){
    const listOfCoffeeshop = await getAllCoffeeshop();
    return(
        <>

            <ItemList key_hash={"main"} limit={12}/>
            <Info
                label={"Сделать специальный заказ"}
                text={"Если вы не нашли подходящего вам кофе, то напишите нам"}
            >
                {listOfCoffeeshop && <FormSpecialOrder arrayCoffeeshop={listOfCoffeeshop}/>}
            </Info>
        </>
    )
}

async function getAllCoffeeshop() : Promise<Array<string> | null>{
    const res = await  getCoffeeshopByItemAllAPI();
    return res;
}
