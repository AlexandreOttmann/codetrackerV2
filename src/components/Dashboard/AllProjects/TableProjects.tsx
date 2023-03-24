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
   <div className="container mx-auto h-max">
    <div className="py-4">
     <div>
      <h2 className="text-2xl text-custom-dark p-4 font-semibold tracking-wide">
       Projets Github
      </h2>
     </div>
     <form>
      <div className="relative">
       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
         aria-hidden="true"
         className="w-5 h-5 text-[#979a9f] "
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
         ></path>
        </svg>
       </div>
       <input
        type="text"
        id="default-search"
        onChange={handleChange}
        className="block w-full mb-3 p-4 pl-10 text-sm text-gray-900 border-x-0 border-t-0 border-b-4 border-b-[#f4f4f4] focus:ring-white focus:border-b-[#f4f4f4] "
        placeholder="Rechercher un projet github..."
       />
      </div>
     </form>

     <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-5 overflow-x-auto">
      <div className="inline-block min-w-full overflow-hidden">
       <table className="min-w-full leading-normal border-collapse table-auto">
        <thead>
         <tr>
          <th className="pr-5 py-3 pl-10 border-b-2 font-light text-left text-sm text-gray-600 ">
           Projets
          </th>
          <th className="px-5 py-3 border-b-2 font-light text-center text-sm text-gray-600 ">
           Language principal
          </th>
          <th className="px-5 py-3 border-b-2 font-light text-center text-sm text-gray-600 ">
           Description
          </th>
          <th className="px-5 py-3 border-b-2 font-light text-center text-sm text-gray-600 ">
           Dernier Update
          </th>
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
               <td className="px-5 py-5  bg-white text-sm w-2/5 hover:bg-custom-mustard">
                <div className="flex items-center">
                 <div className=" ml-0 sm:ml-3">
                  <Link
                   to={`/dashboard/${item.id}`}
                   state={{ name: item.name }}
                  >
                   <div className="flex gap-2   md:justify-center  sm:items-center font-semibold">
                    <img
                     src={item.owner.avatar_url}
                     alt="avatar"
                     className="hidden md:block w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-900 whitespace-no-wrap">
                     {item.name}
                     <span className="text-xs text-custom-blue ">
                      {item.fork ? `\nΨ` : null}
                     </span>
                     <p className="text-xs ">
                      {dateConverter(item.created_at, true)}
                     </p>
                    </span>
                   </div>
                  </Link>
                 </div>
                </div>
               </td>
               <td className="px-5 py-5  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                 {item.language != null
                  ? item.language
                  : 'Markdown et ressources'}
                </p>
               </td>
               <td className="px-5 py-5  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                 {item.description != undefined
                  ? limitCharFormater(item.description)
                  : 'Aucune Description'}
                </p>
               </td>
               <td className="px-5 py-5  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                 {dateConverter(item.updated_at)}
                </p>
               </td>
              </tr>
             ))
          : data
             .sort((a: any, b: any) => {
              return b.id - a.id;
             })
             .map((item: any) => (
              <tr key={item.id}>
               <td className="px-5 py-5 bg-white text-sm w-2/5 hover:bg-custom-mustard   ">
                <div className="flex items-center">
                 <div className="ml-0 sm:ml-3">
                  <Link
                   to={`/dashboard/${item.id}`}
                   state={{ name: item.name }}
                  >
                   <div className="flex gap-2 justify-start md:justify-center items-center font-semibold">
                    <img
                     src={item.owner.avatar_url}
                     alt="avatar"
                     className="hidden md:block w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-900 whitespace-no-wrap">
                     {item.name}
                     <span className="text-xs text-custom-blue ">
                      {item.fork ? `\nΨ` : null}
                     </span>
                     <p className="font-light text-sm text-gray-600">
                      {dateConverter(item.created_at, true)}
                     </p>
                    </span>
                   </div>
                  </Link>
                 </div>
                </div>
               </td>
               <td className="px-5 py-5  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                 {item.language != null
                  ? item.language
                  : 'Markdown et ressources'}
                </p>
               </td>
               <td className="px-5 py-5  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                 {item.description != undefined
                  ? limitCharFormater(item.description)
                  : 'Aucune Description'}
                </p>
               </td>
               <td className="px-5 py-5  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                 {dateConverter(item.updated_at)}
                </p>
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
