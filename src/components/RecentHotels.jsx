import { useState, useEffect } from 'react';
import HotelListing from './HotelListing';
import Spinner from './Spinner';

const RecentHotels = ({ isHome = false }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const apiUrl = isHome ? '/api/hotels?_limit=3' : '/api/hotels';
      try {
        const res = await fetch(apiUrl);        
        const data = await res.json();        
        setHotels(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <section className='bg-white px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Hotels' : 'Browse Hotels'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {hotels.map((hotel) => (
              <HotelListing key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </section>    
  );
};
export default RecentHotels;
