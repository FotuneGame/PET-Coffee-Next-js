import {ItemMoreType} from "@/types/item";

interface IProps{
    item:ItemMoreType,
}

export default function FormAddOrder({item}:IProps){
    return(
      <>
        Форма заказа кофе  {item.name}  id: {item.id}
      </>
    );
}