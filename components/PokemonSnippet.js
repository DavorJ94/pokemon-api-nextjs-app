import styles from "../styles/PokemonSnippet.module.css";

const Pokemon = ({ src, name }) => {
  return (
    <div className={styles.pokemonContainer}>
      <img src={src} className={styles.pokemonImg}></img>
      <p className={styles.pokemonName}>{name}</p>
    </div>
  );
};

export default Pokemon;
