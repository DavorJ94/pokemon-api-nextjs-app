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
      <div>{pokemon.name}</div>
      <div>Abilities: </div>
      {pokemon.abilities.map((ability, index) => {
        if (index < pokemon.abilities.length - 1)
          return <span key={`ability-${index}`}>{ability.ability.name}, </span>;
        else
          return <span key={`ability-${index}`}>{ability.ability.name}. </span>;
      })}
      <div>Height: {pokemon.height}</div>
      <div>
        {pokemon.moves.length >= 10
          ? "First 10 moves: "
          : `Its ${pokemon.moves.length} moves: `}
        {pokemon.moves.map((move, index) => {
          if (index < pokemon.moves.length - 1)
            return <span key={`move-${index}`}>{move.move.name}, </span>;
          else if (index === 9 || index === pokemon.moves.length - 1)
            return <span key={`move-${index}`}>{move.move.name}. </span>;
          else return;
        })}
      </div>
      <img alt="Pokemon img" src={pokemon.sprites.front_shiny}></img>
      <div>
        Status:
        {pokemon.stats.map((status, index) => {
          return (
            <div key={`stats-${index}`}>
              {status.stat.name}: <span> {status.base_stat}</span>
            </div>
          );
        })}
      </div>
      <div>
        Types:
        {pokemon.types.map((type, index) => {
          if (index < pokemon.types.length - 1)
            return <span key={`types-${index}`}> {type.type.name},</span>;
          else return <span key={`types-${index}`}> {type.type.name}.</span>;
        })}
      </div>
      <div>Weight: {pokemon.weight}</div>
    </div>
  );
};

export default AboutPokemon;
