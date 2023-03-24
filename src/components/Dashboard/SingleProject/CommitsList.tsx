import { Link } from 'react-router-dom';
import { dateConverter } from '../../../utils/dateFormater';
import avatar from '../../../assets/avatar.png';
import { limitCharFormater } from '../../../utils/limitCharFormater';

export const CommitsList = ({ data, name }: any) => {
 console.log('DATACOMMITLIST', data);

 return (
  <div className="container mx-auto">
   <div className="py-4">
    <div className="border-b mb-4">
     <h2 className="text-2xl text-gray-600 p-4 font-semibold tracking-wide">
      Liste des commits : {name}
     </h2>
    </div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-5 overflow-x-auto">
     <div className="inline-block min-w-full overflow-hidden">
      <table className="min-w-full leading-normal table-auto  border-collapse">
       <thead>
        <tr>
         <th className="pr-5 py-3 pl-10 border-b-2 font-light text-left text-sm text-gray-600">
          Commit
         </th>
         <th className="pr-5 py-3 pl-10 border-b-2 font-light text-left text-sm text-gray-600">
          Auteur
         </th>
         <th className="pr-5 py-3 pl-10 border-b-2 font-light text-left text-sm text-gray-600">
          Date
         </th>
        </tr>
       </thead>
       <tbody>
        {data.map((item: any) => (
         <tr key={item.sha}>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hover:bg-custom-green">
           <div className="flex items-center  ">
            <div className=" ml-0 sm:ml-3">
             <Link
              to={`/dashboard/repos/commits/details/${item.sha}`}
              state={{ url: item.url }}
             >
              <p className="text-gray-900 whitespace-no-wrap text-start">
               {limitCharFormater(item.commit.message)}
              </p>
             </Link>
            </div>
           </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hover:bg-custom-mustard ">
           <div className="text-gray-900 whitespace-no-wrap flex  ">
            <Link to={item?.author?.html_url} target="_blank">
             <div className="flex gap-2  justify-start   items-center font-semibold ">
              <img
               src={item.author ? item.author.avatar_url : avatar}
               alt="avatar"
               className="w-7 h-7 rounded-full hidden sm:block"
              />
              {item.commit.author.name}
             </div>
            </Link>
           </div>
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
