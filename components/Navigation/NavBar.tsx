import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';

export default function NavBar(props: any) {
  return (
    <>
      <nav className='flex flex-col justify-center px-8'>
        <div className='relative flex items-center justify-end w-full max-w-3xl py-8 mx-auto'>

          {/* On Mobile - Hamburger */}
          <div className="hidden">
            <MobileMenu />
          </div>


          {/* Desktop Menu */}
          <div className='flex items-center justify-end text-gray-400 gap-x-4'>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
            <Link href={'/faq'}>
              <a>FAQ</a>
            </Link>
          </div>




        </div>
      </nav>
    </>
  );
}
