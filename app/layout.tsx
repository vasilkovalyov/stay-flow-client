import type { Metadata } from 'next';

import { plusJakartaSansFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'App',
  description: 'app description',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${plusJakartaSansFont.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
