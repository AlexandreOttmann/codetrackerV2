import React from 'react';
import { db } from './database/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Profil } from './pages/Profil';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import AuthRoute from './components/AuthRoute';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
 return (
  <Router>
   <Layout>
    <Routes>
     <Route
      path="/"
      element={
       <AuthRoute>
        <Home />
       </AuthRoute>
      }
     />

     <Route
      path="/profil"
      element={
       <AuthRoute>
        <Profil />
       </AuthRoute>
      }
     />
     <Route path="/login" element={<LoginPage />} />
    </Routes>
   </Layout>
  </Router>
 );
};

export default App;
