import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About</Link></p>
    </main>
  );
}
