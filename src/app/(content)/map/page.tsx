import Popup from "@/components/ui/popup";
import Info from "@/components/layout/info";
import FormPartnerAdd from "@/components/layout/form/partner/add";
import Quote from "@/components/layout/quote";

export default function Map(){
    return(
        <>
            <Quote
                label={"Наши партнёры"}
            />
            <div className={"rounded-md overflow-hidden"}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A392a7992db0c63428447bf7bc396419b907b071398a467ac09beed78f64bccfe&amp;source=constructor"
                    width="100%" height="400" frameBorder="0">
                </iframe>
            </div>
            <Popup>
                Мы можем использовать cookie для работы сайта...
            </Popup>
            <Info
                label={"Не нашли кофейню?"}
                text={"Если вы хотите стать партнёром, то напишите нам"}
            >
                <FormPartnerAdd />
            </Info>
        </>
    )
}