import Link from 'next/link';

import LogoWhite from 'components/icons/LogoWhite';
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
                  <a className="text-white hover:text-lightCyan transition ease-in-out duration-150">
                    Home
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/about">
                  <a className="text-white hover:text-lightCyan transition ease-in-out duration-150">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/pricing">
                  <a className="text-white hover:text-lightCyan transition ease-in-out duration-150">
                    Choose Your Plan
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-row justify-center lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
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
    </footer>
  );
}
