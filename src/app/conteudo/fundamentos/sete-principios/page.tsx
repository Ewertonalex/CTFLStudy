'use client';

import React from 'react';
import Link from 'next/link';
import { syllabusTopics } from '@/data/syllabus';

export default function SetePrincipiosPage() {
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
        1.3 Sete Princípios de Teste
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
          Ao longo de 50 anos de testes de software documentados, um conjunto de princípios de teste 
          foi identificado, fornecendo diretrizes gerais para todos os testes. Estes sete princípios 
          fundamentais formam a base de todo o teste de software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">1. O teste revela a presença de defeitos, não sua ausência</h3>
            <p className="text-gray-700 dark:text-gray-300">
              O teste pode mostrar que defeitos estão presentes, mas não pode provar que não existem defeitos. 
              Mesmo após testes extensivos com muitos casos de teste, não é possível garantir que o software 
              está completamente livre de defeitos.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">2. Teste exaustivo é impossível</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Testar tudo (todas as combinações de entradas e precondições) não é viável, exceto para casos triviais. 
              Em vez de teste exaustivo, deve-se usar análise de risco, técnicas de teste e priorização para 
              concentrar os esforços de teste.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">3. Teste antecipado (early testing)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              As atividades de teste devem começar o mais cedo possível no ciclo de vida de desenvolvimento de software. 
              Quanto mais cedo um defeito é encontrado, menos custoso é para corrigir.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">4. Agrupamento de defeitos</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Um pequeno número de módulos contém a maioria dos defeitos descobertos durante o teste pré-lançamento, 
              ou é responsável pela maioria das falhas operacionais. Este princípio é conhecido como o princípio de Pareto 
              aplicado a testes.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">5. Paradoxo do pesticida</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Se os mesmos testes forem repetidos várias vezes, eventualmente os mesmos casos de teste não encontrarão 
              novos defeitos. Para superar este "paradoxo do pesticida", os casos de teste precisam ser revisados e 
              atualizados regularmente.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">6. O teste depende do contexto</h3>
            <p className="text-gray-700 dark:text-gray-300">
              O teste é feito de maneira diferente em diferentes contextos. Por exemplo, um site de comércio eletrônico 
              é testado de maneira diferente de um aplicativo médico.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700 md:col-span-2">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">7. A falácia da ausência de erros</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Encontrar e corrigir defeitos não ajuda se o sistema construído não atender às necessidades e expectativas dos usuários. 
              Um sistema livre de defeitos mas que não atende aos requisitos dos usuários é inútil.
            </p>
          </div>
        </div>

        <h2>Aplicação dos Princípios na Prática</h2>
        
        <h3>Princípio 1: O teste revela a presença de defeitos</h3>
        <p>
          O objetivo do teste é encontrar defeitos, não provar que o software funciona perfeitamente. 
          Um teste bem-sucedido é aquele que encontra defeitos, não aquele que não encontra problemas.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
          <h4 className="font-semibold mb-2">Exemplo prático</h4>
          <p>
            Uma equipe de teste que relata "zero defeitos" após semanas de testes pode não estar testando 
            de forma eficaz ou pode estar usando casos de teste inadequados. Na prática, os gestores 
            devem questionar quando nenhum defeito é encontrado, não apenas quando muitos defeitos são relatados.
          </p>
        </div>

        <h3>Princípio 2: Teste exaustivo é impossível</h3>
        <p>
          Para ilustrar por que o teste exaustivo é impossível, considere um simples formulário com:
        </p>
        <ul>
          <li>5 campos de texto que aceitam até 20 caracteres cada</li>
          <li>3 menus suspensos com 5 opções cada</li>
          <li>2 botões de rádio</li>
        </ul>
        <p>
          O número de combinações possíveis seria astronômico: (20^5) × (5^3) × 2 = 3.2 × 10^9 combinações!
        </p>
        <p>
          Em vez de tentar o impossível, use:
        </p>
        <ul>
          <li>Análise de risco para priorizar os testes</li>
          <li>Técnicas de design de teste para reduzir o número de casos de teste</li>
          <li>Cobertura de código para verificar quais partes do código foram testadas</li>
        </ul>

        <h3>Princípio 3: Teste antecipado</h3>
        <p>
          O custo de correção de defeitos aumenta significativamente à medida que avançamos no ciclo de vida 
          do desenvolvimento. Quanto mais tarde um defeito é encontrado, mais caro é para corrigir.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
          <h4 className="font-semibold mb-2">Exemplo prático</h4>
          <p>
            Revisar requisitos e especificações de design pode encontrar inconsistências e ambiguidades antes 
            que o código seja escrito. Implementar testes de unidade durante o desenvolvimento permite que os 
            desenvolvedores identifiquem problemas em seu próprio código antes que ele seja integrado com outros componentes.
          </p>
        </div>

        <h3>Princípio 4: Agrupamento de defeitos</h3>
        <p>
          A experiência mostra que os defeitos geralmente se agrupam em partes específicas do sistema. 
          Isso pode ocorrer devido a:
        </p>
        <ul>
          <li>Complexidade do código</li>
          <li>Mudanças frequentes</li>
          <li>Integração entre componentes</li>
          <li>Componentes escritos por programadores menos experientes</li>
        </ul>
        <p>
          Ao identificar "pontos quentes" de defeitos, a equipe de teste pode focar seus esforços em áreas 
          que provavelmente conterão mais problemas.
        </p>

        <h3>Princípio 5: Paradoxo do pesticida</h3>
        <p>
          Para combater o paradoxo do pesticida:
        </p>
        <ul>
          <li>Revise e atualize regularmente os casos de teste</li>
          <li>Crie novos casos de teste que exercitem diferentes partes do sistema</li>
          <li>Use diferentes técnicas de teste (caixa preta, caixa branca, baseadas em experiência)</li>
          <li>Varie os dados de teste</li>
        </ul>

        <h3>Princípio 6: O teste depende do contexto</h3>
        <p>
          Diferentes tipos de software exigem diferentes abordagens de teste:
        </p>
        <ul>
          <li>Software crítico para segurança: testes rigorosos, documentação completa, regulamentações</li>
          <li>E-commerce: foco em segurança, desempenho, experiência do usuário</li>
          <li>Aplicativos móveis: teste em diferentes dispositivos, condições de rede</li>
          <li>Software interno: pode ter menos ênfase em testes de UI, mais foco em funcionalidade</li>
        </ul>

        <h3>Princípio 7: A falácia da ausência de erros</h3>
        <p>
          Um sistema pode ser tecnicamente perfeito, mas ainda falhar se:
        </p>
        <ul>
          <li>Não atender às reais necessidades dos usuários</li>
          <li>For difícil de usar</li>
          <li>Não for compatível com o ambiente de produção</li>
          <li>Não oferecer valor ao negócio</li>
        </ul>
        <p>
          Por isso, é essencial testar não apenas a funcionalidade técnica, mas também a usabilidade, 
          a experiência do usuário e a adequação ao propósito.
        </p>

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
                Os sete princípios de teste não devem ser vistos isoladamente. Eles se complementam e devem 
                ser considerados em conjunto para desenvolver uma estratégia de teste eficaz.
              </p>
            </div>
          </div>
        </div>

        <h2>Conclusão</h2>
        <p>
          Compreender e aplicar os sete princípios de teste permite aos testadores e gerentes de teste 
          desenvolver estratégias mais eficazes, comunicar o valor e as limitações do teste, e estabelecer 
          expectativas realistas sobre o que o teste pode alcançar.
        </p>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link 
          href="/conteudo/fundamentos/por-que-teste-necessario"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Por que o Teste é Necessário?
        </Link>
        
        <Link 
          href="/conteudo/fundamentos/processos-teste"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          Próximo: Processos de Teste
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 