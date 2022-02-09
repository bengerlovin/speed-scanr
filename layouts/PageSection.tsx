import React from 'react';

export default function PageSection({ children, ...props }) {
  return (
    <>
      <section className='flex flex-col justify-center'>
        <div className='flex flex-col items-start justify-between w-full max-w-3xl mx-auto mb-6'>
          {children}
        </div>
      </section>
    </>
  );
}
