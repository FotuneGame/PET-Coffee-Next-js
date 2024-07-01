import Carousel from "@/components/ui/carousel"
import CategoryCard from "@/components/ui/card/category";
import type { Category } from "@/types/category"
import useDividedArray from "@/hooks/useDividedArray";

interface IProps{
    arrayCategory:Array<Category>,
}

export default function Category({arrayCategory}:IProps){
    const array = useDividedArray(arrayCategory,3);

    return(
        <div className={"pt-6"}>
        <h1 className={"w-full text-center text-3xl pt-6"}>Категории</h1>
        <Carousel className={"pt-6"} indicator={false} key={"carousel category"+arrayCategory.length ? arrayCategory[0].name : "without array"}>
                {array.map((block,index)=>{
                    return(
                        <div className="flex gap-3 px-1">
                            {block.map((el,index)=>{
                                return(
                                    <CategoryCard className="basis-1/3" url={el.url} label={el.name} />
                                );
                            })  
                            }
                        </div>
                    )
                })}
        </Carousel>
    </div>
    )
}