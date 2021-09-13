import Link from "next/link";

export default function Post({ post }) {
    if (!post) return <>No data found</>;

    return (
        <>
            <Link href={`/posts/${post.pid}`}>
                <a>
                    <h3>{post.name}</h3>
                </a>
            </Link>
        </>
    );
}