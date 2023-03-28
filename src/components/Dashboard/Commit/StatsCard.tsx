import React from 'react';

export const StatsCard = ({ data }: any) => {
 return (
  <>
   <div className="flex justify-around items-center h-56 mb-4 rounded bg-custom-dark shadow ">
    <div className="flex flex-col items-center">
     <p className="text-6xl font-bold text-custom-green ">
      {data.stats.additions}
     </p>
     <p className="text-2xl text-custom-gray   font-normal">Additions</p>
    </div>
    <div className="flex flex-col items-center">
     <p className="text-6xl font-bold text-red-400">{data.stats.deletions}</p>
     <p className="text-2xl text-custom-gray  font-normal">Deletions</p>
    </div>

    <div className="flex flex-col items-center">
     <p className="text-6xl font-bold text-custom-blue  ">{data.stats.total}</p>
     <p className="text-2xl text-custom-gray  font-normal">Total</p>
    </div>
   </div>
  </>
 );
};
