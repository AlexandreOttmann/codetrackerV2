import React from 'react';
import { Header } from './Elements/Header';
import { Footer } from './Elements/Footer';

export const Layout = ({ children }: any) => {
 return (
  <>
   {children}
   <Footer />
  </>
 );
};
