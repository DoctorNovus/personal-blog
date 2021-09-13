import usePost from "@hooks/post";

export default function PostHolder({ pid }) {
    const { name, date, body } = usePost(pid);

    if (!pid)
        return <></>;

    return (
        <>
            <>{name} - {date}</>
            <>{body}</>
        </>
    );
}
