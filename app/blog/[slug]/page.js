export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>This is the blog post page for {params.slug}</p>
        </main>
    );
}
