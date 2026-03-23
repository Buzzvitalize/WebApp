import type { Metadata } from 'next';
import './globals.css';
import '@/styles/tile-effects.css';

export const metadata: Metadata = {
  title: 'Lucky Farm Town',
  description: 'A modern farming + slots web game prototype built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
