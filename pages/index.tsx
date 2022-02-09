import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import ScanWebPageInput from '@/components/Scanner/ScanWebPageInput';
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
            <p>hello from speed scanr</p>
          </PageSection>

          {/* Input for scanner data */}
          <PageSection>
            <ScanWebPageInput></ScanWebPageInput>
          </PageSection>
        </PageContainer>
      </SWRConfig>
    </div>
  );
}
