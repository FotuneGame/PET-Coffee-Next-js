import URL from "@/config/route"
import Link from "next/link"

export default function NotFound(){
    return(
        <div className="bg-slate-100 w-full rounded-md flex flex-col-reverse justify-center items-center md:flex-row md:justify-around">
            <video className="p-3" autoPlay loop muted width={300} height={300}>
                <source src="/video/404.webm" type="video/webm" />
            </video>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold text-center p-3">Страница не найдена. 404...</h1>
                <Link href={URL.main} className="text-xl text-center p-3 hover:text-sky-700">На главную</Link>
            </div>
        </div>
    )
}