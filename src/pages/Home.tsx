import React from 'react';
import { auth } from '../database/firebase';

const Home = () => {
 console.log(auth.currentUser);
 return (
  <>
   <h1 className="text-5xl text-gray-900 ">
    Bienvenue {auth.currentUser?.displayName}
   </h1>
   <h1 className="text-5xl text-gray-900 ">
    Bienvenue {auth.currentUser?.displayName}
   </h1>
   <h1 className="text-5xl text-gray-900 ">
    Bienvenue {auth.currentUser?.displayName}
   </h1>
  </>
 );
};

export default Home;
