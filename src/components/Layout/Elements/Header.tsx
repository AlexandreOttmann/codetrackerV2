import React, { useContext, useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { signOut } from 'firebase/auth';
import { auth } from '../../../database/firebase';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/Context';
import { AuthContext } from '../../../context/Context';
import { useMatch } from 'react-router-dom';
<svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth={1.5}
 stroke="currentColor"
 className="w-6 h-6"
>
 <path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
 />
</svg>;

export interface IHomePage {}
const navigation = [
 { name: 'A propos', href: '/login', current: true },
 { name: 'Team', href: '#', current: false },
 { name: 'Projects', href: '#', current: false },
 { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: any[]) {
 return classes.filter(Boolean).join(' ');
}

export const Header = () => {
 const user: any = useAuth();
 const [loading, setLoading] = useState(false);
 const [currentUser, setCurrentUser] = useState<any>(null);

 useEffect(() => {
  if (user.auth) {
   setCurrentUser(user.auth);
  } else {
   setCurrentUser(null);
  }
 }, [user]);

 return (
  <>
   <Disclosure as="nav">
    {({ open }) => (
     <>
      <div className="mx-auto px-4 max-w-7xl rounded-xl bg-custom-dark mb-20">
       <div className="relative flex h-16 items-center justify-between ">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
         {/* Mobile menu button*/}
         <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Open main menu</span>
          {open ? (
           <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
           <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
         </Disclosure.Button>
        </div>
        <div className="flex flex-1 items-center justify-start">
         <Link to="/">
          <div className="flex justify-center flex-shrink-0 sm:items-center font-bold text-custom-blue leading-tight text-lg py-2">
           CodeTracker
          </div>
         </Link>
         <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
           {navigation.map((item) => (
            <a
             key={item.name}
             href={item.href}
             className={classNames(
              item.current ? ' text-white' : 'text-white hover:text-indigo-500',
              'rounded-md px-3 py-2 text-sm font-medium'
             )}
             aria-current={item.current ? 'page' : undefined}
            >
             {item.name}
            </a>
           ))}
          </div>
         </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         {/* Profile dropdown */}
         <Menu as="div" className="relative ml-3">
          <div>
           {!currentUser ? (
            <Menu.Button className="flex bg-custom-blue font-semibold text-white px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
             <span className="sr-only">Open user menu</span>
             <Link to="/login">Se connecter</Link>
            </Menu.Button>
           ) : (
            <Menu.Button className="flex bg-custom-blue font-semibold text-white px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
             <span className="sr-only">Open user menu</span>
             <Link to="/dashboard">Mon dashboard</Link>
            </Menu.Button>
           )}
          </div>
         </Menu>
        </div>
       </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
       <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => (
         <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
           item.current
            ? 'bg-custom-blue text-white'
            : 'text-gray-900 hover:bg-blue-600 hover:text-white',
           'block rounded-md px-3 py-2 text-base font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
         >
          {item.name}
         </Disclosure.Button>
        ))}
       </div>
      </Disclosure.Panel>
     </>
    )}
   </Disclosure>
  </>
 );
};
