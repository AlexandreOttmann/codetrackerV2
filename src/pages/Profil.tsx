import React from 'react';
import { getAuth } from 'firebase/auth';

export const Profil = () => {
 const auth = getAuth();
 console.log('non', auth.currentUser?.displayName);
 return <div>Profil de {auth.currentUser?.displayName}</div>;
};
