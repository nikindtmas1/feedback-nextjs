import Head from "next/head";
import Layout from "../../../components/layout";

export default function TomiPosts() {
  return (
    <>
      <Head>
        <title>Tomi Page</title>
      </Head>
      <h2>This is Tomi Page</h2>
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
