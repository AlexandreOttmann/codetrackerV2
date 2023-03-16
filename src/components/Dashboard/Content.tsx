import React from 'react';
import GlobalStatsGithub from './Elements/GlobalStatsGithub';
import { Search } from './Elements/Search';
import TableCommits from './Elements/TableCommits';
import RadialBar from './Elements/GlobalChartMood';

const Content = () => {
  return (
    <div className='z-2   p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)]   '>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg '>
        <div className='flex flex-col sm:grid grid-cols-1 gap-4 mb-4'>
          <Search />
        </div>

        <div className='md:grid grid-cols-2 gap-4 mb-4'>
          <div className='flex items-center justify-center h-56 mb-4 rounded bg-gray-50 '>
            <RadialBar />
          </div>
          <div className='flex items-center justify-center h-56 mb-4 rounded bg-gray-50 '>
            <GlobalStatsGithub />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <TableCommits />
        </div>
      </div>
    </div>
  );
};

export default Content;
