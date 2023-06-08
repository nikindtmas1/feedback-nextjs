import Head from "next/head";
import Navigation from "@/navigation/Navigation";
import styles from "@/styles/Home.module.css";
import { getFeedbacksData } from "../lib/post";
import { people } from "@/lib/peoples";



export async function getStaticProps() {
  const strData = await getFeedbacksData();

  const allGoshoData = Object.values(strData);

  return {
    props: {
      allGoshoData,
    },
  };
}

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ allGoshoData }) {

  function getValue() {

    const e = document.getElementById('people');
    const value = e.value;
    
    value === 'Gosho' ? window.location.href='/posts/goshoData' : 
    value === 'Tosho' ? window.location.href='/posts/toshoData' :
    value === 'Pesho' ? window.location.href='/posts/peshoData' :
    value === 'Tomi' ? window.location.href='/posts/tomiData' : null
  }
    


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navigation /> */}
      <table>
        <tr>
      <label for="people">Choose a Therapiest: </label>
          {/* <td>
            <select >
              <option value="">Choose...</option>
              <option value="gosho">Gosho</option>
              <option value="tosho">Tosho</option>
              <option value="pesho">Pesho</option>
              <option value="tomi">Tomi</option>
            </select>
          </td> */}
     
          <td>
            <select id="people" onChange={getValue}>
              <option value="">...</option>
              {people.map((x) => (
                <option value={x.name}>{x.name}</option>
              ))}
            </select>
          </td>
         
          
        </tr>
      </table>

      <main className={styles.main}>
        <div className={styles.description}>
          {allGoshoData.map(({ text, rating, peopleName, userName }) => (
            <div className={styles.card}>
              <div className={""}>{rating}</div>
              <div>{text}</div>
              <div>{peopleName}</div>
              <div>{userName}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
