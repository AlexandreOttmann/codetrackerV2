import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{!loading && children}</AuthContext.Provider>;
};
