// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Kokep Tech Solutions',
  description: 'Empowering Digital Futures Through Innovation and Real Tech Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}
      >
        <Navbar />

        <main className="min-h-screen px-4 py-8 md:px-8 lg:px-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
