import Link from "next/link"

interface IProps{
    className:string,
    url:string,
    label:string
}

export default function CategoryCard({url,label,className}:IProps){
    return(
        <div className={["flex justify-center bg-slate-200 rounded-md md:px-6 hover:scale-110 transition-transform opacity-80 hover:opacity-100 h-30",className].join(' ')}>
            <div className="flex flex-col justify-center sm:px-6 text-center xl:text-start">
                <h1 className="sm:text-xl md:text-2xl">{label}</h1>
                <Link className="md:text-xl md:pt-6 text-sky-700" href={url}>Подробнее</Link>
            </div>
            <div className="pl-6 hidden xl:block">
                <img src="/img/1.jpg" alt={label} className=" h-full"/>
            </div>
        </div>
    )
}