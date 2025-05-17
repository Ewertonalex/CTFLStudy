'use client';

import React from 'react';
import Link from 'next/link';
import { syllabusTopics } from '@/data/syllabus';

export default function PorQueTesteNecessarioPage() {
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
        1.2 Por que o Teste é Necessário?
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
        <h2>Introdução à Necessidade de Testes</h2>
        <p>
          O teste de software é uma parte essencial do desenvolvimento de software e da engenharia de sistemas. 
          Realizar testes adequados ajuda a garantir que o software atenda às necessidades dos usuários, além de 
          reduzir o risco de falhas e problemas quando o software estiver em operação.
        </p>

        <h2>Custos da Qualidade</h2>
        <p>
          Um dos principais motivos pelos quais o teste é necessário está relacionado aos custos da qualidade:
        </p>
        <ul>
          <li>
            <strong>Custos de prevenção:</strong> Atividades para prevenir defeitos, como treinamento, análise 
            de requisitos e design de qualidade.
          </li>
          <li>
            <strong>Custos de avaliação:</strong> Atividades para encontrar defeitos, como testes, revisões e inspeções.
          </li>
          <li>
            <strong>Custos de falha interna:</strong> Custos associados a defeitos encontrados antes da entrega, como 
            correção de bugs e reteste.
          </li>
          <li>
            <strong>Custos de falha externa:</strong> Custos associados a defeitos encontrados após a entrega, como 
            suporte ao cliente, reparo, substituição e perda de reputação.
          </li>
        </ul>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
          <h3 className="font-semibold mb-2">Exemplo prático</h3>
          <p>
            Uma empresa de comércio eletrônico lançou uma nova atualização sem testes adequados. Como resultado, 
            ocorreu um erro no sistema de pagamento que permitia cobranças duplicadas dos clientes. Os custos 
            de falha externa incluíram:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Tempo de equipe para identificar e corrigir o problema</li>
            <li>Reembolso de cobranças extras aos clientes</li>
            <li>Resposta a reclamações via canais de suporte</li>
            <li>Danos à reputação da empresa</li>
            <li>Clientes perdidos para concorrentes</li>
          </ul>
          <p className="mt-2">
            Este cenário poderia ter sido evitado com testes adequados antes da implantação.
          </p>
        </div>

        <h2>Garantia de Qualidade e Teste</h2>
        <p>
          Um dos objetivos principais do teste é fornecer informações sobre a qualidade do produto. Quanto mais 
          cedo os defeitos são encontrados no ciclo de vida de desenvolvimento, mais baratos são para corrigir.
        </p>
        <p>
          Algumas estatísticas mostram que o custo de correção de defeitos aumenta significativamente em cada 
          fase do ciclo de desenvolvimento:
        </p>
        <ul>
          <li>Durante a fase de requisitos: 1x (custo base)</li>
          <li>Durante a fase de design: 3-6x</li>
          <li>Durante a fase de codificação: 10x</li>
          <li>Durante os testes: 15-40x</li>
          <li>Após a liberação para produção: 30-100x</li>
        </ul>

        <h2>Causas de Defeitos de Software</h2>
        <p>
          Os defeitos podem ocorrer devido a vários fatores:
        </p>
        <ul>
          <li>Erros humanos na especificação, design, codificação ou configuração</li>
          <li>Pressões de tempo e complexidade</li>
          <li>Mal-entendidos sobre os requisitos</li>
          <li>Tecnologias novas ou desconhecidas</li>
          <li>Interfaces complexas entre componentes e sistemas</li>
        </ul>

        <h2>O Papel do Teste na Melhoria da Qualidade</h2>
        <p>
          O teste contribui para a qualidade de várias maneiras:
        </p>
        <ul>
          <li>
            <strong>Verificação de requisitos:</strong> Garante que o software atenda às necessidades do usuário e 
            requisitos do negócio.
          </li>
          <li>
            <strong>Verificação de conformidade:</strong> Garante que o software esteja de acordo com padrões, 
            regulamentações e especificações técnicas.
          </li>
          <li>
            <strong>Identificação de defeitos:</strong> Encontra problemas antes que eles afetem os usuários reais.
          </li>
          <li>
            <strong>Redução de riscos:</strong> Mitiga riscos relacionados à segurança, desempenho e confiabilidade.
          </li>
          <li>
            <strong>Construção de confiança:</strong> Fornece evidências de que o software está pronto para uso.
          </li>
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
                Mesmo o teste mais minucioso não pode garantir a ausência total de defeitos. É importante combinar testes com outras atividades de garantia de qualidade, como revisões, análise estática e padrões de desenvolvimento.
              </p>
            </div>
          </div>
        </div>

        <h2>Conclusão</h2>
        <p>
          O teste é necessário para reduzir o risco de falhas durante a operação, melhorar a qualidade do software, 
          cumprir requisitos contratuais e legais, e satisfazer as expectativas dos usuários. Um bom processo de teste 
          contribui significativamente para o sucesso de um projeto de software, aumentando a confiabilidade, segurança 
          e satisfação do cliente.
        </p>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link 
          href="/conteudo/fundamentos/o-que-e-teste"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: O que é Teste?
        </Link>
        
        <Link 
          href="/conteudo/fundamentos/sete-principios"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          Próximo: Sete Princípios de Teste
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 