import React, { useState, useEffect } from 'react';
import GlobalStatsGithub from './GlobalStatsGithub';
import { Search } from '../Search';
import TableProjects from './TableProjects';
import RadialBar from './GlobalChartMood';
import { useAuth } from '../../../context/Context';

export const Content = () => {
  const [data, setData] = useState<any>([]);
  const user: any = useAuth();
  const { auth } = user;
  const getData = async () => {
    try {
      const uid = auth.githubId;
      const response = await fetch(`https://api.github.com/user/${uid}/repos?per_page=50`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('PROJECT', data);

  return (
    <div className='z-2 p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)] '>
      <div className='p-4 shadow-xl rounded-lg bg-[#ffffff90] '>
        <h1 className='text-3xl text-custom-dark font-bold p-4'>Mon dashboard</h1>
        {/* <div className='flex flex-col sm:grid grid-cols-1 gap-4 mb-4'>
          <Search />
        </div> */}

        <div className='md:grid grid-cols-2 gap-4'>
          <div>
            <div>
              <h2 className='text-2xl text-custom-dark p-4 font-semibold tracking-wide'>Stacks</h2>
            </div>
            <div className='flex items-center justify-center h-56 mb-4 rounded-xl bg-custom-purple'>
              <RadialBar data={data} />
            </div>
          </div>

          <div>
            <div>
              <h2 className='text-2xl text-custom-dark p-4 font-semibold tracking-wide'>Stats & Projects</h2>
            </div>
            <div className='flex items-center justify-center h-56 mb-4 rounded-xl bg-custom-dark'>
              <GlobalStatsGithub data={data} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mb-2'>
          <TableProjects data={data} />
        </div>
      </div>
    </div>
  );
};
