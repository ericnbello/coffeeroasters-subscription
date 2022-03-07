import Link from 'next/link';
import s from './Navbar.module.css';
import DashboardRedirect from '../DashboardRedirect/DashboardRedirect';

import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center flex-wrap bg-lightCream py-3 px-6'>
      <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4'>
          <Logo />
        </a>
      </Link>
      <button
        className='inline-flex p-3 md:hidden text-black ml-auto hover:text-blue outline-none'
        onClick={handleClick}
      >
        <img src={`${
          active ? '/icon-close.svg' : '/icon-hamburger.svg'
        }`} />
      </button>

      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full md:inline-flex md:flex-grow md:w-auto uppercase font-barlow text-sm`}
      >
        <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto'>
          <Link href='/'>
            <a className={s.link}>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a className={s.link}>
              About Us
            </a>
          </Link>
          <Link href='/pricing'>
            <a className={s.link}>
              Choose Your Plan
            </a>
          </Link>
          {!!user && (
              <Link href="/account">
                  <a className={s.link}>Dashboard</a>
              </Link>
            )}
          <div className="">
            {user ? (
              <Link href="#">
                <a
                  className={s.link}
                  onClick={async () => {
                    supabaseClient.auth.signOut();
                    router.push('/signin');
                  }}
                >
                  Sign out
                </a>
              </Link>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
              
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
