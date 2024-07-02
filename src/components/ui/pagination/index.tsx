import {ElementCardType, MethodLoadResultType} from "@/components/ui/types/card";
import ItemCard from "@/components/ui/card/item";
import MainItemCard from "@/components/ui/card/mainItem";
import {useEffect,useState} from "react";
import Button from "@/components/ui/button";

interface IProps{
    methodLoad:(page:number,limit:number) => MethodLoadResultType,
    limit:number,
    key_hash:string,
}

export default function Pagination({methodLoad,limit,key_hash}:IProps){
    const [array,setArray] = useState<Array<ElementCardType>>([]);
    const [page,setPage] = useState(1);
    const [lastPage,setLastPage] = useState(false);

    useEffect(()=>{
        const res = methodLoad(page,limit);
        if(res.pageAll>=page) {
            setArray([...array, ...(res.arrayAdd)]);
            setLastPage(false);
        }else setLastPage(true);
    },[page,lastPage]);

    return(
        <div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 py-3"}>
                { array &&
                    array?.map((el,index)=>{
                        switch (el.type){
                            case "ItemType":
                                return(<ItemCard url={el.url} item={el.data} key={"pagination"+el.url+key_hash+index}/>);
                            case "ItemMoreType":
                                return (<MainItemCard className={"md:col-span-2"} url={el.url} item={el.data} key={"pagination"+el.url+key_hash+index}/>);
                            default:
                                return(<ItemCard url={el.url} item={el.data} key={"pagination"+el.url+key_hash+index}/>);
                        }
                    })
                }
            </div>
            <div className={"flex justify-center"}>
                {lastPage ?
                    <Button callback={()=>setLastPage(true)}>Кажется всё...</Button>
                    :
                    <Button type={"info"} callback={()=>setPage(page+1)}>Показать ещё</Button>
                }
            </div>
        </div>
    )
}