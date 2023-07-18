import * as React from 'react';
import loadingCircle from '../assets/loadingCircle.gif';

interface ILoading {
  loading: boolean;
}

export default function Loading({ loading }: ILoading) {
  return (
    loading && (
      <div className='absolute flex justify-center items-center w-full h-full top-0'>
        <img
          className='w-[170px] h-[170px]'
          src={loadingCircle}
          alt='loading'
        />
      </div>
    )
  );
}
