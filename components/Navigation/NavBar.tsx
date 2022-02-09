import React from 'react';

export default function NavBar(props: any) {
  return (
    <>
      <nav className='flex flex-col justify-center px-8'>
        <div className='relative flex items-start justify-between w-full max-w-3xl py-8 mx-auto'>
          <div className='text-gray-400'>first nav item (logo)</div>
          <div className='text-gray-400'>second nav item - links</div>
        </div>
      </nav>
    </>
  );
}
