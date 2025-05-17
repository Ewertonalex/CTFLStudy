'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CTFL Study</h3>
            <p className="text-gray-300 mb-4">
              A plataforma educacional definitiva para sua certificação ISTQB CTFL - Certified Tester Foundation Level
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/conteudo" className="text-gray-300 hover:text-white transition-colors">
                  Conteúdo do Syllabus
                </Link>
              </li>
              <li>
                <Link href="/simulados" className="text-gray-300 hover:text-white transition-colors">
                  Simulados
                </Link>
              </li>
              <li>
                <Link href="/plano" className="text-gray-300 hover:text-white transition-colors">
                  Plano de Estudos
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-300 hover:text-white transition-colors">
                  Quiz Game
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Materiais</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-white transition-colors">
                  Syllabus CTFL 4.0
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-white transition-colors">
                  Materiais de Estudo
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-white transition-colors">
                  Glossário
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://bstqb.online/ctfl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  BSTQB Oficial
                </a>
              </li>
              <li>
                <a href="https://www.istqb.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  ISTQB Internacional
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CTFL Study. Desenvolvido por <a href="https://www.linkedin.com/in/ewertonalexander/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline">Ewerton Alexander</a>
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 