'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SplashPage() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Iniciar a animação após um curto atraso
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    // Marcar a animação como completa após a transição
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-primary-dark flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-2xl mx-auto px-4 text-center">
        {/* Logo com animação */}
        <div 
          className={`
            relative z-10 transform transition-all duration-1000 ease-out
            ${loaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
          `}
        >
          <div className="relative inline-block">
            <div className="text-white text-7xl md:text-9xl font-bold mb-4 relative z-10">
              <span className="text-primary-light">CT</span>
              <span className="text-white">FL</span>
            </div>
            
            {/* Círculos decorativos animados */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-primary to-blue-500 opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h1 className={`
            text-white text-2xl md:text-4xl font-light mb-8 transition-all duration-1000 delay-500
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}>
            Certified Tester Foundation Level
          </h1>
          
          <p className={`
            text-gray-300 text-lg md:text-xl mb-12 max-w-xl mx-auto transition-all duration-1000 delay-700
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}>
            Sua plataforma completa para estudos e preparação para a certificação CTFL 4.0
          </p>
          
          <div className={`
            transition-all duration-1000 delay-1000
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Acessar Plataforma</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="absolute inset-0 bg-white group-hover:bg-opacity-0 transition-colors duration-300"></span>
              <span className="group-hover:text-white transition-colors duration-300 relative z-10">Acessar Plataforma</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:text-white transition-colors duration-300 relative z-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Elementos tecnológicos animados */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="absolute w-full h-full">
            {/* Partículas */}
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
            
            {/* Linhas */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" className="opacity-20">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Info tecnológica */}
        <div className={`
          absolute bottom-8 left-0 right-0 text-xs text-gray-400 text-center transition-all duration-1000 delay-1200
          ${loaded ? 'opacity-40' : 'opacity-0'}
        `}>
          <p>Desenvolvido com: Next.js • React • TypeScript • TailwindCSS</p>
        </div>
      </div>

      {/* Animação de estilo de código em absoluto */}
      <div className="absolute top-0 right-0 p-4 text-xs text-left font-mono text-gray-400 opacity-20 max-w-xs overflow-hidden">
        <div className="animate-typing">
          <p>import React from &apos;react&apos;;</p>
          <p>import &#123; QualityTesting &#125; from &apos;@/utils&apos;;</p>
          <p></p>
          <p>function QualityAssurance() &#123;</p>
          <p>&nbsp;&nbsp;return (</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;QualityTesting</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;standard=&quot;CTFL&quot;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version=&quot;4.0&quot;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quality=&#123;100&#125;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</p>
          <p>&nbsp;&nbsp;);</p>
          <p>&#125;</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 10s steps(40, end) infinite;
        }
      `}</style>
    </div>
  );
} 