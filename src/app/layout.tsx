import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'CTFL Study - Plataforma de Estudos para Certificação CTFL',
  description: 'Plataforma educacional moderna para profissionais de Qualidade de Software que estão estudando para certificação CTFL - Certified Tester Foundation Level',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 