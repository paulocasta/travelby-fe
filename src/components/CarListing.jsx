import { FaMapMarker, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarListing = ({ car }) => {
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <h3 className='text-xl font-bold'>{car.model.description}</h3>
          <div className='text-gray-400 my-1'>{car.model.brand.name}</div>
          <div className='text-gray-600 my-2'> {car.model.category.name} </div>      
        </div>        

        <div className='text-blue-400'>
          <div className='flex'>
            <h3 className='text-black text-lg inline-flex pr-2'></h3>            
          </div>    
          <div className='text-sm'>          
            <div className='text-orange-700 mb-3'>
                <FaMapMarker className='inline text-lg mb-1 mr-1' />         
                From: {car.deliveryPlace.name}
            </div>
        
            <div className='text-orange-700 mb-3'>
                <FaMapMarker className='inline text-lg mb-1 mr-1' />         
                To: {car.returnPlace.name}
            </div>     
          </div>

          
        </div>
        
        <div className='border border-gray-100 mb-5'></div>

        <div className='text-blue-400'>         
          <div className='text-sm'>
      
          <div className='text-orange-700 mb-3'>
            <FaDollarSign  className='inline text-lg mb-1 mr-1' />         
                {car.currency} {car.price} 
          </div>        
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>

          <Link
            to={`/cars/${car.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarListing;
