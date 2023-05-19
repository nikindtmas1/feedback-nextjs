import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Layout from "../../../components/layout";
import { getPeshoData } from "../../lib/post";

export async function getServerSideProps() {
    const strData = getPeshoData();

    const allPeshoData = Object.values(strData);
    console.log('allData', allPeshoData);
    return {
        props: {
            allPeshoData,
        },
    }
}

export default function PostOne({allPeshoData}) {
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <main className={styles.main}>
        <div className={styles.description}>
      
          {allPeshoData.map(({text, rating,peopleName,userName}) => (
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
      </main>
                <h2>
                    <Link href='/'>← Back to home</Link>
                </h2>
   
        </Layout>
    )
}