import Head from "next/head";
import Layout from "../../../components/layout";

export default async function ToshoPosts({}) {
    return (
        <>
            <Head>
                <title>
                    Tosho Data
                </title>
            </Head>
            <h2>
                This Tosho Data Page
            </h2>

            <main>
                <Layout>
                <h2>
                    <Link href='/'>← Back to home</Link>
                </h2>
                </Layout>
            </main>
        </>
    )
};