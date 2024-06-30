import Preview from "@/components/ui/preview";
import Carousel from "@/components/ui/carousel";
import Button from "@/components/ui/button";
import Loading from "@/app/loading";


export default function Home() {
  return (
    <>
      <Preview
          label="Кофе на каждый"
          arrayAddLabel={["День", "Вкус", "Дух"]}
          text="Наше кофе даёт бодрость"
      >
          <Carousel key={"preview carousel"}>
              <div>
                  <img src="/img/1.jpg" alt="image1"/>
              </div>
              <div>
                  <img src="/img/2.jpg" alt="image1"/>
              </div>
              <div>
                  <img src="/img/3.jpg" alt="image1"/>
              </div>
          </Carousel>

      </Preview>


        <div className={"pt-6"}>
            <h1 className={"w-full text-center text-3xl pt-6"}>Категории</h1>
            <Carousel className={"pt-6"} indicator={false} key={"preview carousel"}>
                <div className={"flex justify-around"}>
                    <h1> lol</h1>
                    <h1> lol</h1>
                    <h1> lol</h1>
                </div>
                <div className={"flex justify-around"}>
                    <h1> kek</h1>
                    <h1> kek</h1>
                    <h1> kek</h1>
                </div>
                <div className={"flex justify-around"}>
                    <h1> sas</h1>
                    <h1> sas</h1>
                    <h1> sas</h1>
                </div>
            </Carousel>
        </div>
    </>
  );
}
