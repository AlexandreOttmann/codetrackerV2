import { Link } from 'react-router-dom';
import { dateConverter } from '../../../utils/dateFormater';

const TableCommits = ({ data }: any) => {
  console.log('TABLE COMMIT', data);
  return (
    <div className='container mx-auto h-max'>
      <div className='py-4'>
        <div className='border-b mb-4'>
          <h2 className='text-2xl text-gray-600 p-4 font-semibold tracking-wide'>Projets Github</h2>
        </div>
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
                {data
                  .sort((a: any, b: any) => {
                    return b.id - a.id;
                  })
                  .map((item: any) => (
                    <tr key={item.id}>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5'>
                        <div className='flex items-center'>
                          <div className='ml-3'>
                            <Link to={`/dashboard/${item.id}`} state={{ name: item.name }}>
                              <div className='flex gap-2 justify-center items-center font-semibold'>
                                <img src={item.owner.avatar_url} alt='avatar' className='w-10 h-10 rounded-full' />
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
                        <p className='text-gray-900 whitespace-no-wrap text-center'>{item.description != undefined ? item.description : 'Aucune Description'}</p>
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
  );
};

export default TableCommits;
