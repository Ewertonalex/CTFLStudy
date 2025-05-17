'use client';

import React from 'react';
import Link from 'next/link';
import { syllabusTopics } from '@/data/syllabus';

export default function ProcessosTestePage() {
  return (
    <div className="py-6">
      <div className="mb-6 flex justify-between items-center">
        <Link 
          href="/conteudo/fundamentos"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para Fundamentos
        </Link>
        
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        1.4 Processos de Teste
      </h1>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 flex items-start">
        <span className="text-blue-500 mr-3 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div>
          <p className="text-blue-800 dark:text-blue-200 font-medium">
            Nível Cognitivo: K2 (Entender)
          </p>
          <p className="text-blue-600 dark:text-blue-300 text-sm mt-1">
            Explicar, exemplificar, resumir e classificar ideias e conceitos.
          </p>
        </div>
      </div>

      <div className="prose prose-blue max-w-none dark:prose-invert">
        <p>
          Um processo de teste eficaz é essencial para garantir que o software atenda aos requisitos e 
          expectativas dos stakeholders. Nesta seção, exploraremos as atividades principais do processo 
          de teste, suas interações e como se encaixam no ciclo de desenvolvimento de software.
        </p>

        <h2>Visão Geral do Processo de Teste</h2>
        <p>
          O processo de teste não é uma sequência linear de atividades, mas um conjunto de atividades 
          interdependentes que ocorrem ao longo do ciclo de vida do desenvolvimento. As principais 
          atividades de teste incluem:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden my-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Planejamento</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Definir os objetivos e a abordagem do teste, incluindo escopo, riscos, cronograma, recursos e métodos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Monitoramento e Controle</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Avaliação contínua do progresso dos testes em relação ao plano, tomando ações corretivas quando necessário.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Análise</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Examinar a base de teste (requisitos, design, código) para identificar o que testar e definir condições de teste.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Modelagem</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Criar e priorizar casos de teste, conjuntos de teste e dados de teste, especificando procedimentos de teste.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Implementação</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Preparar o ambiente de teste, automatizar testes conforme necessário e organizar os casos de teste em suítes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Execução</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Executar os casos de teste, registrar resultados, comparar resultados reais com esperados e relatar defeitos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-4 lg:col-span-1 bg-primary/5 dark:bg-primary-dark/10">
              <h3 className="font-semibold text-primary dark:text-primary-light text-lg">Conclusão</h3>
            </div>
            <div className="p-4 lg:col-span-5">
              <p className="text-gray-700 dark:text-gray-300">
                Coletar dados de teste, consolidar resultados, escrever relatórios de teste e arquivar artefatos de teste.
              </p>
            </div>
          </div>
        </div>

        <h2>Produtos de Trabalho do Teste</h2>
        <p>
          Cada atividade do processo de teste produz artefatos ou produtos de trabalho específicos:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">Atividade</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">Produtos de Trabalho</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Planejamento</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Plano de teste</li>
                    <li>Estratégia de teste</li>
                    <li>Cronograma de teste</li>
                    <li>Estimativas e orçamento</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Monitoramento e Controle</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Relatórios de progresso do teste</li>
                    <li>Métricas de teste</li>
                    <li>Ações corretivas documentadas</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Análise</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Condições de teste definidas</li>
                    <li>Matriz de rastreabilidade</li>
                    <li>Lista de riscos priorizados</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Modelagem</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Casos de teste documentados</li>
                    <li>Dados de teste</li>
                    <li>Conjuntos de teste</li>
                    <li>Procedimentos de teste</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Implementação</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Ambiente de teste configurado</li>
                    <li>Scripts de teste automatizados</li>
                    <li>Ferramentas de teste configuradas</li>
                    <li>Suítes de teste organizadas</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Execução</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Registros de execução de teste</li>
                    <li>Relatórios de defeitos</li>
                    <li>Logs de teste</li>
                    <li>Evidências de teste</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Conclusão</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Relatório de resumo do teste</li>
                    <li>Lições aprendidas</li>
                    <li>Recomendações de melhoria</li>
                    <li>Artefatos de teste arquivados</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Rastreabilidade nos Testes</h2>
        <p>
          A rastreabilidade no processo de teste estabelece relações entre diferentes artefatos, como:
        </p>
        <ul>
          <li>Requisitos → Condições de teste → Casos de teste</li>
          <li>Casos de teste → Scripts de teste → Resultados de teste</li>
          <li>Defeitos → Casos de teste que os encontraram</li>
          <li>Requisitos → Componentes testados → Casos de teste</li>
        </ul>
        <p>
          A rastreabilidade adequada facilita:
        </p>
        <ul>
          <li>Análise de impacto quando requisitos mudam</li>
          <li>Verificação da cobertura de teste</li>
          <li>Auditoria e conformidade</li>
          <li>Melhoria da qualidade do processo de teste</li>
        </ul>

        <h2>Adaptação do Processo de Teste</h2>
        <p>
          O processo de teste deve ser adaptado ao contexto do projeto, considerando:
        </p>
        <ul>
          <li>Modelo de ciclo de vida de desenvolvimento (cascata, ágil, DevOps)</li>
          <li>Riscos do projeto e do produto</li>
          <li>Tamanho e complexidade do projeto</li>
          <li>Restrições organizacionais e regulatórias</li>
          <li>Objetivos de negócio</li>
        </ul>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
          <h3 className="font-semibold mb-2">Exemplo: Adaptação para Desenvolvimento Ágil</h3>
          <p className="mb-2">
            Em um projeto ágil, o processo de teste é adaptado para se integrar às iterações curtas:
          </p>
          <ul className="list-disc pl-5">
            <li>Planejamento de teste incorporado ao planejamento da sprint</li>
            <li>Análise e modelagem acontecem continuamente</li>
            <li>Automação de teste é fortemente enfatizada</li>
            <li>Testes são executados continuamente (integração contínua)</li>
            <li>Feedback rápido através de testes automatizados</li>
            <li>Documentação leve, com foco em testes automatizados como documentação viva</li>
          </ul>
        </div>

        <h2>Fatores de Sucesso para o Processo de Teste</h2>
        <p>
          Para que o processo de teste seja bem-sucedido, é importante considerar:
        </p>
        <ul>
          <li>Alinhamento com os objetivos de negócio e necessidades dos stakeholders</li>
          <li>Integração precoce das atividades de teste no ciclo de vida</li>
          <li>Equilíbrio entre teste estático e dinâmico</li>
          <li>Uso adequado de ferramentas e automação de teste</li>
          <li>Bom relacionamento entre testadores e desenvolvedores</li>
          <li>Priorização baseada em riscos</li>
          <li>Métricas apropriadas para monitorar e melhorar o processo</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6">
          <div className="flex items-start">
            <span className="text-yellow-500 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </span>
            <div>
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                Ponto importante!
              </p>
              <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                As atividades do processo de teste não são sequenciais. Na prática, elas se sobrepõem, 
                ocorrem em paralelo e são repetidas conforme necessário durante o ciclo de vida do projeto.
              </p>
            </div>
          </div>
        </div>

        <h2>Conclusão</h2>
        <p>
          Um processo de teste bem definido e adaptado ao contexto do projeto é essencial para garantir 
          a qualidade do software. As atividades de teste devem ser integradas ao ciclo de vida de desenvolvimento, 
          com foco em encontrar defeitos precocemente e fornecer feedback valioso para a equipe de desenvolvimento.
        </p>
        <p>
          Independentemente da metodologia utilizada, os princípios fundamentais do processo de teste 
          permanecem os mesmos, embora a forma como são implementados possa variar. O objetivo final é 
          sempre garantir que o software atenda às necessidades e expectativas dos usuários e stakeholders.
        </p>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link 
          href="/conteudo/fundamentos/sete-principios"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Sete Princípios de Teste
        </Link>
        
        <Link 
          href="/conteudo/fundamentos/psicologia-teste"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          Próximo: A Psicologia do Teste
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 