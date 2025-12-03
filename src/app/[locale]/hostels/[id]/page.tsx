import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HostelDetails from '@/components/HostelDetails';
import {getHostelById, roomTypes} from '@/data/hostels';

interface HostelPageProps {
  params: {
    locale: string;
    id: string;
  };
}

export function generateStaticParams() {
  return roomTypes.map((room) => ({
    id: room.id,
  }));
}

export default function HostelPage({params}: HostelPageProps) {
  setRequestLocale(params.locale);
  
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