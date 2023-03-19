import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Layout/Elements/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-9xl font-bold'>404</h1>
          <h2 className='text-6xl font-bold'>Page non trouvée :(</h2>
          <p className='text-2xl font-semibold'>
            <Link to='/'>Retour à l'accueil</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
