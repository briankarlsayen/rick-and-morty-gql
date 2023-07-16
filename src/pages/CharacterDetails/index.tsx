import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ICharacter } from '../../types';
import mock from '../../api/mock';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER, GET_CHARACTERS } from '../../api/queries';

const character = {
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
  name: 'Aqua Morty',
  species: 'Humanoid',
  status: 'unknown',
  type: 'Fish-Person',
};

export default function CharacterDetails() {
  let { id } = useParams();
  const mockData = mock;

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  // const character = data?.character;

  console.log('data', data);

  return (
    <div className='flex  w-full justify-center pt-20'>
      <div className='flex max-w-xl w-full justify-between'>
        <div id='char-details-left'>
          <img className='shadow-lg rounded-md' src={character?.image} />
          {/* <h4>{character?.name}</h4> */}
        </div>
        <div id='char-details-right'>
          <h2>General Information</h2>
          <ul className='pt-4'>
            <li>
              <label>Name: </label>
              <span>{character?.name}</span>
            </li>
            <li>
              <label>Species: </label>
              <span>{character?.species}</span>
            </li>
            <li>
              <label>Type: </label>
              <span>{character?.type}</span>
            </li>
            <li>
              <label>Gender: </label>
              <span>{character?.gender}</span>
            </li>
            <li>
              <label>Status: </label>
              <span>{character?.status}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
