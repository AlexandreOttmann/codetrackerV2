import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dateConverter } from '../../../utils/dateFormater';
import { limitCharFormater } from '../../../utils/limitCharFormater';

const TableProjects = ({ data }: any) => {
  const [inputValue, setInputValue] = useState('');
  const [dataFiltered, setDataFiltered] = useState<any>([]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
    getDataFromSearch();
  };

  const getDataFromSearch = () => {
    const filteredData = data.filter((item: any) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setDataFiltered(filteredData);
    console.log(filteredData);
  };

  useEffect(() => {
    getDataFromSearch();
  }, [inputValue]);

  return (
    <>
      {' '}
      <div className='container mx-auto h-max'>
        <div className='py-4'>
          <div className='border-b mb-4'>
            <h2 className='text-2xl text-gray-600 p-4 font-semibold tracking-wide'>Projets Github</h2>
          </div>
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
                onChange={handleChange}
                className='block w-full mb-3 p-4 pl-10 text-sm text-gray-900 border-gray-100 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow'
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

          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded border-t-8 border-t-indigo-500 overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Projets</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Language principal</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Description</th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Dernier Update</th>
                  </tr>
                </thead>
                <tbody>
                  {dataFiltered.length > 0 && inputValue.length > 0
                    ? dataFiltered
                        .sort((a: any, b: any) => {
                          return b.id - a.id;
                        })
                        .map((item: any) => (
                          <tr key={item.id}>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5'>
                              <div className='flex items-center'>
                                <div className=' ml-0 sm:ml-3'>
                                  <Link to={`/dashboard/${item.id}`} state={{ name: item.name }}>
                                    <div className='flex gap-2   md:justify-center  sm:items-center font-semibold'>
                                      <img src={item.owner.avatar_url} alt='avatar' className='hidden md:block w-10 h-10 rounded-full' />
                                      <span className='text-gray-900 whitespace-no-wrap'>
                                        {item.name}
                                        <span className='text-xs text-orange-300'>{item.fork ? `\n🔱[Forked]` : null}</span>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap text-center'>{item.language != null ? item.language : 'Markdown et ressources'}</p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap text-center'>{item.description != undefined ? limitCharFormater(item.description) : 'Aucune Description'}</p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap text-center'>{dateConverter(item.updated_at)}</p>
                            </td>
                          </tr>
                        ))
                    : data
                        .sort((a: any, b: any) => {
                          return b.id - a.id;
                        })
                        .map((item: any) => (
                          <tr key={item.id}>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5'>
                              <div className='flex items-center'>
                                <div className='ml-0 sm:ml-3'>
                                  <Link to={`/dashboard/${item.id}`} state={{ name: item.name }}>
                                    <div className='flex gap-2 justify-start md:justify-center items-center font-semibold'>
                                      <img src={item.owner.avatar_url} alt='avatar' className='hidden md:block w-10 h-10 rounded-full' />
                                      <span className='text-gray-900 whitespace-no-wrap'>
                                        {item.name}
                                        <span className='text-xs text-orange-300'>{item.fork ? `\n🔱[Forked]` : null}</span>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap text-center'>{item.language != null ? item.language : 'Markdown et ressources'}</p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap text-center'>{item.description != undefined ? limitCharFormater(item.description) : 'Aucune Description'}</p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap text-center'>{dateConverter(item.updated_at)}</p>
                            </td>
                          </tr>
                        ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableProjects;
