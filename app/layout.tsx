import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { plusJakartaSansFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'App',
  description: 'app description',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn('h-full', 'antialiased', plusJakartaSansFont.variable)}>
      <body className="min-h-full flex flex-col pt-[65px]">{children}</body>
    </html>
  );
}
