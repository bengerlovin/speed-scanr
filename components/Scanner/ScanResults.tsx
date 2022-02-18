import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import { MetricResult } from '@/types/scan-results';
import usePageResultsFetch from 'lib/usePageResultsFetch';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import MobileDesktopToggle from './MobileDesktopToggle';



export default function ScanResults() {


    console.log("------------------- scan results re rendered ----------------")




    return (
        <PageSection>

            <p>in scan results!</p>


            {/* {data && (
                <div className='flex flex-col flex-wrap'>
                    <div>fetched data !!!! </div>
                    <MobileDesktopToggle toggleState={showMobileResults} toggleFunction={setShowMobileResults} />

                    <div>
                        {showMobileResults && (
                            <p>showing mobile</p>
                        )}
                        {!showMobileResults && (
                            <p>desktop</p>
                        )}
                    </div>

                    <div>
                        <p>type of data.desktop.metrics: {typeof data.desktop.metrics}</p>
                        
                    </div>
                </div>
            )} */}




        </PageSection>
    );
}
