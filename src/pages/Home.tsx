import DashboardHome from '../components/Home/DashboardHome';
import { Features } from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import Testimonial from '../components/Home/Testimonial';
import { Header } from '../components/Layout/Elements/Header';

const Home = () => {
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
