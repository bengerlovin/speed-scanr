import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import Scanner from '@/components/Scanner/Scanner';
import ScanWebPageInput from '@/components/Scanner/ScanForm';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import Link from 'next/link';
import { SWRConfig } from 'swr';

export default function Home() {
  return (
    <div>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <PageContainer>
          <PageSection>
            <h1 className='text-[42px] leading-[1.15] font-bold tracking-tight text-gray-800 font-inter'>Pagespeed Data Simplified</h1>
            <p className='mt-4 tracking-tight leading-[1.38]'>Test your website's performance and get prioritized, actionable tips on how to improve it. </p>
          </PageSection>

          {/* scanner */}
          <PageSection>
            <Scanner />
          </PageSection>


        </PageContainer>
      </SWRConfig>
    </div>
  );
}
