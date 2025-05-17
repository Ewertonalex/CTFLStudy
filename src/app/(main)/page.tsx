'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/90 to-primary-dark text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">CTFL Study</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              A plataforma definitiva para sua certificação ISTQB CTFL - Certified Tester Foundation Level
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/conteudo" 
                className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                Explorar Conteúdo
              </Link>
              <Link 
                href="/simulados" 
                className="px-6 py-3 bg-primary-dark text-white font-medium rounded-lg hover:bg-primary-dark/90 transition-colors border border-white/30 shadow-md"
              >
                Fazer Simulado
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tudo que você precisa para ser aprovado
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A plataforma CTFL Study oferece todas as ferramentas necessárias para sua preparação completa para o exame de certificação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "📚",
              title: "Conteúdo Completo",
              description: "Todo o conteúdo do syllabus CTFL 4.0 em português, organizado por capítulos e com explicações claras.",
              link: "/conteudo"
            },
            {
              icon: "📝",
              title: "Simulados",
              description: "Simulados no formato oficial da prova, com timer, análise de desempenho e recomendações personalizadas.",
              link: "/simulados"
            },
            {
              icon: "🎮",
              title: "Quiz Game",
              description: "Teste seus conhecimentos de forma divertida com diferentes modos de jogo.",
              link: "/quiz"
            },
            {
              icon: "📅",
              title: "Plano de Estudos",
              description: "Plano personalizado baseado na sua disponibilidade e nível de conhecimento atual.",
              link: "/plano"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <Link 
                href={feature.link} 
                className="text-primary dark:text-primary-light font-medium hover:underline inline-flex items-center"
              >
                Acessar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* About CTFL Section */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                O que é o CTFL?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                O CTFL (Certified Tester Foundation Level) é o primeiro nível de certificação do ISTQB (International Software Testing Qualifications Board), reconhecido mundialmente como o padrão de qualificação em testes de software.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A certificação valida seus conhecimentos sobre fundamentos de teste, incluindo terminologias, conceitos, métodos e técnicas essenciais para a profissão.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary dark:text-primary-light mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    Reconhecido internacionalmente em mais de 100 países
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary dark:text-primary-light mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    Mais de 1 milhão de profissionais certificados no mundo
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-primary dark:text-primary-light mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    Exame atualizado para a versão 4.0 em 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Pessoa estudando para certificação"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Pronto para iniciar sua jornada?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Comece agora mesmo a explorar todo o conteúdo e recursos disponíveis para sua preparação completa para o exame CTFL.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            href="/conteudo" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-md"
          >
            Explorar Conteúdo
          </Link>
          <Link 
            href="/downloads" 
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
          >
            Baixar Materiais
          </Link>
        </div>
      </div>
    </main>
  );
} 