"use client"
import {useEffect, useState} from "react";
import Category from "@/components/layout/category";
import Pagination from "@/components/ui/pagination";
import {getAllCategoryAPI} from "@/api/category";
import {getItemsAPI} from "@/api/item";

interface IProps{
    key_hash:string,
    limit:number,
}

export default function ItemList({key_hash,limit=4}:IProps){
    const [arrayCategory,setArrayCategory] = useState<Array<string>>([]);
    const [categoryNow,setCategoryNow] = useState<string>(null);
    const [clear,setClear] = useState<boolean>(false);

    const ChangeCategory = (category:string) =>{
        setCategoryNow(category);
        setClear(true);
    }

    const loadItems = (page:number,limit:number) =>{
        return getItemsAPI(page,limit,categoryNow);
    }

    useEffect(()=>{
        setArrayCategory(getAllCategoryAPI());
    },[]);


    return(
        <>
            <Category
                arrayCategory={arrayCategory}
                callback={ChangeCategory}
            />
            <Pagination
                methodLoad={loadItems}
                limit={limit}
                key_hash={key_hash}
                clear={clear}
                setClear={setClear}
            />
        </>
    );
}