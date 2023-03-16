import React from 'react';
import { auth } from '../database/firebase';
import { Sidebar } from '../components/Dashboard/Layout/Sidebar';
import Content from '../components/Dashboard/Content';

export const Profil = () => {
  //  console.log(auth.currentUser);
  //  console.log('non', auth.currentUser?.displayName);
  return (
    <>
      <Sidebar value={auth} />
      <Content />
      {/* <div>Profil de {auth.currentUser?.displayName}</div>) */}
    </>
  );
};
