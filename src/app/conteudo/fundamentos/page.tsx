import React from 'react';
import Link from 'next/link';
import { syllabusTopics } from '@/data/syllabus';

export default function FundamentosTestePage() {
  // Encontra o tópico "Fundamentos de Teste" no array de tópicos do syllabus
  const fundamentosData = syllabusTopics.find(topic => topic.id === 'fundamentos');

  return (
    <div className="py-8">
      <div className="mb-6">
        <Link 
          href="/conteudo"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para Conteúdo
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Fundamentos de Teste
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            O capítulo de Fundamentos de Teste aborda os conceitos básicos que todo profissional de teste precisa compreender.
            Ele estabelece a base para o restante do syllabus, definindo o que é teste de software, por que ele é necessário, 
            quais são os princípios fundamentais, os processos essenciais e a importância do fator humano no teste.
          </p>

          <h2 className="mt-8">Visão Geral do Capítulo</h2>
          <p>
            Este capítulo é dividido em cinco seções principais, cada uma abordando aspectos fundamentais do teste de software:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {fundamentosData?.subTopics.map((subTopic) => (
            <div 
              key={subTopic.id} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subTopic.title}</h3>
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  {subTopic.cognitiveLevel}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {getTopicDescription(subTopic.id)}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {subTopic.keywords.map((keyword, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <Link 
                href={subTopic.path}
                className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light text-sm font-medium"
              >
                Estudar este tópico
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">O que você vai aprender neste capítulo</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Definições fundamentais de teste, incluindo conceitos de erro, defeito e falha
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              As razões pelas quais o teste é necessário, incluindo aspectos econômicos e de qualidade
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Os sete princípios fundamentais do teste que guiam as atividades de teste
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              As atividades e artefatos que compõem um processo de teste básico
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              A importância dos fatores psicológicos e habilidades interpessoais no teste
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Estratégia de Estudo Recomendada</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Para dominar este capítulo, sugerimos a seguinte abordagem:
        </p>

        <ol className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Estude cada tópico sequencialmente</p>
              <p className="mt-1">Comece pelo "O que é Teste?" e avance na ordem apresentada para construir seu conhecimento gradualmente.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Responda aos exercícios após cada tópico</p>
              <p className="mt-1">Verifique seu entendimento respondendo aos quizzes e exercícios disponíveis em cada seção.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Faça um simulado sobre Fundamentos</p>
              <p className="mt-1">Após estudar todos os tópicos, teste seu conhecimento geral do capítulo com um <Link href="/simulados/capitulos" className="text-primary hover:underline">simulado específico</Link>.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

// Função auxiliar para obter descrições para cada subtópico
function getTopicDescription(topicId: string): string {
  switch (topicId) {
    case 'fundamentos-1':
      return "Compreenda a definição de teste, os conceitos de erro, defeito e falha, e as diferenças entre verificação e validação.";
    case 'fundamentos-2':
      return "Explore as razões econômicas e de qualidade que tornam o teste necessário, incluindo o custo da qualidade e a gestão de riscos.";
    case 'fundamentos-3':
      return "Estude os sete princípios fundamentais que servem como diretrizes gerais para todos os testes de software.";
    case 'fundamentos-4':
      return "Aprenda sobre as atividades básicas que compõem um processo de teste, desde o planejamento até os relatórios finais.";
    case 'fundamentos-5':
      return "Entenda como fatores humanos, comunicação e mentalidade afetam a eficácia das atividades de teste.";
    default:
      return "Conteúdo do syllabus CTFL relacionado aos fundamentos de teste de software.";
  }
} 