import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import { useRouter } from 'next/router';
import React from 'react';

export default function ScanResultsPage() {
  const router = useRouter();

  const { url } = router.query; // router query can get multiple params?

  console.log(url);

  return (
    <PageContainer>
      <PageSection>
        <div className='flex'>{url}</div>
      </PageSection>
    </PageContainer>
  );
}
