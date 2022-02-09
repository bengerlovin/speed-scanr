import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

/**
 * Component handles input validation and parsing of input URL for scanner API
 * When a valid https address is inputted and the "Scan" button is clicked, the
 * component will navigate to /scan/[url].tsx page - the component that handles that
 * page will render the ScanResult component (which uses SWR for loading/error states)
 */

export default function ScanWebPageInput() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  function routeToScanPage() {
    console.log('routing to scan page with url');

    router.push('/scan?url=google.com');
  }

  useEffect(() => {
    console.log('in use effect hook', inputValue);
  }, [inputValue]);

  return (
    <div>
      <div className='mb-4'>Speed scanr project</div>
      <div className='flex flex-col items-start'>
        <div className='flex items-center gap-4'>
          {/* call api button */}
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='rounded-md ring-1'
          ></input>

          <button onClick={() => routeToScanPage()}>Call scanner</button>
        </div>
      </div>
    </div>
  );
}
