import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}