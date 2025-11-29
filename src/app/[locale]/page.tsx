import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RoomsSection from '@/components/RoomsSection';
import SpecialAccommodationSection from '@/components/SpecialAccommodationSection';
import AmenitiesPreview from '@/components/AmenitiesPreview';
import LocationPreview from '@/components/LocationPreview';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <RoomsSection />
      <SpecialAccommodationSection />
      <AmenitiesPreview />
      <LocationPreview />
      <Footer />
    </main>
  );
}