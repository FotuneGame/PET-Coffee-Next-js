import URL from "@/config/route";
import Preview from "@/components/ui/preview";
import Quote from "@/components/layout/quote";

export default function Support(){
    return(
        <>
            <Preview
                label={"Спасибо за ваше предложение!"}
                text={"Мы рассмотрим его в ближайшее время и свяжемся с вами."}
                arrayAddLabel={[]}
                buttonLabel={"На главную"}
                img={"/img/1.jpg"}
                href={URL.main}
            />
            <Quote label="Если возникли вопросы:" text={"Почта технической поддержки: exemple@gmail.com"}/>
        </>
    );
}