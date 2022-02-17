import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import usePageResultsFetch from 'lib/usePageResultsFetch';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function ScanResultsPage() {


  const router = useRouter();
  let url = router.query.url as string // router query can get multiple params?

  const { data, isLoading, errorData, errorState } = usePageResultsFetch(url);





  return (
    <PageContainer>
      <PageSection>
        <div className='flex'>{url}</div>


        {data && (
          <div>fetched data {JSON.stringify(data)}</div>
        )}

        {isLoading && (
          <p>loading</p>
        )}



      </PageSection>
    </PageContainer>
  );
}
