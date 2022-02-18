import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import usePageResultsFetch from 'lib/usePageResultsFetch';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';



export default function ScanResults({ url }: { url: string }) {


    const { data, isLoading, errorData, errorState } = usePageResultsFetch(url);



    return (
        <PageSection>
            <div className='flex'>{url}</div>


            {data && (
                <div className='flex flex-wrap'>
                    <div>fetched data !!!! </div>
                </div>
            )}

            {isLoading && (
                <div>
                    <p>Skeleton loader</p>
                    <div className='w-5 h-5 rounded skeleton-loader md'></div>
                </div>
            )}



        </PageSection>
    );
}
