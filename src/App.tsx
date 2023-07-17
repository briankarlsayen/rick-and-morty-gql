import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Main from './pages';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/search',
    element: <CharacterList />,
  },
  {
    path: '/character/:id',
    element: <CharacterDetails />,
  },
]);

function App() {
  const baseUrl = 'https://rickandmortyapi.com/graphql';
  const client = new ApolloClient({
    uri: baseUrl,
    cache: new InMemoryCache(),
  });
  return (
    <div data-theme='dark'>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </div>
  );
}

export default App;
