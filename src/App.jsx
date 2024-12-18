import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import CarsPage from './pages/CarsPage';
import NotFoundPage from './pages/NotFoundPage';
import FlightPage, { flightLoader } from './pages/FlightPage';
import HotelPage, { hotelLoader } from './pages/HotelPage';
import CarPage, { carLoader } from './pages/CarPage';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/flights' element={<FlightsPage />} />
        <Route
          path='/flights/:id'
          element={<FlightPage />}
          loader={flightLoader}
        />
        <Route path='/hotels' element={<HotelsPage />} />
        <Route
          path='/hotels/:id'
          element={<HotelPage />}
          loader={hotelLoader}
        />
        <Route path='/cars' element={<CarsPage />} />
         <Route
          path='/cars/:id'
          element={<CarPage />}
          loader={carLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
