import React, { useState } from 'react';
import { db } from './database/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Login from './pages/Login';
import { auth } from './database/firebase';

import Home from './pages/Home';
import { DashboardAllProjects } from './pages/DashboardAllProjects';
import { AuthContext } from './context/Context';
import DashboardSingle from './pages/DashboardSingle';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  // on ajouter les données du localStorage dans le state
  return (
    <AuthContext.Provider value={{ auth }}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<DashboardAllProjects />} />
            <Route path='/dashboard/:id' element={<DashboardSingle />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
