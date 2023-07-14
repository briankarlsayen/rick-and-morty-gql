import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Main from './pages';

function App() {
  const baseUrl = 'https://rickandmortyapi.com/graphql';
  const client = new ApolloClient({
    uri: baseUrl,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
