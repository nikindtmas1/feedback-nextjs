import Head from "next/head";
import Layout from "../../../components/layout";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export async function getServerSideProps() {
    const toshoData = await fetch('http://localhost:5000/toshofeedbacks');
    const jsonData = await toshoData.json();

    const allToshoData = Object.values(jsonData);

    return {
        props : {
            allToshoData,
        },
    }

};

export default function ToshoPosts({allToshoData}) {

  return (
    <>
      <Head>
        <title>Tosho Data</title>
      </Head>
      <h2>This is Tosho Data Page</h2>
      <div>
        <form>
          <label>Added Feedback</label>
          <input name="text" placeholder="Feedback"></input>
          <input name="rating" placeholder="Rating"></input>
        </form>
      </div>
      <main className={styles.main}>
        <div className={styles.description}>
            {allToshoData.map(({text, rating,peopleName,userName}) => (
                <div className={styles.card}>
                <div className={''}>
                   {rating}
                </div>
                    <div>
                      {text}
                    </div>
                 <div>
                   {peopleName}
                 </div>
                  <div>
                   {userName}
                  </div>
                 </div>
            ))}
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
