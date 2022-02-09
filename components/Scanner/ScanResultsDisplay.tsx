import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

interface ScanResultProps {
  encodedURL?: string;
}

export default function ScanResultsDisplay({ encodedURL }: ScanResultProps) {
  const decodedURL = decodeURIComponent(encodedURL as string);
  const [apiData, setApiData] = useState(null);
  const { data, error } = useSWR(`/api/scan/${decodedURL}`);

  return (
    <>
      <div>scan results</div>
    </>
  );
}
