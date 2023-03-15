import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../database/firebase';

export interface IAuthRouteProps {
 children: any;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = ({ children }) => {
 const navigate = useNavigate();
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  AuthCheck();
  return () => AuthCheck();
 }, [auth]);

 const AuthCheck = onAuthStateChanged(auth, (user) => {
  if (user) {
   setLoading(false);
  } else {
   console.log('unauthorized');
   navigate('/login');
  }
 });

 if (loading) return <p>Loading...</p>;

 return <>{children}</>;
};

export default AuthRoute;
