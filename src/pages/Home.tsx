import React from 'react';
import DashboardHome from '../components/Home/DashboardHome';
import { Features } from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import Testimonial from '../components/Home/Testimonial';
import { useAuth } from '../context/Context';
import { Header } from '../components/Layout/Elements/Header';

const Home = () => {
  const user: any = useAuth();
  console.log('HOME ', user.auth.currentUser);
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <DashboardHome />
      <Testimonial />
    </>
  );
};

export default Home;
