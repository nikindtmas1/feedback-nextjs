import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function PostOne() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>First Post</h1>
                <a>
                    <Link href='/'>Back to home</Link>
                </a>
            </div>
        </main>
    )
}