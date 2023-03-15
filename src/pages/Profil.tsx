import React from 'react';
import { auth } from '../database/firebase';

export const Profil = () => {
  //  console.log(auth.currentUser);
  //  console.log('non', auth.currentUser?.displayName);
  return <div>Profil de {auth.currentUser?.displayName}</div>;
};
