import React from 'react';

export default function ScanResultsPage({ encodedUrl }) {
  const decodedUrl = decodeURIComponent(encodedUrl as string);

  return <div>ScanResultsPage</div>;
}
