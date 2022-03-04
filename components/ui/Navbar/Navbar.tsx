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
    <>
    <nav className='flex items-center flex-wrap bg-white py-3 px-6'>
      <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4'>
          <Logo />
        </a>
      </Link>
      <button
        className='inline-flex p-3 lg:hidden text-black ml-auto hover:text-blue outline-none'
        onClick={handleClick}
      >
        <img src={`${
          active ? '/icon-close.svg' : '/icon-hamburger.svg'
        }`} />
      </button>

      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
              About Us
            </a>
          </Link>
          <Link href='/pricing'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
              Choose Your Plan
            </a>
          </Link>
          {!!user && (
              <Link href="/account">
                  <a className='ml-2'>Dashboard</a>
              </Link>
            )}
          <div className="flex flex-1 justify-end space-x-8 px-2">
            {user ? (
              <Link href="/">
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

    {/* <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 justify-between items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:flex flex-row justify-end">
            <Link href="/">
                <a className={s.link}>Home</a>
              </Link>
              <Link href="/pricing">
                <a className={s.link}>Pricing</a>
              </Link>
              <Link href="/account">
                <a className={s.link}>Account</a>
              </Link>
              <div className="flex flex-1 justify-end space-x-8">
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
            </nav>
          </div>
        </div>
      </div>
    </nav> */}
    </>
  );
};

export default Navbar;
