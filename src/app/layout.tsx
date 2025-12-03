import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Iranian Hostel Dubai',
    default: 'Iranian Hostel Dubai - Comfortable Accommodation in Naif'
  },
  description: 'Experience authentic Persian hospitality at Iranian Hostel Dubai. Located near Baniyas Metro in Naif District, we offer comfortable shared accommodations perfect for travelers.',
  keywords: ['Dubai hostel', 'Iranian hostel', 'Naif accommodation', 'budget hotel Dubai', 'Deira hostel'],
  authors: [{name: 'Iranian Hostel Dubai'}],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fa_IR'],
    siteName: 'Iranian Hostel Dubai',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://iranianhosteldubai.com'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}