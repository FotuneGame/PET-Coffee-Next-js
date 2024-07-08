import WrapperCreateAnimation from "@/components/animation/WrapperCreateAnimation";
import {IItem} from "@/types/item";
import Carousel from "@/components/ui/carousel";
import TimeSVG from "../../../../public/icon/time.svg";
import EyeSVG from "../../../../public/icon/eye.svg";
import Modal from "@/components/ui/modal";
import FormAddOrder from "@/components/layout/form/order/add";

interface IProps{
    item:IItem,
    arrayCoffeeshop:Array<string> | null,
}

export default function Item({item,arrayCoffeeshop}:IProps){

    return(
        <WrapperCreateAnimation className="md:flex align-center gap-3  pt-6 ">
            <div className={"basis-1/2"}>
                <Carousel key_hash={"preview carousel"}>
                    {item.img?.map((img,index)=>{
                        return(
                            <div key={"Item img "+index}>
                                <img src={img} alt={img} className="w-full"/>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="flex text-center md:text-start basis-1/2 transition-all flex-col justify-start">
                <div className={"flex justify-end items-center p-2  gap-3"} >
                    <p className={"flex items-center gap-1 text-sm md:text-base"}>
                        <TimeSVG width={"1rem"} height={"1rem"}/>
                        {item.time}
                    </p>
                    <p className={"flex items-center gap-1 text-sm md:text-base"}>
                        <EyeSVG width={"1.5rem"} height={"1.5rem"}/>
                        {item.view}
                    </p>
                </div>
                <div className={"h-3/5 p-2 flex justify-around md:justify-between items-center gap-1 mt-12"} >
                    <div className={"basis-3/4 md:basis-full mr-3 mb-12"}>
                        <p className={"text-xl md:text-3xl"}>{item.name}</p>
                        <p className={"md:text-xl pb-6"}>{item.category}</p>
                        <p className={"text-sm md:text-base"}>{item.description}</p>
                        <p className={"text-sm md:text-base"}>Состав: {item.structure}</p>
                        {arrayCoffeeshop ? 
                            <Modal className={"mt-6"} type={"success"} label={"Сделать заказ"}>
                                <FormAddOrder item={item} arrayCoffeeshop={arrayCoffeeshop}/>
                            </Modal>
                        :
                            <p className="text-xl text-red">Товара нет в наличии(</p>
                        }
                    </div>
                    <div className={"basis-1/4 flex flex-col justify-end mb-12"}>
                        <strong className={"text-xl md:text-2xl"}>{item.price} ₽</strong>
                        <p className={"text-sm text-red-500 line-through"}>{item.oldPrice} ₽ </p>
                    </div>
                </div>
            </div>
        </WrapperCreateAnimation>
    )
}