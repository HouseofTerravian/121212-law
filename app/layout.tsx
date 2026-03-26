import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '121212 Law | Knowledge is Your First Defense.',
  description:
    'Legal education platform empowering Black communities with knowledge of their rights. Know your rights in housing, criminal justice, voting, employment, business, and family law.',
  keywords: ['legal education', 'know your rights', 'civil rights', 'legal resources', '121212'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-white font-sans antialiased">
        <Header />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
