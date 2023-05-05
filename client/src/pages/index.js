import Head from 'next/head'
import Navigation from '@/navigation/Navigation'
import styles from '@/styles/Home.module.css'
import { getGoshoData } from '../lib/post';

export async function getStaticProps() {
  const strData = await getGoshoData();
 
  const allPostData = Object.values(strData);

  return {
    props: {
      allPostData,
    },
  };
}

// const inter = Inter({ subsets: ['latin'] })

export default function Home({allPostData}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Navigation />
      <main className={styles.main}>
        <div className={styles.description}>
      
          {allPostData.map(({text, rating,peopleName,userName}) => (
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
    </>
  )
}
