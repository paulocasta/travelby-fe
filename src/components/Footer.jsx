import { NavLink } from 'react-router-dom';

const linkClass = 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

const Footer = () => {
  return (
    <footer>
        <nav className='bg-indigo-700 border-b border-indigo-500'>
        <div className='mx-auto max-w-7xl px-2 text-sm sm:px-6 lg:px-8'>
            <div className='flex flex-col h-10 items-center justify-between'>
                <div className='flex md:items-stretch md:justify-start'>    
                    <div className='flex space-x-4 '>
                        <NavLink tdas='/about' className={linkClass}>
                        About Us
                        </NavLink>
                        <NavLink to='/contact' className={linkClass}>
                        Contact
                        </NavLink>
                        <NavLink to='/policy' className={linkClass}>
                        Privacy Policy
                        </NavLink>
                        <NavLink to='/terms' className={linkClass}>
                        Terms of Service
                        </NavLink>
                    </div>
                </div>
            </div>        
        </div>
        </nav>
    </footer>
  );
};

export default Footer;