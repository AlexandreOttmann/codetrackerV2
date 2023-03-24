import CodeTrackerHeroImg from '../../assets/codetrackerHero.svg';
import { useAuth } from '../../context/Context';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
 const user: any = useAuth();

 const [currentUser, setCurrentUser] = useState<any>(null);

 useEffect(() => {
  if (user.auth) {
   setCurrentUser(user.auth);
  } else {
   setCurrentUser(null);
  }
 }, [user]);

 return (
  <section className="bg-white text-custom-dark h-[calc(100vh_-_70px)] justify-center flex">
   <div className="container mt-48  sm:mt-0 flex flex-col justify-center p-6 mx-auto sm:py-0 lg:py-0 lg:flex-row lg:justify-between">
    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
     <h1 className="text-5xl font-bold sm:text-6xl">
      <div className="mb-9 text-custom-dark">CodeTracker</div>
      <div className="leading-[0]">
       <span className=" text-4xl">une manière simple de </span>
       <span className="text-custom-blue text-4xl"> suivre vos projets</span>
      </div>
     </h1>
     <p className="mt-6 mb-8 text-lg sm:mb-12">
      Un service gratuit au service des projets !
     </p>
     {!currentUser ? (
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
       <Link
        rel="noopener noreferrer"
        to="/login"
        className="px-8 py-3 text-lg font-semibold rounded-xl bg-indigo-500 text-white"
       >
        Se connecter
       </Link>
       <a
        rel="noopener noreferrer"
        href="#"
        className="px-8 py-3 text-lg font-semibold border rounded-xl border-gray-100"
       >
        Découvrir
       </a>
      </div>
     ) : (
      <>
       <button className="px-8 py-3  text-lg font-semibold rounded-xl bg-indigo-500 text-white">
        <Link to="/dashboard">Rejoindre votre dashboard</Link>
       </button>
      </>
     )}
    </div>
    <div className="flex flex-col items-center justify-center p-6 mt-8 sm:mt-0  lg:mt-0  2xl:h-128">
     <img
      src={CodeTrackerHeroImg}
      alt=""
      className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
     />
    </div>
   </div>
  </section>
 );
};

export default Hero;
