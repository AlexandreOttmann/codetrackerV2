import React from 'react';
import { useAuth } from '../context/Context';

const Home = () => {
  const user: any = useAuth();
  console.log('HOME ', user.auth.currentUser);
  return (
    <>
      <img src={user.auth.currentUser?.photoURL}></img>
      <h1 className='text-5xl text-gray-900 '>Bienvenue {user?.auth?.currentUser?.displayName}</h1>
    </>
  );
};

export default Home;
