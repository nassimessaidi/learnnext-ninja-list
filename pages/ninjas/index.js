import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Home = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Listing</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className={styles.title}>All Ninjas</h1>

      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h4>{ninja.name}</h4>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Home;
