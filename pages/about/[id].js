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
  return <div>{pokemon.name}</div>;
};

export default AboutPokemon;
