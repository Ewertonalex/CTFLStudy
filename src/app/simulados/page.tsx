import React from 'react';
import Link from 'next/link';

export default function SimuladosPage() {
  // Categorias de simulados disponíveis
  const simuladoCategories = [
    {
      id: 'completo',
      title: 'Simulado Completo',
      description: 'Simulado com 40 questões abordando todo o conteúdo do syllabus, seguindo o formato oficial da prova CTFL.',
      duration: '60 minutos',
      questions: 40,
      path: '/simulados/completo'
    },
    {
      id: 'por-capitulo',
      title: 'Simulado por Capítulo',
      description: 'Teste seus conhecimentos em capítulos específicos do syllabus com simulados focados.',
      duration: '15-20 minutos',
      questions: 10,
      path: '/simulados/capitulos'
    },
    {
      id: 'rapido',
      title: 'Simulado Rápido',
      description: 'Simulados curtos e rápidos para testar seu conhecimento quando você tem pouco tempo disponível.',
      duration: '10 minutos',
      questions: 5,
      path: '/simulados/rapido'
    },
    {
      id: 'dificil',
      title: 'Simulado Avançado',
      description: 'Questões de alta dificuldade para testar profundamente sua compreensão dos conceitos mais complexos.',
      duration: '45 minutos',
      questions: 25,
      path: '/simulados/avancado'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Simulados CTFL</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mb-4 md:mb-0 md:mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Prepare-se para o exame</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nossos simulados são elaborados seguindo o formato oficial da prova CTFL 4.0, com questões
              que abrangem todos os objetivos de aprendizagem do syllabus nos níveis cognitivos corretos (K1, K2 e K3).
              Ao final de cada simulado, você receberá um relatório detalhado com seu desempenho.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {simuladoCategories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02]"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-4 mb-6">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{category.duration}</span>
                </div>
                
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{category.questions} questões</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
              <Link 
                href={category.path}
                className="block w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-md text-center transition-colors"
              >
                Iniciar Simulado
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Dicas para os Simulados</h2>
        
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Reserve um local tranquilo e sem distrações para realizar os simulados.</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cronômetro o seu tempo como na prova real. O exame CTFL tem uma média de 1,5 minutos por questão.</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Revise as questões que errou e entenda o motivo da resposta correta.</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Realize múltiplos simulados até obter uma pontuação consistentemente acima de 75%.</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 