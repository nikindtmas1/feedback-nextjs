import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Layout from "../../../components/layout";


export async function getServerSideProps() {
    const responce = await fetch("http://localhost:5000/peshofeedbacks");
    const jsonData = await responce.json();

    const allPeshoData = Object.values(jsonData);
  
    return {
        props: {
            allPeshoData,
        },
    }
}

export default function PostOne({allPeshoData}) {
    return (
        <>
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

      <Layout>
                <h2>
                    <Link href='/'>← Back to home</Link>
                </h2>
      </Layout>
      </main>

      
   
        </>
    )
}