import React, { useState, useEffect } from 'react';
import GlobalStatsGithub from './AllProjects/GlobalStatsGithub';
import { Search } from './AllProjects/Search';
import TableCommits from './AllProjects/TableCommits';
import RadialBar from './AllProjects/GlobalChartMood';

const Content = () => {
 const [data, setData] = useState<any>([]);

 const getData = async () => {
  const response = await fetch(
   `https://api.github.com/users/alexandreottmann/repos?per_page=50`
  );
  const data = await response.json();
  setData(data);
 };

 useEffect(() => {
  getData();
 }, []);

 console.log(data);

 return (
  <div className="z-2 p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)] ">
   <div className="p-4 shadow-xl rounded-lg bg-[#ffffff90] ">
    <div className="flex flex-col sm:grid grid-cols-1 gap-4 mb-4">
     <Search />
    </div>

    <div className="md:grid grid-cols-2 gap-4">
     <div>
      <div className="border-b mb-4">
       <h2 className="text-2xl text-gray-600 p-4 font-semibold tracking-wide">
        Stacks
       </h2>
      </div>
      <div className="flex items-center justify-center h-56 mb-4 rounded bg-gray-50 shadow border-t-8 border-teal-500">
       <RadialBar data={data} />
      </div>
     </div>

     <div>
      <div className="border-b mb-4">
       <h2 className="text-2xl text-gray-600 p-4 font-semibold tracking-wide">
        Stats & Projects
       </h2>
      </div>
      <div className="flex items-center justify-center h-56 mb-4 rounded bg-gray-50 shadow border-t-8 border-amber-500">
       <GlobalStatsGithub data={data} />
      </div>
     </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mb-2">
     <TableCommits data={data} />
    </div>
   </div>
  </div>
 );
};

export default Content;
