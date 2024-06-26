"use client"

import Preview from "@/components/ui/preview";
import Carousel from "@/components/ui/carousel";
import Category from "@/components/layout/category";
import Info from "@/components/layout/info";

import CategoryCard from "@/components/ui/card/category";
import ItemCard from "@/components/ui/card/item";
import MainItemCard from "@/components/ui/card/mainItem";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/modal";
import Dropdown from "@/components/ui/dropdown";


export default function TestPage(){

    return(
        <>
            <Preview
                label="Кофе на каждый"
                arrayAddLabel={["День", "Вкус", "Дух"]}
                text="Наше кофе даёт бодрость"
                img={"/img/4.jpg"}
                buttonLabel="Перейти к главному"
                callback={()=>{}}
            />


            <Category arrayCategory={[
                {name:"Латте",url:"/"},
                {name:"Американо",url:"/"},
                {name:"Эсперсcо",url:"/"},
                {name:"В пакетике",url:"/"},
            ]}/>

            <Info
                label="Почему наше кофе?"
                text="С другой стороны, синтетическое тестирование выявляет срочную потребность поэтапного и последовательного развития общества. В своём стремлении улучшить пользовательский опыт мы упускаем, что базовые сценарии поведения пользователей рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Как принято считать, многие известные личности будут функционально разнесены на независимые элементы."
            >
                <Carousel key={"preview carousel"}>
                    <div>
                        <img src="/img/1.jpg" alt="image1" className="w-full"/>
                    </div>
                    <div>
                        <img src="/img/2.jpg" alt="image1" className="w-full"/>
                    </div>
                    <div>
                        <img src="/img/3.jpg" alt="image1" className="w-full"/>
                    </div>
                </Carousel>
            </Info>


            <>
                <Button type="danger" callback={()=>console.log("s")}>Hello</Button>
                <Button type="success" callback={()=>console.log("s")}>Hello</Button>
                <Button type="info" callback={()=>console.log("s")}>Hello</Button>
                <Button callback={()=>console.log("s")}>Hello</Button>
            </>

            <>
                <Input type="text" callback={()=>console.log("s")} value={"s"} placeholder="lol" label="sas"/>
                <Input type="textaria" callback={()=>console.log("s")} value={"s"} placeholder="lol" label="sas"/>
                <Input type="number" callback={()=>console.log("s")} value={"s"} placeholder="lol" label="sas"/>
                <Input type="date" callback={()=>console.log("s")} value={"s"} placeholder="lol" label="sas"/>
                <Input type="checkbox" callback={()=>console.log("s")} value={true} placeholder="lol" label="sas"/>
                <Input type="time" callback={()=>console.log("s")} value={true} placeholder="lol" label="sas"/>
                <Input type="phone" callback={()=>console.log("s")} value={""} placeholder="+7 (953) 349-61-09" label="sas"/>
                <Input type="file" callback={()=>console.log("s")} placeholder="lol" label="sas"/>
                <Input type="password" callback={()=>console.log("s")} value={true} placeholder="lol" label="sas"/>
            </>

            <>
                <Modal type="info" label="Modal">Hello</Modal>
            </>

            <>
                <Dropdown key_hash="droptest" type="info" label="Dropdown" array={["Первый","Второй","3","4","5"]} callback={(value:string)=>console.log(value)}/>
            </>

        </>
    )
}