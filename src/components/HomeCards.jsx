import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>New offer</h2>
            <p className='mt-2 mb-4'>
              Travel from your location to London with 20% off!
            </p>
            <Link
              to='/new-offer'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Offer
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Best offer</h2>
            <p className='mt-2 mb-4'>
              Build your customize product with the best price in the market
            </p>
            <Link
              to='/best-offer'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Customize
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
