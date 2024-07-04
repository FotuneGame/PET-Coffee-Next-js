import WrapperCreateAnimation from "@/components/animation/WrapperCreateAnimation";
import {ElementCardType, MethodLoadResultType} from "@/components/ui/types/card";
import ItemCard from "@/components/ui/card/item";
import MainItemCard from "@/components/ui/card/mainItem";
import {useEffect,useState} from "react";
import Button from "@/components/ui/button";

interface IProps{
    methodLoad:(page:number,limit:number) => MethodLoadResultType,
    limit:number,
    key_hash:string,
    className:string,
    clear:boolean,
    setClear:(value:boolean)=>void | null,
}

export default function Pagination({
       methodLoad,
       limit,
       key_hash,
       className,
       clear=false,
       setClear=null
    }:IProps){
    const [array,setArray] = useState<Array<ElementCardType>>([]);
    const [page,setPage] = useState(1);
    const [lastPage,setLastPage] = useState(false);

    useEffect(()=>{
        if(clear) {
            setPage(1);
            setArray([]);
            setLastPage(false);
            if(setClear)
                setClear(false);
        }else {
            const res = methodLoad(page, limit);
            if (res.pageAll >= page) {
                if (!clear)
                    setArray([...array, ...(res.arrayAdd)]);
                setLastPage(false);
            } else setLastPage(true);
        }
    },[page,lastPage,clear]);

    return(
        <div className={className}>
            <div className={"grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 py-3"}>
                { array &&
                    array?.map((el,index)=>{
                        switch (el.type){
                            case "ItemType":
                                return(<ItemCard className={"md:col-end-auto"} url={el.url} item={el.data} key={"pagination"+el.url+key_hash+index}/>);
                            case "ItemMoreType":
                                return (<MainItemCard className={"lg:col-span-2"} url={el.url} item={el.data} key={"pagination"+el.url+key_hash+index}/>);
                            default:
                                return(<ItemCard className={"md:col-end-auto"} url={el.url} item={el.data} key={"pagination"+el.url+key_hash+index}/>);
                        }
                    })
                }
            </div>
            <WrapperCreateAnimation className={"flex justify-center my-6"}>
                {lastPage ?
                    <Button callback={()=>setLastPage(true)}>Кажется всё...</Button>
                    :
                    <Button type={"info"} callback={()=>setPage(page+1)}>Показать ещё</Button>
                }
            </WrapperCreateAnimation>
        </div>
    )
}