import Link from "next/link";
//import { useRouter } from "next/navigation";


export default function Home({id}) {

    //const router = useRouter();
    //редирект
    //router.push(страница)
    //редирект без возврата назад
    //router.replace(страница)


    return (
        <>
            Страница товара с id={id}
            <Link href={"/"}>На главную</Link>
        </>
    );
}

export const getServerSideProps = async (context) => {
    // Fetch data from external API
    const query = await context.query;

    // Pass data to the page via props
    return { props: {
            id: query.id,
        } }
}
