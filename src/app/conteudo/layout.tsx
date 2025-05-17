'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/context/ThemeProvider';

export default function ConteudoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-col lg:flex-row flex-grow">
          <Sidebar />
          <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 