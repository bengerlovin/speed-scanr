import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import { useRouter } from 'next/router';
import React from 'react';

export default function ScanResultsPage() {
  const router = useRouter();

  const { url } = router.query;

  console.log(url);

  return (
    <PageContainer>
      <PageSection>
        <div className='flex'>{url}</div>
      </PageSection>
    </PageContainer>
  );
}
