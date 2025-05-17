import React from 'react';
import { syllabusTopics } from '@/data/syllabus';
import Link from 'next/link';

export default function ConteudoPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Conteúdo do Syllabus CTFL 4.0
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Bem-vindo à seção de conteúdo do CTFL Study! Aqui você encontra todo o material necessário para
          se preparar para o exame de Certificação CTFL (Certified Tester Foundation Level) versão 4.0.
        </p>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          O conteúdo está organizado seguindo exatamente a estrutura do syllabus oficial do ISTQB/BSTQB,
          dividido em 6 capítulos principais e seus respectivos subcapítulos.
        </p>
        
        <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
          <div className="mr-4 text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            Para cada tópico você encontrará explicações detalhadas, exemplos práticos e exercícios interativos 
            para testar seu conhecimento.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {syllabusTopics.map((topic) => (
          <div key={topic.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary dark:text-primary-light mb-2">
                {topic.title}
              </h2>
              
              <ul className="mt-4 space-y-2">
                {topic.subTopics.map((subTopic) => (
                  <li key={subTopic.id}>
                    <Link 
                      href={subTopic.path}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light flex items-center"
                    >
                      <span className="mr-2">•</span>
                      <span>{subTopic.title}</span>
                      <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                        {subTopic.cognitiveLevel}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Link 
                  href={topic.path}
                  className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                >
                  Ver capítulo completo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Dica de Estudo
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Recomendamos seguir a ordem dos capítulos conforme apresentados no syllabus, pois os conceitos estão 
          estruturados de forma que cada capítulo se baseia no conhecimento adquirido nos capítulos anteriores. 
          Para cada tópico, verifique o nível cognitivo (K1, K2 ou K3) para entender a profundidade com que você 
          deve dominar o assunto.
        </p>
      </div>
    </div>
  );
} 