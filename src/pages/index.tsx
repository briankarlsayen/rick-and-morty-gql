import * as React from 'react';
import { useQuery, gql } from '@apollo/client';
import mock from '../api/mock';
import HomeScreen from './HomeScreen';
import CharacterList from './CharacterList';
import { redirect, useNavigate } from 'react-router-dom';

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
  const [keyword, setKeyword] = React.useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
    navigate(`/search?keyword=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <HomeScreen
        keyword={keyword}
        setKeyword={setKeyword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Main;
