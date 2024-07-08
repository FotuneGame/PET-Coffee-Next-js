"use client"

import WrapperScrollAnimation from "@/components/animation/WrapperScrollAnimation";
import Carousel from "@/components/ui/carousel"
import CategoryCard from "@/components/ui/card/category";
import useDividedArray from "@/hooks/useDividedArray";
import {useEffect, useState} from "react";

interface IProps{
    arrayCategory:Array<string>,
    callback:(category:string)=>void,
}

export default function Category({arrayCategory,callback}:IProps){
    const key_base="carousel category"+arrayCategory.length ? arrayCategory[0] : "without array";
    const [categoryNow,setCategoryNow] = useState<string>("");
    const array = useDividedArray(arrayCategory,3);
    const ChangeCategory = (category:string)=>{
        setCategoryNow(category);
        callback(category);
    }

    useEffect(()=>{
        setCategoryNow(arrayCategory[0])
    },[arrayCategory])

    return(
    <WrapperScrollAnimation className={"pt-6"}>
        <h1 className={"w-full text-center text-3xl pt-6"}>Категории</h1>
        <Carousel className={"pt-6"} indicator={false} key_hash={key_base}>
                {array.map((block,indexB)=>{
                    return(
                        <div className="flex gap-3 px-1" key={key_base+"block"+indexB}>
                            {block.map((name,indexC)=>{
                                return(
                                    <CategoryCard active={categoryNow===name} className="basis-1/3" callback={ChangeCategory} label={name} key={key_base+"block"+indexB+"card"+indexC}/>
                                );
                            })  
                            }
                        </div>
                    )
                })}
        </Carousel>
    </WrapperScrollAnimation>
    )
}