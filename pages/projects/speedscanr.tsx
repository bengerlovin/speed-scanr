import React, { useEffect, useState } from 'react';

export default function SpeedScanrProject() {
  const [apiData, setApiData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  async function callScanApi() {
    let url = encodeURIComponent(inputValue);
    console.log(process.env.GOOGLE_API_KEY);
    const response = await fetch(`http://localhost:3000/api/scan/${url}`);
    const data = await response.json();
    console.log(data);
    setApiData(data);
  }

  useEffect(() => {
    console.log('in use effect hook', inputValue);
  }, [inputValue]);

  return (
    <div className='m-5'>
      <div>Speed scanr project</div>
      <div className='flex flex-col items-start'>
        <div className='flex items-center gap-4 my-4'>
          {/* call api button */}
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='rounded-md ring-1'
          ></input>
          <button onClick={callScanApi}>Call scanner</button>
        </div>

        {/* clear api data */}
        {apiData && (
          <button onClick={() => setApiData(null)}>clear Data</button>
        )}
      </div>

      {/* let user know data is found */}
      {apiData && (
        <div>
          <p>data found</p>
        </div>
      )}
    </div>
  );
}
