import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import { MetricResult } from '@/types/scan-results';
import { getRank } from 'lib/recommendations';
import { ParsedResults } from 'lib/usePageResultsFetch';
import React, { useState } from 'react';
import AuditResult from './AuditResult';
import MetricCard from './MetricCard';
import MobileDesktopToggle from './MobileDesktopToggle';



export default function ScanResults({ desktopResults, mobileResults }: { desktopResults: ParsedResults['desktop'], mobileResults: ParsedResults['mobile'] }) {


    const [showMobileResults, setShowMobileResults] = useState(true)

    console.log("scan results, desktop:   mobile:", desktopResults, mobileResults)


    return (
        <PageSection fullWidth margin='mt-3' alignment='items-center'>


            {/* Toggle Mobile v. Desktop */}
            <div className="flex items-center gap-x-2">
                <span className={`text-sm tracking-tight ${!showMobileResults ? 'text-blue-900 font-medium' : 'text-gray-600'}`}>Desktop</span>
                <MobileDesktopToggle toggleFunction={setShowMobileResults} toggleState={showMobileResults} />
                <span className={`text-sm tracking-tight ${showMobileResults ? 'text-blue-900 font-medium' : 'text-gray-600'}`}>Mobile</span>
            </div>

            {/* Desktop Metric Results */}
            {desktopResults && !showMobileResults && (
                <div className='grid w-full grid-cols-2 gap-4 mt-4'>
                    {desktopResults.metrics.filter(item => item != null).map((metricItem) => (
                        <div key={metricItem.id} className=''>
                            <MetricCard rank={getRank(metricItem.score)} metricItem={metricItem} />
                        </div>
                    ))
                    }
                </div>
            )}

            {/* Mobile Results */}
            {mobileResults && showMobileResults && (

                <div className='w-full'>
                    {/* Metrics */}
                    <div className='grid w-full grid-cols-2 gap-4 mt-4'>
                        {mobileResults.metrics.filter(item => item != null).map((metricItem) => (
                            <div key={metricItem.id} className=''>
                                <MetricCard rank={getRank(metricItem.score)} metricItem={metricItem} />
                            </div>
                        ))
                        }
                    </div>


                    <h2 className={`mb-3 text-xl font-semibold tracking-tight mt-7 font-inter ${showAuditTitle(mobileResults, 'high') ? 'inline-block' : 'hidden'}`}>High-Priority Audits ({numberOfAudits(mobileResults, 'high')})</h2>


                    {/* High Priority Audits */}
                    <div className='w-full'>
                        {mobileResults.lighthouse.keyAudits.sort((first, second) => first.score - second.score).filter(item => item.score < 0.5).map((keyAuditItem) => (
                            <div key={keyAuditItem.id}>
                                <AuditResult rank={'high'} title={keyAuditItem.title} score={keyAuditItem.score} description={keyAuditItem.description} data={keyAuditItem} />
                            </div>
                        ))}
                    </div>

                    <h2 className={`mb-3 text-xl font-semibold tracking-tight mt-7 font-inter ${showAuditTitle(mobileResults, 'medium') ? 'inline-block' : 'hidden'}`}>Medium-Priority Audits ({numberOfAudits(mobileResults, 'medium')})</h2>


                    {/* Medium Priority Audits */}
                    <div className='w-full'>
                        {mobileResults.lighthouse.keyAudits.sort((first, second) => first.score - second.score).filter(item => item.score > 0.5 && item.score < 0.9).map((keyAuditItem) => (
                            <div key={keyAuditItem.id}>
                                <AuditResult rank={'medium'} title={keyAuditItem.title} score={keyAuditItem.score} description={keyAuditItem.description} data={keyAuditItem} />
                            </div>
                        ))}
                    </div>

                    <h2 className={`mb-3 text-xl font-semibold tracking-tight mt-7 font-inter ${showAuditTitle(mobileResults, 'passed') ? 'inline-block' : 'hidden'}`}>Passed Audits ({numberOfAudits(mobileResults, 'passed')})</h2>


                    {/* Passed Priority Audits */}
                    <div className='w-full'>
                        {mobileResults.lighthouse.keyAudits.sort((first, second) => first.score - second.score).filter(item => item.score > 0.9).map((keyAuditItem) => (
                            <div key={keyAuditItem.id}>
                                <AuditResult rank='passed' title={keyAuditItem.title} score={keyAuditItem.score} description={keyAuditItem.description} data={keyAuditItem} />
                            </div>
                        ))}
                    </div>
                </div>


            )}









        </PageSection >
    );
}

function showAuditTitle(results: ParsedResults['mobile'] | ParsedResults['desktop'], rank: 'passed' | 'high' | 'medium') {

    if (rank === 'high') {
        console.log("filtering out high audits")
        return results.lighthouse.keyAudits.filter(item => item.score < 0.5)?.length > 0
    } else if (rank === 'medium') {
        return results.lighthouse.keyAudits.filter(item => item.score > 0.5 && item.score < 0.9)?.length > 0
    } else {

        return results.lighthouse.keyAudits.filter(item => item.score > 0.9)?.length > 0

    }

}

function numberOfAudits(results: ParsedResults['mobile'] | ParsedResults['desktop'], rank: 'passed' | 'high' | 'medium') {
    if (rank === 'high') {
        console.log("filtering out high audits")
        return results.lighthouse.keyAudits.filter(item => item.score < 0.5)?.length
    } else if (rank === 'medium') {
        return results.lighthouse.keyAudits.filter(item => item.score > 0.5 && item.score < 0.9)?.length
    } else {

        return results.lighthouse.keyAudits.filter(item => item.score > 0.9)?.length

    }
}
