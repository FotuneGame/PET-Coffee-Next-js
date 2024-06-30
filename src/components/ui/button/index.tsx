interface IProps{
    type: "danger" | "success" | "info",
    children:React.ReactNode,
    callback:()=>void,
}

export default function Button({type,children,callback}:IProps){
    switch (type){
        case "danger":
            return( <button className={"p-2 bg-slate-400 bg-red-400"} onClick={callback}>{children}</button>);
        case "success":
            return( <button className={"p-2 bg-lime-400"} onClick={callback}>{children}</button>);
        case "info":
            return( <button className={"p-2 bg-amber-400"} onClick={callback}>{children}</button>);
        default:
            return( <button className={"p-2 bg-slate-400"} onClick={callback}>{children}</button>);
    }

}


export async function getServerSideProps(context){
    const res = await 1;
    return {
        props:{
            callback: res,
        }
    }
}