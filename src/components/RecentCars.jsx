import { useState, useEffect } from 'react';
import CarListing from './CarListing';
import Spinner from './Spinner';

const RecentCars = ({ isHome = false }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      const apiUrl = isHome ? '/api/cars?_limit=3' : '/api/cars';
      try {
        const res = await fetch(apiUrl);        
        const data = await res.json();        
        setCars(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <section className='bg-orange-200 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Cars' : 'Browse Cars'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {cars.map((car) => (
              <CarListing key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>    
  );
};
export default RecentCars;
