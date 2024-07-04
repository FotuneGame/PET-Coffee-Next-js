import Preview from "@/components/ui/preview";
import Quote from "@/components/layout/quote";
import ItemList from "@/components/layout/itemList";
import Info from "@/components/layout/info";
import Carousel from "@/components/ui/carousel";
import Popup from "@/components/ui/popup";

export default function Home() {
  return (
    <>
        <Preview
            label={"Кофе на каждый"}
            text={"Лучшие сорта кофе для вас"}
            arrayAddLabel={["день","вкус","стиль","вайб","прайс"]}
            buttonLabel={"Получить кофе"}
            img={"/img/2.jpg"}
            href={"#about"}
        />

        <Quote
            label={"Хочешь попробовать новый кофе?"}
            text={"Наслаждайся новыми сортами и ароматами кофе рядом с домом"}
        />

        <ItemList key_hash={"main"} limit={12}/>

        <Quote
            label={"О нас"}
            text={"Кратко про нашу деятельность"}
        />

        <Info
            label={"Наши партнёры-кофейни лучшие"}
            text={"Мы считаем, что хорошый выбор кофейнь рядом с домом, работой, учебой важен для каждого человека. Нет ничего приятный в подходящей момент выпить чашечку эсперссо или же мендального латте."}
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

        <Quote
            label={"Наши партнёры"}
            text={"Карта всех кофейнь"}
        />
        <div className={"rounded-md overflow-hidden"}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A392a7992db0c63428447bf7bc396419b907b071398a467ac09beed78f64bccfe&amp;source=constructor"
                width="100%" height="400" frameBorder="0">
            </iframe>
        </div>

        <Popup>
            Мы можем использовать cookie для комфортной работы сайта...
        </Popup>
    </>
  );
}
