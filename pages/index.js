import Head from "next/head";
import Folder from "../components/Folder";
import styles from "../styles/Home.module.css";
import Add from "../components/Add";
import Nav from "../components/Nav";
import ResonsiveWrapper from "../components/Wrapper/ResonsiveWrapper";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
