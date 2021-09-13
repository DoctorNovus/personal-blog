import Link from "next/link";

export default function Post({ post }) {
    if (!post) return <div>No data found</div>;

    return (
        <div>
            <Link href={`/posts/${post.pid}`}>
                <a>
                    <h3>{post.name}</h3>
                </a>
            </Link>
        </div>
    );
}