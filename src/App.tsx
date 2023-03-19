import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Login from './pages/Login';
import { auth } from './database/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './pages/Home';
import { DashboardAllProjects } from './pages/DashboardAllProjects';
import { AuthContext } from './context/Context';
import DashboardSingle from './pages/DashboardSingle';
import { ProtectedRoute } from './components/ProtectedRoute';
import NotFound from './pages/404';
import { DashboardCommit } from './pages/DashboardCommit';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const user: any = localStorage.getItem('user');

  function getLocalStorage() {
    const objet = JSON.parse(user);
    if (user) {
      const data = {
        uid: objet.uid,
        displayName: objet.displayName,
        email: objet.email,
        photoURL: objet.photoURL,
        phoneNumber: objet.phoneNumber,
        providerId: objet?.providerData[0].providerId,
        githubId: objet?.providerData[0].uid,
      };
      return data;
    } else {
      return null;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User:', user);
        setIsLoaded(true);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        setIsLoaded(false);
        localStorage.removeItem('user');
      }
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      getLocalStorage();
    }
  }, [isLoaded]);

  return (
    <AuthContext.Provider value={{ auth: getLocalStorage() }}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path='/dashboard' element={<DashboardAllProjects />} />
              <Route path='/dashboard/:id' element={<DashboardSingle />} />
              <Route path='/dashboard/repos/commits/details/:id' element={<DashboardCommit />} />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
