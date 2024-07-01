
interface IPrpos{
    type:"text" | "textaria" | "number" | "date",
    placeholder:string,
    value:string,
}

export default function Input({type,placeholder,value}:IPrpos){
    switch(type){
        case "text":
            return (<></>)
        case "textaria":
            return (<>s</>);
        case "number":
            return (<>s</>);
        case "date":
            return (<></>);
    }

}