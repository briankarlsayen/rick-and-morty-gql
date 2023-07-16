import * as React from 'react';
import SearchBar from '../../components/SearchBar';

export default function HomeScreen({ keyword, setKeyword, handleSubmit }: any) {
  return (
    <div className='flex h-screen w-screen items-center justify-center flex-col'>
      <h2>Rick and Morty Characters</h2>
      <div>
        <SearchBar
          value={keyword}
          onChange={(e: any) => {
            console.log('e', e);
            setKeyword(e);
          }}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
