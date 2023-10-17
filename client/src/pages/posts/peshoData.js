import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Layout from "../../../components/layout";
import { PeshoFeedback } from "../../../components/PeshoFeedback";

export async function getServerSideProps() {
  try {
    const responce = await fetch("http://localhost:5000/peshofeedbacks");
    const jsonData = await responce.json();

    const allPeshoData = Object.values(jsonData);
  
    return {
        props: {
            allPeshoData,
        },
    }
  } catch (error) {
    // Handle errors if the API request fails
    console.error("Error sending data:", error);
    throw error; // Rethrow the error to be handled elsewhere, if necessary
  }
    
}

export default function PostOne({allPeshoData}) {
    return (
        <>
        <Head>
            <title>Pesho Post</title>
        </Head>
        
          <h2>
            This is Pesho Data Page
          </h2>
        <PeshoFeedback/>
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