import { useEffect, useState } from "react";

export default function PostHolder({ pid }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        if (!pid)
            return;

        fetch(`/api/posts/${pid}`)
            .then(res => res.json())
            .then(post => {
                setName(post.name);
                setDate(post.date);
                setBody(post.body);
            });
    }, [pid]);

    if (!pid)
        return <div></div>;

    return (
        <div>
            <div>{name} - {date}</div>
            <div>{body}</div>
        </div>
    );
}
