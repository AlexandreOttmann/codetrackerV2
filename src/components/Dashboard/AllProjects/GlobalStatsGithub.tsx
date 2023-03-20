import React, { useState, useEffect } from 'react';
import { technologiesFormater } from '../../../utils/technologiesFormater';
import { sortedDataEntries } from '../../../utils/sortedDataEntries';

const GlobalStatsGithub = ({ data }: any) => {
  const [listLanguages, setListLanguages] = useState<any>([]);
  const [sortedEntries, setSortedEntries] = useState<any>([]);

  useEffect(() => {
    setListLanguages(technologiesFormater(data));
    setSortedEntries(sortedDataEntries(listLanguages));
  }, [data]);

  return (
    <>
      <div className='w-1/2 text-center'>
        <div className='text-6xl font-bold text-white '>
          {data.length}
          <div className='text-2xl text-custom-gray font-normal'>projets</div>
        </div>
      </div>
      <div className='w-1/2 m-auto flex flex-col justify-center h-48 overflow-y-auto section '>
        <div>
          {sortedEntries.map(
            ([key, val]: any) =>
              key != 'null' && (
                <div key={key} className='text-start flex gap-2 items-center '>
                  <span className='font-semibold text-xl text-white '>{val}</span>
                  <span className='text-normal text-lg text-custom-gray font-normal'>{key}</span>
                </div>
              ),
          )}
        </div>
      </div>
    </>
  );
};

export default GlobalStatsGithub;
