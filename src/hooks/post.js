import { useEffect, useState } from "react";

export default function usePost(pid) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [body, setBody] = useState("");
    const [src, setSrc] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (!pid)
            return;

        fetch(`/api/posts/${pid}`)
            .then(res => res.json())
            .then(post => {
                setName(post.name);
                setDate(post.date);
                setBody(post.body);
                setSrc(post.src);
                setDate(post.date);
            });
    }, [pid]);

    return { name, date, body, src, category };
}