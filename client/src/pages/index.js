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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <label for="people">Choose a Therapiest: </label>
      <table>
        <tr>
          <td>
            <select id="people">
              <option value="">Choose...</option>
              <option value="gosho">Gosho</option>
              <option value="tosho">Tosho</option>
              <option value="pesho">Pesho</option>
              <option value="tomi">Tomi</option>
            </select>
          </td>
          <td>
            <select id="people">
              <option value="">...</option>
              {people.map((x) => (
                <option value={x.name}>{x.name}</option>
              ))}
            </select>
          </td>
          <td>
            <select id="people">
              <option value="">...</option>
              {people.map((x) => (
                <option value={x.name}>{x.name}</option>
              ))}
            </select>
          </td>
          <td>
            <select id="people">
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
