import { useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker, FaLuggageCart } from 'react-icons/fa';
import { FaPerson } from "react-icons/fa6";
import { RiSteering2Line } from "react-icons/ri";
import { TbManualGearbox   } from "react-icons/tb";
import { Link } from 'react-router-dom';

const CarPage = () => {
  const car = useLoaderData();

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/cars'
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
                <h3 className='text-indigo-800 text-3xl font-bold'>{car.model.name}</h3>
                <div className='mb-2 flex align-middle justify-center md:justify-start'>                  
                  <p className='text-orange-700'>{car.model.brand.name}</p>              
                </div>                
                <div className='container flex space-x-2 mb-2git'>                
                  <span title='People'>
                    <FaPerson  className='icon-[mdi-light--home] text-4xl mr-2'/>                   
                  </span>
                  <p className='text-left text-lg'> {car.model.passengers}</p>
                  <span title='Big Luggage'>
                    <FaLuggageCart className='icon-[mdi-light--home] text-4xl mr-2'/>                   
                  </span>
                  <p className='text-left text-lg'> {car.model.bigLuggage}</p>
                  <span title='Small Luggage'>
                    <FaLuggageCart className='icon-[mdi-light--home] text-4xl mr-2'/>                   
                  </span>
                  <p className='text-left text-lg'> {car.model.smallLuggage}</p>
                  <span title='Steering'>
                    <RiSteering2Line className='icon-[mdi-light--home] text-4xl mr-2'/>                   
                  </span>
                  <p className='text-left text-lg'> {car.model.steering}</p>
                  <span title='Gearbox'>
                    <TbManualGearbox className='icon-[mdi-light--home] text-4xl mr-2'/>                   
                  </span>
                  <p className='text-left text-lg'> {car.model.gearbox}</p>
                  
                </div>                
              </div>              

              <div className='bg-white p-6 rounded-lg shadow-md text-center mt-6 md:text-left'>                
                <div className='flex text-3xl'>
                  <h3 className='text-indigo-800 font-bold'>From</h3>
                  <FaMapMarker className='text-red-700 '/>
                </div>
                <div className='text-left text-lg'>
                  <p>Date: {car.fromDate.slice(0,10)}</p>
                  <h1 className='text-indigo-800 font-bold mt-2'>Delivery Place</h1>
                  <div>
                  <p>Location: {car.deliveryPlace.name}</p>
                  <p>City: {car.deliveryPlace.city}</p>
                  <p>Country: {car.deliveryPlace.country}</p>
                  </div>              
                </div>
              </div>
              
              <div className='bg-white p-6 rounded-lg shadow-md text-center mt-6 md:text-left'>      
                <div className='flex text-3xl mt-4'>
                  <h3 className='text-indigo-800 font-bold'>To</h3>
                  <FaMapMarker className='text-red-700 '/>
                </div>
                <div className='text-left text-lg '>
                  <p>Date: {car.fromDate.slice(0,10)}</p>
                  <h1 className='text-indigo-800 font-bold mt-2'>Return Place</h1>
                  <div>
                  <p>Location: {car.returnPlace.name}</p>
                  <p>City: {car.returnPlace.city}</p>
                  <p>Country: {car.returnPlace.country}</p>
                  </div>              
                </div>
                <p className='text-left text-lg'>Date: {car.toDate.slice(0,10)}</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-3xl font-bold mb-2'>
                  Details
                </h3>
                
                <p className='font-bold text-left text-lg'>
                Name: {car.model.category.name}
                </p>
                <p className='font-bold  text-left text-lg'>
                Franchise: ${car.model.category.franchise}
                </p>
                <p className='font-bold  text-left text-lg'>
                Franchise Damage: ${car.model.category.franchiseDamage}
                </p>
                <p className='font-bold  text-left text-lg'>
                Franchise Rollover: ${car.model.category.franchiseRollover}
                </p>
                <p className='font-bold  text-left text-lg'>
                Franchise Theft: ${car.model.category.franchiseTheft}
                </p>
                <p className='font-bold  text-left text-lg'>
                Franchise Hail: ${car.model.category.franchiseHail}
                </p>

                <h3 className='text-indigo-800 text-3xl font-bold mt-4'>
                  Price
                </h3>
                <p className='mb-4 font-bold'>${car.price}</p>                
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

const carLoader = async ({ params }) => {
  const res = await fetch(`/api/cars/${params.id}`);
  const data = await res.json();
  return data;
};

export { CarPage as default, carLoader };
