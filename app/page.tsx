"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const test = () => {
    router.prefetch("/test/4");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={test}></button>
      <Link href="/test/[id]?id=1" as="/test/1">
        First
      </Link>
      <Link href="/test/2">Seconds</Link>
      <Link href="/test/[id]" as="/test/3">
        Third
      </Link>
    </div>
  );
}
