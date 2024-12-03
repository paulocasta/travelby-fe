import { FaMapMarker, FaDollarSign , FaClock, FaRegStar  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotelListing = ({ hotel }) => {

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <h3 className='text-xl font-bold'>{hotel.name}</h3>
          <div className='text-gray-400 my-1'>{hotel.type}</div>
          <div className='text-gray-600 my-2'> {hotel.shortDescription} </div>      
        </div>        

        <div className='text-blue-400'>
          <div className='flex'>
            <h3 className='text-black text-lg inline-flex pr-2'></h3>            
          </div>    
          <div className='text-sm'>          
            <div className='text-orange-700 mb-3'>
                <FaMapMarker className='inline text-lg mb-1 mr-1' />         
                {hotel.city}
            </div>
        
            <div className='text-orange-700 mb-3'>
                <FaMapMarker className='inline text-lg mb-1 mr-1' />         
                {hotel.address1}
            </div>     

            <div className='text-orange-700 mb-3'>
                <FaMapMarker className='inline text-lg mb-1 mr-1' />         
            {hotel.locationDescription}
          </div>

          </div>
        </div>
        
        <div className='border border-gray-100 mb-5'></div>

        <div className='text-blue-400'>
          <div className='flex'>
            <h3 className='text-black text-lg inline-flex pr-2'>{hotel.hotelRating}  <FaRegStar/></h3>
    
          </div>    
          <div className='text-sm'>
      
          <div className='text-orange-700 mb-3'>
            <FaDollarSign  className='inline text-lg mb-1 mr-1' />         
                {hotel.rateCurrencyCode} {hotel.highRate} 
          </div>        
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>

          <Link
            to={`/hotels/${hotel.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HotelListing;
