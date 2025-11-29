import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AllHostelsSection from '@/components/AllHostelsSection';
import FilterSection from '@/components/FilterSection';

export default function HostelsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FilterSection />
        <AllHostelsSection />
      </div>
      <Footer />
    </main>
  );
}