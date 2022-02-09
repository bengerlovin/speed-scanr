import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <NavBar />

      <PageContainer>
        <div className='flex'>hello from speed scanr</div>
      </PageContainer>

      <Footer />
    </div>
  );
}
