import Image from "next/image";
import Link from "next/link";

export default function NavigationBar({ title = { src: "", title: "" }, links = [] }) {
    return (
        <>
            <div>{(title && title.src) ? (<Image src={title.src || ""} alt={title.text} />) : ""}</div>
            <div>
                {
                    links.map((link, index) =>
                        <Link key={index} href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    )
                }
            </div>
        </>
    );
}