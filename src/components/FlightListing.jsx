import { FaMapMarker, FaPlane, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FlightListing = ({ flight }) => {

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'> <img className='h-10 w-auto' src={flight.logo} /> {flight.airline} - {flight.type}</div>
          <h3 className='text-xl font-bold'>{flight.title}</h3>
        </div>        

        <div className='text-blue-400'>
          <div className='flex'>
            <h3 className='text-black text-lg inline-flex pr-2'>Departure</h3>
            <FaPlane className='flex-col'/>
          </div>    
          <div className='text-sm'>
          
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />         
            {flight.segments.origin.name}
          </div>
      
          <div className='text-orange-700 mb-3'>
            <FaClock className='inline text-lg mb-1 mr-1' />         
            {flight.segments.departuredAt}
          </div>        
          </div>
        </div>
        
        <div className='border border-gray-100 mb-5'></div>

        <div className='text-blue-400'>
          <div className='flex'>
            <h3 className='text-black text-lg inline-flex pr-2'>Arrive</h3>
            <FaPlane className='flex-col'/>
          </div>    
          <div className='text-sm'>
          
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />         
            {flight.segments.destination.name}
          </div>
      
          <div className='text-orange-700 mb-3'>
            <FaClock className='inline text-lg mb-1 mr-1' />         
            {flight.segments.arrivedAt}
          </div>        
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>

          <Link
            to={`/flights/${flight.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FlightListing;
