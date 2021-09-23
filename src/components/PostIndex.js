import Post from "@components/Post";
import styleModule from "@styles/Post.module.css";
import usePosts from "@hooks/posts";
import { useState } from "react";
import Link from "next/link";

export default function PostIndex() {
    const posts = usePosts();
    const categories = posts.map((post) => post.category).sort().filter((value, index, self) => self.indexOf(value) === index);
    const [cate, setCate] = useState();

    if (!posts) return <>No Posts</>;

    return (
        <>
            <h2 className={styleModule.header}>Posts</h2>
            <div className={styleModule.divMainHolder}>
                <div className={styleModule.catHolder}>
                    {categories.map((cat, index) => <span key={index} onClick={() => setCate(cat)} active={cate == cat ? "true" : "false"}>{cat}</span>)}
                </div>
                <div className={styleModule.PostHolder}>
                    {posts.filter(post => post.category == cate).map((post, index) => <Post key={index} post={post}></Post>)}
                </div>
            </div>
        </>
    )
}