import React, { useState } from 'react';

export const Search = () => {
  const [message, setMessage] = useState('');
  const handleChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <form>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg aria-hidden='true' className='w-5 h-5 text-gray-500 ' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </div>
        <input
          type='text'
          id='default-search'
          value={message}
          onChange={handleChange}
          className='block w-full p-4 pl-10 text-sm text-gray-900 border-gray-100 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow'
          placeholder='Rechercher un projet github...'
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 '
        >
          Rechercher
        </button>
      </div>
    </form>
  );
};
