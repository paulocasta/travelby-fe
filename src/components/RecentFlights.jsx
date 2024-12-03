import { useState, useEffect } from 'react';
import FlightListing from './FlightListing';
import Spinner from './Spinner';

const RecentFlights = ({ isHome = false }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      const apiUrl = isHome ? '/api/flights?_limit=3' : '/api/flights';
      try {
        const res = await fetch(apiUrl);        
        const data = await res.json();        
        setFlights(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Flights' : 'Browse Flights'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {flights.map((flight) => (
              <FlightListing key={flight.id} flight={flight} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default RecentFlights;
