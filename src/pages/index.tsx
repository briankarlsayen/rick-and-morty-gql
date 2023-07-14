import { useQuery, gql } from '@apollo/client';

const GET_CHAR = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Main = () => {
  const { error, loading, data } = useQuery(GET_CHAR);
  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  return (
    <div>
      {loading ? (
        'Loading'
      ) : (
        <div>
          <h2>Rick and Morty Characters</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {data.characters.results.map((character: any) => (
              <CharacterCard {...character} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CharacterCard = (character: any) => {
  return (
    <div>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Main;
