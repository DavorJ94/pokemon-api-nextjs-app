import styles from "../styles/PokemonSnippet.module.css";
import Image from "next/image";
const Pokemon = ({ src, name }) => {
  return (
    <div className={styles.pokemonContainer}>
      <Image
        width={115.2}
        height={115.2}
        src={src}
        className={styles.pokemonImg}
      ></Image>
      <p className={styles.pokemonName}>{name}</p>
    </div>
  );
};

export default Pokemon;
