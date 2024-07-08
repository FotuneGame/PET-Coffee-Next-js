import {ElementCardType} from "@/components/ui/types/card";
import { IItem } from "@/types/item";

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
        type:"IItem"
    },
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
        type:"IItem"
    },
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
        type:"IItem"
    }
]

export const itemTest:IItem={
    id:1,
    name:"Ловина кайфа",
    preview:"/img/1.jpg",
    price:1200,
    oldPrice:2000,
    category:"Эспрессо",
    view:123,
    description:"Краткое описание sdsd sds sdsds d sd ssds sds d s dsds sd dd  sd sd d s ds sdsdsdaaaaaaaaaasd s ad asdasd d sd sdsd d sds  d",
    time:"20 мин",
    structure:"Кофе + молоко",
    img: ["/img/1.jpg","/img/2.jpg"],
    video: "/video/404.webm",
} 
