import usePost from "@hooks/post";

export default function PostHolder({ pid }) {
    const { name, date, body } = usePost(pid);

    if (!pid)
        return <div></div>;

    return (
        <div>
            <div>{name} - {date}</div>
            <div>{body}</div>
        </div>
    );
}
