import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { BackButton } from '../../Layout/Elements/BackButton';
import { StatsCard } from './StatsCard';
import { AuthorInfos } from './AuthorInfos';

const ContentCommit = () => {
 const [data, setData] = useState<any>([]);
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const location = useLocation();
 const urlOfCommit = location.state.url;

 const getData = async () => {
  try {
   const response = await fetch(`${urlOfCommit}`);
   const data = await response.json();
   setData(data);
   setIsLoading(false);
  } catch (error) {
   console.log(error);
  }
 };
 useEffect(() => {
  getData();
 }, []);

 console.log('CommitDATA', data);

 return (
  <div className="z-2 p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)] ">
   <div className="p-4 shadow-xl rounded-lg bg-[#ffffff90] ">
    <BackButton />
    {!isLoading && (
     <>
      <h1 className="text-gray-900 font-bold py-2">
       {data.commit.message} - {data.sha}
      </h1>
      <div className="flex flex-col gap-2">
       <div className="flex flex-col items-center  lg:flex-row lg:justify-between gap-5">
        <div className="flex flex-col w-full lg:w-1/2 ">
         <div className="border-b mb-4">
          <h2 className="text-2xl text-custom-dark p-4 font-semibold tracking-wide">
           Auteur & infos
          </h2>
         </div>
         <AuthorInfos data={data} />
        </div>

        <div className="  w-full lg:w-1/2 ">
         <div className="border-b mb-4">
          <h2 className="text-2xl text-custom-dark p-4 font-semibold tracking-wide">
           Statistiques
          </h2>
         </div>
         <StatsCard data={data} />
        </div>
       </div>
       <div className="inline-block min-w-full shadow rounded overflow-hidden">
        <table className="min-w-full leading-normal">
         <thead>
          <tr>
           <th className="px-5 py-3 border-b-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Filename
           </th>
           <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Status
           </th>
           <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Additions
           </th>
           <th className="px-5 py-3 border-b-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Deletions
           </th>
           <th className="px-5 py-3 border-b-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Changes
           </th>
          </tr>
         </thead>
         <tbody>
          {data.files.map((file: any) => (
           <tr key={data.files.sha}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {file.filename}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             {file.status}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-green-500">
             +{file.additions}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-red-500">
             -{file.deletions}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-semibold">
             {file.changes}
            </td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>
      </div>
     </>
    )}
   </div>
  </div>
 );
};

export default ContentCommit;
