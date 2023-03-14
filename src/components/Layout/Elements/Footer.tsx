import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='p-4 absolute z-10 bottom-0 w-full mt-20 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 '>
      <span className='text-sm text-gray-500 sm:text-center '>
        © 2023 Code source :{' '}
        <Link to='https://github.com/AlexandreOttmann/Dev-Portfolio' className='hover:underline'>
          Alexandre OTTMANN
        </Link>
        <span className='mx-1'>&</span>
        <Link to='https://frontcodelover.vercel.app/' className='hover:underline'>
          Nicolas DE RAEMY
        </Link>
        . Tous droits réservés.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0'>
        <li>
          <Link to='/mentions-legales' className='mr-4 hover:underline md:mr-6'>
            Mentions légales
          </Link>
        </li>
      </ul>
    </footer>
  );
};
