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
          <PageSection fullWidth alignment='items-center'>
            <h1 className='text-[43px] leading-[1.15] font-extrabold tracking-heading text-gray-800 font-inter text-center'>Pagespeed Results Simplified</h1>
            <p className='text-center mt-4 tracking-tight leading-[1.38]'>{`Test your website's performance and get prioritized, actionable tips on how to improve it. `}</p>
          </PageSection>

          {/* scanner */}
          <PageSection fullWidth alignment='items-center' margin='mt-2'>
            <Scanner />
          </PageSection>


        </PageContainer>
      </SWRConfig>
    </div>
  );
}
