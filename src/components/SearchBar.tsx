import * as React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ value, onChange, onSubmit, ...rest }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // alert('submit');
    return value;
  };
  return (
    <form onSubmit={onSubmit} className='relative mt-1'>
      <input
        type='text'
        id='password'
        className='w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors'
        placeholder='Search...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type='submit'
        className='block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors'
      >
        <FaSearch />
      </button>
    </form>
  );
}
