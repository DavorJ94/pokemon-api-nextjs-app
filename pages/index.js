import Head from "next/head";
import Link from "next/link";
import Pokemon from "../components/PokemonSnippet";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/DavorJ94/2f07667b4260a3c179005eb42be92f6f/raw/5124650c1ac780e2b7de1391fe228c65b339bcc8/pokemon-data.json"
  );
  const data = await res.json();
  return {
    props: { pokemons: data },
  };
};

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>Pokemon | Home</title>
        <meta
          name="description"
          content="Pokemon API Next.js app created with React"
        ></meta>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Next.js"
        ></meta>
        <meta name="author" content="Davor Jovanovic"></meta>
      </Head>
      <div>
        <div className={styles.container}>
          {pokemons.map((pokemon) => {
            return (
              <Link href={`/about/${pokemon.id}`} key={pokemon.id}>
                <a>
                  <Pokemon name={pokemon.name} src={pokemon.sprite} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
