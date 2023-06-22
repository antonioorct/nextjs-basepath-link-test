import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const test = () => {
    router.prefetch("/test/4");
  };

  return (
    <>
      <button onClick={test}></button>
      <Link href="/test/[id]?id=1" as="/test/1">
        First
      </Link>
      <Link href="/test/2">Seconds</Link>
      <Link href="/test/[id]" as="/test/3" passHref>
        <a>Third</a>
      </Link>
    </>
  );
}
