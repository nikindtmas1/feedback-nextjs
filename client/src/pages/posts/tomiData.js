import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";

export async function getServerSideProps() {
    const tomiData = await fetch('http://localhost:5000/tomifeedbacks');
    const jsonData = await tomiData.json();

    const allTomiData = Object.values(jsonData);

    return {
        props: {
            allTomiData,
        },
    }
};

export default function TomiPosts({allTomiData}) {

  return (
    <>
      <Head>
        <title>Tomi Page</title>
      </Head>
      <h2>This is Tomi Data Page</h2>
      <main>
        <div></div>
        <Layout>
          <h2>
            <Link href="/">← Back to home</Link>
          </h2>
        </Layout>
      </main>
    </>
  );
}
