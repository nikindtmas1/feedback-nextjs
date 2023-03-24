import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function PostOne() {
    return (
        <>
        <h1>First Post</h1>
        <a>
            <Link href='/'>Back to home</Link>
        </a>
        </>
    )
}