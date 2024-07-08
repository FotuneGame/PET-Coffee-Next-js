import Preview from "@/components/ui/preview";
import Quote from "@/components/layout/quote";
import Info from "@/components/layout/info";
import Carousel from "@/components/ui/carousel";

export default function About(){
    return(
        <>
            <Preview
                label={"Все лучшее для"}
                text={"Мы стараемся сделать ваш день особенным"}
                arrayAddLabel={["вас","детей","работников","учителей","будущего"]}
                buttonLabel={"Подробнее о нас"}
                img={"/img/3.jpg"}
                href={"#about"}
            />

            <div id={"about"}/>
            <Quote
                label={"О нас"}
                text={"Кратко про нашу деятельность"}
            />


            <Info
                label={"Наши партнёры-кофейни лучшие"}
                text={"Мы считаем, что хорошый выбор кофейнь рядом с домом, работой, учебой важен для каждого человека. Нет ничего приятный в подходящей момент выпить чашечку эсперссо или же мендального латте."}
            >
                <div className={"rounded-md overflow-hidden"}>
                    <img src="/img/3.jpg" alt="image1" className="w-full"/>
                </div>
            </Info>

            <Quote
                label={"Фото нашей работы"}
                text={"Небольшая галерея прекрасных рабочих дней для вас"}
            />

            <Carousel className={"mt-6"} controls={false} key_hash={"preview carousel"}>
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


            <Quote
                label={"Наши партнёры"}
                text={"Карта всех кофейнь"}
            />

            <Info
                label={"Карта с кем мы сотрудничаем"}
                text={"Предствлена карта всех сетей кофейнь, с которыми мы сотрудничаем, чтобы вы могли всегда выпить прекрасную чашечку кофе, где и когда угодно."}
            >
                <div className={"rounded-md overflow-hidden"}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A392a7992db0c63428447bf7bc396419b907b071398a467ac09beed78f64bccfe&amp;source=constructor"
                        width="100%" height="400" frameBorder="0">
                    </iframe>
                </div>
            </Info>
        </>
    );
}