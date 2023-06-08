import Head from "next/head";
import Layout from "../../../components/layout";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function ToshoPosts({}) {
  return (
    <>
      <Head>
        <title>Tosho Data</title>
      </Head>
      <h2>This is Tosho Data Page</h2>

      <main className={styles.main}>
        <div className={styles.description}>

        </div>
        <Layout>
          <h2>
            <Link href="/">← Back to home</Link>
          </h2>
        </Layout>
      </main>
    </>
  );
}
