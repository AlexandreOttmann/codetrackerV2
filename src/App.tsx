import React, { useState } from 'react';
import { db } from './database/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Profil } from './pages/Profil';
import { auth } from './database/firebase';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import { AuthContext } from './context/Context';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  // on ajouter les données du localStorage dans le state
  return (
    <AuthContext.Provider value={{ auth }}>
      <Router>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={
                //  <AuthRoute>
                <Home />
                //  </AuthRoute>
              }
            />

            <Route
              path='/profil'
              element={
                // <AuthRoute>
                <Profil />
                // </AuthRoute>
              }
            />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
