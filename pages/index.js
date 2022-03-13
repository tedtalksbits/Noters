import Head from "next/head";
import Image from "next/image";
import Folder from "../components/Folder";
import Note from "../components/Note";
import styles from "../styles/Home.module.css";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <Folder id="new" />
         </main>
      </div>
   );
}
