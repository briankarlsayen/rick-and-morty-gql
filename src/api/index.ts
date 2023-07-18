import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Define your GraphQL endpoint URIs
const endpointA = 'https://rickandmortyapi.com/graphql';
const endpointB = 'https://rickandmortyapi.com/graphql';

// Create multiple Apollo Clients for each endpoint
const clientA = new ApolloClient({
  uri: endpointA,
  cache: new InMemoryCache(),
});

const clientB = new ApolloClient({
  uri: endpointB,
  cache: new InMemoryCache(),
});

const queryA = gql`
  query {
    // Your query for endpoint A
  }
`;

const queryB = gql`
  query {
    // Your query for endpoint B
  }
`;

// Determine the target URI dynamically
const decideTargetURI = (operation: string) => {
  return operation === 'characters' ? clientA : clientB;
};

// Send requests to the appropriate URI
export const sendRequest = async ({ operation, query, variables }: any) => {
  try {
    const client = decideTargetURI(operation);
    const { data } = await client.query({
      query,
      variables,
    });

    // Handle and merge results if needed

    return data;
  } catch (error) {
    // Handle errors
    console.error(error);
    throw error;
  }
};
