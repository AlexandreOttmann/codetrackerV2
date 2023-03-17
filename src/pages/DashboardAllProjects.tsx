import React, { useState, useEffect } from 'react';
import { auth } from '../database/firebase';
import { Sidebar } from '../components/Dashboard/Layout/Sidebar';
import Content from '../components/Dashboard/Content';

export const DashboardAllProjects = () => {
  return (
    <>
      <Sidebar />
      <Content />
      {/* <div>Profil de {auth.currentUser?.displayName}</div>) */}
    </>
  );
};
