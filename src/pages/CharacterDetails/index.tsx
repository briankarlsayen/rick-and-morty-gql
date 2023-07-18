import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mock from '../../api/mock';
import { FaCaretLeft } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../api/queries';
import Loading from '../../components/Loading';
// const character = {
//   name: 'Black Rick',
//   status: 'Alive',
//   species: 'Human',
//   type: '',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/48.jpeg',
//   location: {
//     name: 'Citadel of Ricks',
//   },
//   episode: [
//     {
//       id: '22',
//       name: 'The Rickshank Rickdemption',
//       air_date: 'April 1, 2017',
//       episode: 'S03E01',
//     },
//     {
//       id: '28',
//       name: 'The Ricklantis Mixup',
//       air_date: 'September 10, 2017',
//       episode: 'S03E07',
//     },
//   ],
// };

export default function CharacterDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  // const loading = true;

  const handleBack = () => {
    navigate(-1);
  };

  const character = data?.character;
  console.log('character', character);

  return (
    <div className='min-h-screen h-full'>
      <Nav handleBack={handleBack} />
      <h2 className='text-4xl text-center'>{character?.name}</h2>
      {!loading && (
        <div className='flex w-full justify-center pt-20'>
          <div className='flex max-w-4xl w-full gap-4 md:flex-row flex-col'>
            <div
              id='char-details-left'
              className='md:shadow-xl shadow-none p-8 rounded-md md:m-0 m-auto h-fit'
            >
              <img
                className='rounded-md min-w-[300px]'
                src={character?.image}
              />
            </div>
            <div
              id='char-details-right'
              className='shadow-xl p-8 rounded-md w-full'
            >
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
                <li>
                  <label>Last seen: </label>
                  <span>{character?.location?.name}</span>
                </li>
                <li>
                  <label>Episodes: </label>

                  <div className='flex flex-col text-right'>
                    {character?.episode.map((ep: any) => (
                      <span key={ep.id}>
                        {ep.name}({ep.episode})
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <Loading loading={loading} />
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
