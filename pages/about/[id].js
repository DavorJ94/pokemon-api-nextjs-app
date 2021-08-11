import styles from "../../styles/id.module.css";
import Image from "next/image";

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/DavorJ94/2f07667b4260a3c179005eb42be92f6f/raw/5124650c1ac780e2b7de1391fe228c65b339bcc8/pokemon-data.json"
  );
  const result = await response.json();

  const paths = result.map((pokemon) => {
    return {
      params: {
        id: pokemon.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const data = await result.json();

  return {
    props: { pokemon: data },
  };
};

const AboutPokemon = ({ pokemon }) => {
  return (
    <div key={pokemon.id} style={{ textAlign: "center" }}>
      <Image
        width={96}
        height={96}
        alt="Pokemon img"
        src={pokemon.sprites.front_shiny}
        className={styles.pokemonImg}
      ></Image>
      <div className={styles.pokemonName}>{pokemon.name}</div>
      <div className={styles.leftSide}>Abilities: </div>
      {pokemon.abilities.map((ability, index) => {
        if (index < pokemon.abilities.length - 1)
          return (
            <span className={styles.abilities} key={`ability-${index}`}>
              {ability.ability.name},{" "}
            </span>
          );
        else
          return (
            <span className={styles.abilities} key={`ability-${index}`}>
              {ability.ability.name}.{" "}
            </span>
          );
      })}
      <div className={styles.heightWeight}>
        Height: <span className={styles.abilities}>{pokemon.height}</span>
      </div>
      <div className={styles.heightWeight}>
        Weight: <span className={styles.abilities}>{pokemon.weight}</span>
      </div>
      <div
        className={styles.heightWeight}
        style={{ width: "80%", margin: "0 auto" }}
      >
        {pokemon.moves.length >= 10
          ? "First 10 moves: "
          : `Its ${pokemon.moves.length} moves: `}
        {pokemon.moves.map((move, index) => {
          if (index < 9)
            return (
              <span className={styles.abilities} key={`move-${index}`}>
                {move.move.name},{" "}
              </span>
            );
          else if (index === 9 || index === pokemon.moves.length - 1)
            return (
              <span className={styles.abilities} key={`move-${index}`}>
                {move.move.name}.{" "}
              </span>
            );
          else return;
        })}
      </div>
      <div>
        {pokemon.stats.map((status, index) => {
          return (
            <div key={`stats-${index}`} className={styles.heightWeight}>
              {status.stat.name}:{" "}
              <span className={styles.abilities}> {status.base_stat}</span>
            </div>
          );
        })}
      </div>
      <div>
        <span className={styles.heightWeight}>Types:</span>
        {pokemon.types.map((type, index) => {
          if (index < pokemon.types.length - 1)
            return (
              <span className={styles.abilities} key={`types-${index}`}>
                {" "}
                {type.type.name},
              </span>
            );
          else
            return (
              <span className={styles.abilities} key={`types-${index}`}>
                {" "}
                {type.type.name}.
              </span>
            );
        })}
      </div>
    </div>
  );
};

export default AboutPokemon;
