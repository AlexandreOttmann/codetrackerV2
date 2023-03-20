import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../context/Context';
import { CommitsList } from './CommitsList';
import { BackButton } from '../../Layout/Elements/BackButton';
import { useLocation } from 'react-router-dom';

const ContentSingle = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>([]);
  const location = useLocation();
  const user: any = useAuth();

  const getData = async () => {
    const response = await fetch(`https://api.github.com/repositories/${id}/commits?per_page=100`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('LOCATION', location);

  return (
    <div className='z-2 p-4 sm:ml-64 xl:ml-[calc(20em_-_4.5em)] 2xl:ml-[calc(12em_-_4.5em)] '>
      <div className='p-4 shadow-xl rounded-lg bg-[#ffffff90] '>
        <BackButton />
        <CommitsList data={data} name={location.state.name} />
      </div>
    </div>
  );
};

export default ContentSingle;
