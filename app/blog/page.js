import Link from "next/link";

export default function BlogPage() {
    return (
        <main>
            <h1>Blog</h1>
            <p><Link href="/blog/page-1">Page 1</Link></p>
            <p><Link href="/blog/page-2">Page 2</Link></p>
        </main>
    );
}
