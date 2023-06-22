import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/test/[id]" as="/test/1">
        First
      </Link>
      <Link href="/test/2">Seconds</Link>
    </>
  );
}
