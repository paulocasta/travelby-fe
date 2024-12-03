import { useLoaderData} from 'react-router-dom';
import { FaArrowLeft, FaMapMarker,FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotelPage = () => {
  const hotel = useLoaderData();

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/hotels'
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
                <h3 className='text-3xl font-bold mb-4'>{hotel.name}</h3>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{hotel.city}</p>              
                </div>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{hotel.address1}</p>
                </div>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{hotel.locationDescription}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  About
                </h3>

                <p className='mb-4'>{hotel.shortDescription}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Price
                </h3>

                <p className='mb-4'>{hotel.lowRate} / Night</p>
                <div className='flex'>
                    <h3 className='text-black text-lg inline-flex pr-2'>{hotel.hotelRating}  <FaRegStar className='text-yellow-300'/></h3>    
                </div>        
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

const hotelLoader = async ({ params }) => {
  const res = await fetch(`/api/hotels/${params.id}`);
  const data = await res.json();
  return data;
};

export { HotelPage as default, hotelLoader };
