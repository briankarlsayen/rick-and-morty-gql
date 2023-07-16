import * as React from 'react';
import CharacterCard from '../../components/CharacterCard';
import { useNavigate, useLocation } from 'react-router-dom';
import { GET_CHARACTERS } from '../../api/queries';
import { useQuery } from '@apollo/client';

export default function CharacterList() {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filters = {
    page: Number(queryParams.get('page')) ?? 1,
    keyword: queryParams.get('keyword') ?? '',
  };

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: filters.keyword, page: filters.page },
  });
  const charList = data?.characters?.results;

  const handleViewInfo = (id: any) => {
    navigate(`/character/${id}`);
  };
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {!loading && charList?.length
        ? charList.map((character: any) => (
            <CharacterCard
              key={character.id}
              onClick={handleViewInfo}
              {...character}
            />
          ))
        : null}
    </div>
  );
}
