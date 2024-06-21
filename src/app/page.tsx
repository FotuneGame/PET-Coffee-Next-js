import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/item/lol"}>Item with slug=lol</Link>
      Hello!
    </>
  );
}
