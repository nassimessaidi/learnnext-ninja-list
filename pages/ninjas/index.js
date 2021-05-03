import Head from "next/head";
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
        <div key={ninja.id} className="">
          <a className={styles.single}>
            <h4>{ninja.name}</h4>
          </a>
        </div>
      ))}
    </>
  );
};

export default Home;
