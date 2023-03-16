import React from 'react';
import dashboardExample from '../../assets/dashboardExample.png';

const DashboardHome = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <div>
          <img src={dashboardExample} alt='dashboardExample' />
        </div>
        <div className='font-semibold mt-5 pr-8 text-xl leading-6 text-gray-600 line-clamp-3 text-center'>
          Accédez à un dashboard gratuit, simple et efficace pour suivre l'intégralité de vos projets Github.
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
