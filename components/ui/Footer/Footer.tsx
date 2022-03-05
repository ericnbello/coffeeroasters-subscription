import Link from 'next/link';
import s from './Footer.module.css';

import LogoWhite from 'components/icons/LogoWhite';
import GitHub from 'components/icons/GitHub';
import Instagram from 'components/icons/Instagram';
import Facebook from 'components/icons/Facebook';
import Twitter from 'components/icons/Twitter';

export default function Footer() {
  return (
    <footer className="mx-auto px-24 bg-darkGreyBlue">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row font-barlow gap-8 border-zinc-600 py-12 text-gray text-sm transition-colors duration-150 bg-darkGrayBlue justify-between">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-12 lg:gap-20 items-center uppercase">
          <div className="flex flex-row justify-center">
            <Link href="/">
              <a className="">
                <span className="mr-2">
                  <LogoWhite />
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-row justify-evenly">
            <ul className="flex flex-col md:flex-row text-center gap-5 md:gap-10">
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                    Home
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/about">
                  <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/pricing">
                  <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                    Create Your Plan
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                  Terms of Use
                </a>
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="flex flex-row justify-center lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
            {/* <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            >
              <GitHub />
            </a> */}
            <a
              aria-label="Facebook Profile"
              href="https://facebook.com"
            >
              <Facebook />
            </a>
            <a
              aria-label="Twitter Profile"
              href="https://twitter.com"
            >
              <Twitter />
            </a>
            <a
              aria-label="Instagram Profile"
              href="https://instagram.com"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-darkGrayBlue">
        <div>
          <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Crafted by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 text-white"
            />
          </a>
        </div>
      </div> */}
    </footer>
  );
}
