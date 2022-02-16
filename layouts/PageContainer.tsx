import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import React from 'react';

export default function PageContainer({ children }) {
  return (
    <div>
      <NavBar />
      <main className='flex flex-col justify-center px-8'>
        <div className='flex flex-col items-start justify-between w-full max-w-3xl py-8 mx-auto'>
          {children}
        </div>
      </main>
    </div>
  );
}
