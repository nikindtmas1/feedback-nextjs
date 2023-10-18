import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import { TomiFeedback } from "../../../components/TomiFeedback";


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
      <div className={styles.newfeedback}>
        <h2>This is Tomi Data Page</h2>
      </div>
      <TomiFeedback />
      <main className={styles.main}>
        <div className={styles.description}>
            {allTomiData.map(({text, rating,peopleName,userName}) => (
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
