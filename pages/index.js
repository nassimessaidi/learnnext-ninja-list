import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sunt eos doloribus! Quod facilis voluptatum, non natus quae nulla
          culpa reiciendis, veritatis ut animi quibusdam alias pariatur
          dignissimos blanditiis consequatur?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          nisi fugiat, quod vitae obcaecati ex cupiditate illo eveniet ad
          commodi quas, ratione quasi. Quod quasi alias impedit itaque,
          aspernatur non?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
