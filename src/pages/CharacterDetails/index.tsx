import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mock from '../../api/mock';
import { FaCaretLeft } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../api/queries';

// const character = {
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
//   name: 'Aqua Morty',
//   species: 'Humanoid',
//   status: 'unknown',
//   type: 'Fish-Person',
// };

export default function CharacterDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  const handleBack = () => {
    navigate(-1);
  };

  const character = data?.character;

  return (
    <div>
      <button className='btn w-20 h-20 loading loading-spinner loading-xs '>
        a
      </button>
      <Nav handleBack={handleBack} />
      <div className='flex w-full justify-center pt-20 '>
        <div className='flex max-w-2xl w-full justify-between shadow-xl p-4'>
          <div id='char-details-left'>
            <img className='shadow-lg rounded-md' src={character?.image} />
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
                <span className='badge badge-info'>{character?.species}</span>
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
    </div>
  );
}

const Nav = ({ handleBack }: any) => {
  return (
    <nav className='p-4'>
      <button className='btn btn-info' onClick={handleBack}>
        <span>
          <FaCaretLeft />
        </span>
        Back
      </button>
    </nav>
  );
};
