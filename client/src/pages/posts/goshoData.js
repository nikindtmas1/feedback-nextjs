import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";

export async function getServerSideProps() {
  const goshoData = await fetch('http://localhost:5000/goshofeedbacks');
  const jsonData = await goshoData.json();

  const allGoshoData = Object.values(jsonData);

  return {
    props: {
        allGoshoData,
    },
  }
};

export default function GoshoPosts({allGoshoData}) {
    return (
        <>
            <Head>
                <title>
                    This is Gosho Data Page
                </title>
            </Head>

        <Layout>
            <h2>
            <Link href='/'>← Back to home</Link>
            </h2>
        </Layout>

        </>
    );
}