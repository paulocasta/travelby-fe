import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import RecentFlights from '../components/RecentFlights';
import RecentHotels from '../components/RecentHotels';
import RecentCars from '../components/RecentCars';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <RecentFlights isHome={true} />
      <RecentHotels isHome={true} />      
      <RecentCars isHome={true} />      
    </>
  );
};
export default HomePage;
