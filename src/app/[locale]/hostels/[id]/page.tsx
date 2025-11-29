import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HostelDetails from '@/components/HostelDetails';
import { getHostelById } from '@/data/hostels';

interface HostelPageProps {
  params: {
    locale: string;
    id: string;
  };
}

export default function HostelPage({ params }: HostelPageProps) {
  const hostel = getHostelById(params.id);

  if (!hostel) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <HostelDetails hostel={hostel} />
      </div>
      <Footer />
    </main>
  );
}