import React from 'react';
import { auth } from '../database/firebase';
import { Sidebar } from '../components/Layout/Sidebar';

export const Profil = () => {
  //  console.log(auth.currentUser);
  //  console.log('non', auth.currentUser?.displayName);
  return (
    <>
      <Sidebar value={auth} />
      {/* <div>Profil de {auth.currentUser?.displayName}</div>) */}
    </>
  );
};
