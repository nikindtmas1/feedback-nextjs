import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Head from "next/head";

export default function PostOne() {
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>First Post</h1>
                <a>
                    <Link href='/'>← Back to home</Link>
                </a>
            </div>
        </main>
        </>
    )
}