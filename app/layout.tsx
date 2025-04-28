import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { AppProviders } from '@/app/providers';
import { Header } from '@/widgets/header/ui/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vladimir Pestov Portfolio',
  description: 'A personal web developer portfolio with blog',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <Header />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
