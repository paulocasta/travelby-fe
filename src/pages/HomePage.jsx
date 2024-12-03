import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import RecentFlights from '../components/RecentFlights';
import RecentHotels from '../components/RecentHotels';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <RecentFlights isHome={true} />
      <RecentHotels isHome={true} />      
    </>
  );
};
export default HomePage;
