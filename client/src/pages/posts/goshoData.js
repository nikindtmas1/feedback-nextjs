import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";
import styles from '../../styles/Home.module.css';

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
                    Gosho Data
                </title>
            </Head>
            <h2>
            This is Gosho Data Page
          </h2>

            <main className={styles.main}>
        <div className={styles.description}>
          {allGoshoData.map(({text, rating,peopleName,userName}) => (
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
                    <Link href='/'>← Back to home</Link>
                </h2>
      </Layout>
      </main>
        <Layout>
            <h2>
            <Link href='/'>← Back to home</Link>
            </h2>
        </Layout>

        </>
    );
}