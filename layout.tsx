
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sherwood Pharmacy', // Browser tab title
  description: 'Your trusted local pharmacy',
  icons: {
    icon: '/logo.jpg', // Path from the public folder
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
