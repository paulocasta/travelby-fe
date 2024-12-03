import { useLoaderData} from 'react-router-dom';
import { FaArrowLeft, FaMapMarker,FaPlaneDeparture, FaRegClock   } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FlightPage = () => {
  const flight = useLoaderData();

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/flights'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Home
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{flight.type}</div>
                <h1 className='text-3xl font-bold mb-4'>Departure {flight.segments.origin.cityName}</h1>                
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaPlaneDeparture className='text-orange-700 mr-1' />                  
                  <p className='text-orange-700'>{flight.segments.origin.airportCode}</p>                  
                </div>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />                  
                  <p className='text-orange-700'>{flight.segments.origin.airportName}</p>        
                </div>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />                  
                  <p className='text-orange-700'>{flight.segments.departuredAt}</p>        
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h1 className='text-3xl font-bold mb-4'>Arrived {flight.segments.destination.cityName}</h1>                
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaPlaneDeparture className='text-orange-700 mr-1' />                  
                  <p className='text-orange-700'>{flight.segments.destination.airportCode}</p>                  
                </div>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />                  
                  <p className='text-orange-700'>{flight.segments.destination.airportName}</p>        
                </div>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaRegClock  className='text-orange-700 mr-1' />                  
                  <p className='text-orange-700'>{flight.segments.arrivedAt}</p>        
                </div>    
    
              </div>
            </main>

 
            <aside>
             
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                <h2 className='text-2xl'>{flight.segments.marketingCarrier.name}</h2>

                <p className='my-2'>F.N: {flight.segments.flightNumber}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>{flight.segments.cabinClassName}</h3>
              </div>
             
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const flightLoader = async ({ params }) => {
  const res = await fetch(`/api/flights/${params.id}`);
  const data = await res.json();
  return data;
};

export { FlightPage as default, flightLoader };
