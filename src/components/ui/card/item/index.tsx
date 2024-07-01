import Link from "next/link";

interface IProps{
    url:string,
    label: string
}

export default function ItemCard({label,url}:IProps){
    return(
        <div>
            <Link href={url}>{label}</Link>
        </div>
    )
}