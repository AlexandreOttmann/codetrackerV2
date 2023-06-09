import React from 'react';
import { Sidebar } from '../components/Dashboard/Layout/Sidebar';
import { Background } from '../components/Dashboard/Layout/Background';
import ContentSingle from '../components/Dashboard/SingleProject/Content';

const DashboardSingle = () => {
  return (
    <>
      <Background />
      <Sidebar />
      <ContentSingle />
    </>
  );
};

export default DashboardSingle;
