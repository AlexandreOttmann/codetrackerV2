import { Link } from 'react-router-dom';
import { dateConverter } from '../../../utils/dateFormater';
import avatar from '../../../assets/avatar.png';
import { limitCharFormater } from '../../../utils/limitCharFormater';

export const CommitsList = ({ data, name }: any) => {
  console.log('DATACOMMITLIST', data);

  return (
    <div className='container mx-auto'>
      <div className='py-4'>
        <div className='border-b mb-4'>
          <h2 className='text-2xl text-gray-600 p-4 font-semibold tracking-wide'>Liste des commits : {name}</h2>
        </div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded border-t-8 border-t-indigo-500 overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>Commit</th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Auteur</th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any) => (
                  <tr key={item.sha}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <Link to={`/dashboard/repos/commits/details/${item.sha}`} state={{ url: item.url }}>
                        <p className='text-gray-900 whitespace-no-wrap text-start'>{limitCharFormater(item.commit.message)}</p>
                      </Link>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='text-gray-900 whitespace-no-wrap flex pl-10 justify-start'>
                        <Link to={item?.author?.html_url} target='_blank'>
                          <div className='flex gap-2 justify-center items-center font-semibold'>
                            <img src={item.author ? item.author.avatar_url : avatar} alt='avatar' className='w-7 h-7 rounded-full' />
                            {item.commit.author.name}
                          </div>
                        </Link>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap text-center'>{dateConverter(item.commit.author.date)}</p>
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
