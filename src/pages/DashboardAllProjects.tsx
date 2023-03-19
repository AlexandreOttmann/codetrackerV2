import React, { useState, useEffect } from 'react';
import { auth } from '../database/firebase';
import { Sidebar } from '../components/Dashboard/Layout/Sidebar';
import Content from '../components/Dashboard/AllProjects/Content';
import { Background } from '../components/Dashboard/Layout/Background';

export const DashboardAllProjects = () => {
  return (
    <>
      {' '}
      <Background />
      <Sidebar />
      <Content />
      {/* <div>Profil de {auth.currentUser?.displayName}</div>) */}
    </>
  );
};
