import Link from "next/link";
import Image from "next/image";

import style from "@styles/Post.module.css";

export default function Post({ post }) {
    if (!post) return <>No data found</>;

    if (!post.src)
        post.src = "/space.png";

    return (
        <div className={style.main}>
            <Link className={style.link} href={`/posts/${post.pid}`}>
                <a>
                    <h3 className={style.h3}>{post.name}</h3>
                </a>
            </Link>
            <div className={style.content}>
                <Image className={style.img} src={post.src} width="100%" height="100%" layout="responsive" alt={post.name}></Image>
                <p>{post.hint}</p>
            </div>
        </div>
    );
}