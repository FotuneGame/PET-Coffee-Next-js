import {ElementCardType,MethodLoadResultType} from "@/components/ui/types/card";

export const arrTest:Array<ElementCardType>=[
    {
        url:'/item',
        data:{
            id:1,
            name: "Коки сорте",
            preview: "http://localhost:3000/img/1.jpg",
            price: 1200,
            oldPrice:300,
            category: "Американо",
            view: 131,
        },
        type:"ItemType"
    },
    {
        url:'/item',
        data:{
            id:2,
            name: "Коки сорте 2",
            preview: "http://localhost:3000/img/1.jpg",
            price: 1200,
            oldPrice:300,
            category: "Американо",
            view: 131,
        },
        type:"ItemType"
    },
    {
        url:'/item',
        data:{
            id:1,
            name: "Коки сорте 3",
            preview: "http://localhost:3000/img/1.jpg",
            price: 1200,
            oldPrice:300,
            category: "Американо",
            view: 131,
        },
        type:"ItemType"
    },
    {
        url:'/item',
        data: {
            id:1,
            name: "Коки сорте Дарк",
            preview: "http://localhost:3000/img/2.jpg",
            price: 200,
            oldPrice:300,
            category: "Латте",
            view: 23,
            description: "краткое описание",
            time: "20 мин",
            structure: "кокао зерна + молоко",
        },
        type:"ItemMoreType"
    }
]
