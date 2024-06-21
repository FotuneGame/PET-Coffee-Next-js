"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
//import { useRouter } from "next/navigation";


export default function Home() {

  //const router = useRouter();
  //редирект
  //router.push(страница)
  //редирект без возврата назад 
  //router.replace(страница)

  const params = useParams<{id: string}>();

  return (
    <>
      Страница кофейни с id={params.id}
      <Link href={"/"}>На главную</Link>
    </>
  );
}
