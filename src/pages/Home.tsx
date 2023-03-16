import React from 'react';
import DashboardHome from '../components/Home/DashboardHome';
import { Features } from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import Testimonial from '../components/Home/Testimonial';
import { useAuth } from '../context/Context';

const Home = () => {
  const user: any = useAuth();
  console.log('HOME ', user.auth.currentUser);
  return (
    <>
      <Hero />
      <Features />
      <DashboardHome />
      <Testimonial />
    </>
  );
};

export default Home;
