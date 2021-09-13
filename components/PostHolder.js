import { useEffect, useState } from "react";

export default function PostHolder() {
    const [post, setPost] = useState({ name: "", date: "", body: "" });

    const { pid } = this.props;

    useEffect(() => {
        fetch(`/api/posts/${pid}`)
            .then(res => res.json())
            .then(post => {
                setPost({ name: post.name, date: post.date, body: post.body });
            });
    });

    return (
        <div>
            <div>{post.name} - {post.date}</div>
            <div>{post.body}</div>
        </div>
    );
};
