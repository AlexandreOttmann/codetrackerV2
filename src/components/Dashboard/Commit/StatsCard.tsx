import React from 'react';

export const StatsCard = ({ data }: any) => {
  return (
    <>
      <div className='flex justify-around items-center h-56 mb-4 rounded bg-gray-50 shadow border-t-8 border-amber-500'>
        <div className='flex flex-col items-center'>
          <p className='text-6xl font-bold text-zinc-700 '>{data.stats.additions}</p>
          <p className='text-2xl text-zinc-600 font-normal'>Additions</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-6xl font-bold text-zinc-700 '>{data.stats.deletions}</p>
          <p className='text-2xl text-zinc-600 font-normal'>Deletions</p>
        </div>

        <div className='flex flex-col items-center'>
          <p className='text-6xl font-bold text-zinc-700 '>{data.stats.total}</p>
          <p className='text-2xl text-zinc-600 font-normal'>Total</p>
        </div>
      </div>
    </>
  );
};
