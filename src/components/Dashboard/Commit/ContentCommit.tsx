import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/Context';
import { useLocation } from 'react-router';
import { BackButton } from '../../Layout/Elements/BackButton';
import { dateConverter } from '../../../utils/dateFormater';

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
    <div className='z-2 p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)] '>
      <div className='p-4 shadow-xl rounded-lg bg-[#ffffff90] '>
        <BackButton />
        {!isLoading && (
          <>
            <div className='flex flex-col py-5'>
              <h1 className='text-gray-900 font-bold py-2'>
                {data.commit.message} - {data.sha}
              </h1>
              <div className='flex item-center gap-2'>
                Auteur : <img src={data.author.avatar_url} alt='avatar' className='w-5 h-5 rounded-full' /> {data.commit.author.name[0].toUpperCase() + data.commit.author.name.slice(1)} - (
                {data.author.login})
              </div>
              <div>Date : {dateConverter(data.commit.author.date)}</div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <h2>Statistiques</h2>
                <p className='text-gray-600 font-semibold'>Additions</p>
                <p className='text-gray-900'>{data.stats.additions}</p>

                <p className='text-gray-600 font-semibold'>Deletions</p>
                <p className='text-gray-900'>{data.stats.deletions}</p>

                <p className='text-gray-600 font-semibold'>Total</p>
                <p className='text-gray-900'>{data.stats.total}</p>
              </div>
              <div className='inline-block min-w-full shadow rounded border-t-8 border-t-indigo-500 overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Filename</th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Status</th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Additions</th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Deletions</th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.files.map((file: any) => (
                      <tr key={data.files.sha}>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{file.filename}</td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{file.status}</td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-green-500'>+{file.additions}</td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-red-500'>-{file.deletions}</td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm font-semibold'>{file.changes}</td>
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
