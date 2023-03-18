import { Link } from 'react-router-dom';

export const CommitsList = ({ data }: any) => {
 function dateConverter(dateInput: any) {
  const date = new Date(dateInput);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
 }
 return (
  <div className="container mx-auto">
   <div className="py-4">
    <div className="border-b mb-4">
     <h2 className="text-2xl text-gray-600 p-4 font-semibold tracking-wide">
      Liste des commits
     </h2>
    </div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
     <div className="inline-block min-w-full shadow rounded border-t-8 border-t-indigo-500 overflow-hidden">
      <table className="min-w-full leading-normal">
       <thead>
        <tr>
         <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Commit
         </th>
         <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Auteur
         </th>
         <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Nombres de changements
         </th>
         <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Date
         </th>
        </tr>
       </thead>
       <tbody>
        {data
         //  .sort((a: any, b: any) => b.commit.author.date - a.commit.author.date)
         .map((item: any) => (
          <tr key={item.id}>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap text-start">
             {item.commit.message}
            </p>
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap flex pl-10 justify-start">
             <Link to={item.author.html_url} target="_blank">
              <div className="flex gap-2 justify-center items-center font-semibold">
               <img
                src={item.author.avatar_url}
                alt="avatar"
                className="w-7 h-7 rounded-full"
               />
               {item.commit.author.name}
              </div>
             </Link>
            </p>
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap text-center">/</p>
           </td>
           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap text-center">
             {dateConverter(item.commit.author.date)}
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
 );
};
