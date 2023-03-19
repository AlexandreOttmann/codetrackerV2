import React from 'react';
import ContentCommit from '../components/Dashboard/Commit/ContentCommit';
import { Sidebar } from '../components/Dashboard/Layout/Sidebar';
import { Background } from '../components/Dashboard/Layout/Background';

export const DashboardCommit = () => {
  return (
    <>
      <Background />
      <Sidebar />
      <ContentCommit />
    </>
  );
};
