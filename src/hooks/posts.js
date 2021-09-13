import { useEffect, useState } from "react";

export default function usePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`/api/posts`)
            .then(res => res.json())
            .then((data) => {
                setPosts(data.files);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return posts;
}