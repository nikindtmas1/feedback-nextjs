import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Layout from "../../../components/layout";
import { getPeshoData } from "@/lib/post";

export default function PostOne() {
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href='/'>← Back to home</Link>
                </h2>
   
        </Layout>
    )
}