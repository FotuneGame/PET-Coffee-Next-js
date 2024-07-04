import Popup from "@/components/ui/popup";
import ItemList from "@/components/layout/itemList";
import Info from "@/components/layout/info";
import FormSpecialOrder from "@/components/layout/form/order/special";

export default function Item(){
    return(
        <>

            <ItemList key_hash={"main"} limit={12}/>
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
    )
}