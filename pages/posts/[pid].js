import { useRouter } from 'next/router';
import PostHolder from "../../components/PostHolder";

export default function PID() {
    const router = useRouter();

    const { pid } = router.query;

    return <PostHolder pid={pid}></PostHolder>
}