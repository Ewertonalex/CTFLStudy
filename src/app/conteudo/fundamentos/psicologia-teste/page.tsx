'use client';

import React from 'react';
import Link from 'next/link';
import { syllabusTopics } from '@/data/syllabus';

export default function PsicologiaTestePage() {
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
        1.5 A Psicologia do Teste
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
          O teste de software é uma atividade humana e, como tal, é fortemente influenciado pela 
          psicologia das pessoas envolvidas. Compreender os aspectos psicológicos do teste é crucial 
          para estabelecer um processo de teste eficaz e uma cultura de qualidade positiva.
        </p>

        <h2>Mentalidade de Desenvolvedor vs. Testador</h2>
        <p>
          Desenvolvedores e testadores frequentemente têm abordagens psicológicas diferentes para o software:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">Mentalidade do Desenvolvedor</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Foco em criar e construir</li>
              <li>Tendência a ser otimista sobre o código</li>
              <li>Apego natural ao próprio trabalho</li>
              <li>Procura soluções para problemas</li>
              <li>Ênfase em fazer o software funcionar</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">Mentalidade do Testador</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Foco em encontrar falhas</li>
              <li>Tendência a ser mais cético e curioso</li>
              <li>Distanciamento do código para avaliação imparcial</li>
              <li>Procura cenários onde problemas podem ocorrer</li>
              <li>Ênfase em encontrar situações onde o software pode falhar</li>
            </ul>
          </div>
        </div>

        <p>
          Essas diferenças de mentalidade são complementares e valiosas para o processo de 
          desenvolvimento de software. A tensão criativa entre essas duas abordagens pode 
          levar a um software de melhor qualidade.
        </p>

        <h2>Vieses Cognitivos no Teste</h2>
        <p>
          Como seres humanos, testadores e desenvolvedores estão sujeitos a vários 
          vieses cognitivos que podem afetar a eficácia do teste:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">Viés</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">Descrição</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">Impacto no Teste</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Viés de confirmação</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Tendência de buscar informações que confirmem crenças existentes.
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Testadores podem focar apenas em casos que confirmem que o software funciona, ignorando cenários de falha.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Efeito de ancoragem</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Tendência de se apoiar fortemente na primeira informação recebida.
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Pode limitar a exploração de novas áreas de teste se os primeiros testes não encontrarem problemas.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Viés de disponibilidade</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Tendência de considerar informações facilmente lembradas como mais importantes.
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Testadores podem repetir casos de teste que encontraram bugs no passado, negligenciando novas áreas.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">Ponto cego do conhecimento</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Dificuldade em perceber perspectivas alheias ou ignorância própria.
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Pode impedir testadores de considerar como usuários menos experientes usariam o sistema.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Reconhecer esses vieses é o primeiro passo para mitigá-los. Técnicas como revisão por pares, 
          testes cruzados e rotação de tarefas podem ajudar a reduzir o impacto desses vieses.
        </p>

        <h2>Independência do Teste</h2>
        <p>
          A independência no teste refere-se ao grau de separação entre quem desenvolve e quem testa o software. 
          Níveis crescentes de independência no teste geralmente aumentam a eficácia na detecção de defeitos, 
          mas também podem aumentar o distanciamento, custos e tempo.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700 my-6">
          <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">Níveis de Independência</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Testes pelo próprio desenvolvedor:</strong> O desenvolvedor testa seu próprio código.
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-medium">Vantagem:</span> Conhecimento profundo do código. 
                <span className="font-medium ml-2">Desvantagem:</span> Mesmos pontos cegos e vieses que levaram aos defeitos.
              </div>
            </li>
            <li>
              <strong>Testes por outros desenvolvedores:</strong> Desenvolvedores testam o código uns dos outros.
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-medium">Vantagem:</span> Ainda há conhecimento técnico, mas olhar fresco. 
                <span className="font-medium ml-2">Desvantagem:</span> Cultura de equipe pode inibir críticas.
              </div>
            </li>
            <li>
              <strong>Testes por uma equipe de teste dedicada:</strong> Uma equipe separada, mas dentro da mesma organização.
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-medium">Vantagem:</span> Perspectiva diferente, foco em qualidade. 
                <span className="font-medium ml-2">Desvantagem:</span> Pode criar "nós vs. eles".
              </div>
            </li>
            <li>
              <strong>Testes por organização externa:</strong> Consultores ou empresas especializadas em teste.
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-medium">Vantagem:</span> Máxima independência, experiência diversificada. 
                <span className="font-medium ml-2">Desvantagem:</span> Maior custo, menos conhecimento do domínio.
              </div>
            </li>
          </ol>
        </div>

        <p>
          A abordagem ideal geralmente combina diferentes níveis de independência para diferentes tipos de teste. 
          Por exemplo, testes unitários pelos desenvolvedores, testes de integração por outros desenvolvedores e 
          testes de sistema/aceitação por uma equipe independente.
        </p>

        <h2>Comunicação e Feedback</h2>
        <p>
          A forma como as descobertas do teste são comunicadas tem um impacto significativo 
          na recepção e nas ações subsequentes. Uma comunicação eficaz é essencial para que 
          o teste cumpra seu propósito de melhorar a qualidade do software.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
          <h3 className="font-semibold mb-2">Diretrizes para Comunicação Eficaz</h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Seja objetivo e factual:</strong> Concentre-se nos fatos observáveis, não em opiniões ou julgamentos.
            </li>
            <li>
              <strong>Comunique o valor do teste:</strong> Explique como o teste contribui para a qualidade do produto.
            </li>
            <li>
              <strong>Evite linguagem acusatória:</strong> Use "o sistema" em vez de "seu código" ao relatar defeitos.
            </li>
            <li>
              <strong>Forneça contexto completo:</strong> Inclua todas as informações necessárias para reproduzir e entender o problema.
            </li>
            <li>
              <strong>Priorize problemas:</strong> Ajude a equipe a focar nos problemas mais críticos primeiro.
            </li>
            <li>
              <strong>Reconheça o bom trabalho:</strong> Não se concentre apenas em problemas, mas também em aspectos positivos.
            </li>
            <li>
              <strong>Mantenha-se aberto a discussões:</strong> Esteja disposto a colaborar na compreensão e resolução de problemas.
            </li>
          </ul>
        </div>

        <h2>Lidando com Desafios Psicológicos</h2>
        <p>
          Testar software pode apresentar vários desafios psicológicos para todas as partes envolvidas. 
          Algumas estratégias podem ajudar a criar um ambiente mais saudável:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">Para Testadores</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Reconheça que seu papel é melhorar o produto, não criticar pessoas</li>
              <li>Cultive empatia pelos desafios dos desenvolvedores</li>
              <li>Apresente problemas como oportunidades de melhoria</li>
              <li>Destaque também aspectos positivos do software</li>
              <li>Desenvolva habilidades de comunicação e diplomacia</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">Para Desenvolvedores</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Veja os defeitos como parte normal do processo de desenvolvimento</li>
              <li>Separe sua identidade profissional do código que escreve</li>
              <li>Considere o feedback de teste como valioso para seu crescimento</li>
              <li>Cultive abertura para receber críticas construtivas</li>
              <li>Colabore com testadores para entender problemas complexos</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700 my-6">
          <h3 className="text-lg font-semibold text-primary dark:text-primary-light mb-3">Para Gerentes</h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Crie uma cultura onde encontrar defeitos seja visto positivamente como melhoria da qualidade</li>
            <li>Reconheça e celebre tanto desenvolvedores quanto testadores</li>
            <li>Evite usar métricas de defeitos para avaliar desempenho individual</li>
            <li>Facilite a comunicação aberta entre equipes de desenvolvimento e teste</li>
            <li>Promova entendimento mútuo através de atividades colaborativas</li>
            <li>Forneça treinamento em habilidades de comunicação e resolução de conflitos</li>
          </ul>
        </div>

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
                A psicologia do teste não é apenas sobre encontrar defeitos, mas também sobre como as pessoas 
                trabalham juntas para melhorar a qualidade do software. O sucesso do teste depende tanto de 
                habilidades técnicas quanto de habilidades interpessoais.
              </p>
            </div>
          </div>
        </div>

        <h2>Desenvolvimento de uma Mentalidade de Teste</h2>
        <p>
          Para quem está começando na área de teste, desenvolver uma mentalidade de teste pode levar tempo. 
          Algumas práticas que podem ajudar incluem:
        </p>
        <ul>
          <li>Cultivar curiosidade e ceticismo saudável</li>
          <li>Praticar a identificação de casos limite e exceções</li>
          <li>Pensar como diferentes tipos de usuários</li>
          <li>Questionar suposições e explorar cenários inesperados</li>
          <li>Desenvolver habilidades de observação detalhada</li>
          <li>Aprender com testes bem-sucedidos e malsucedidos</li>
        </ul>

        <h2>Conclusão</h2>
        <p>
          A psicologia do teste é um elemento fundamental para a eficácia do processo de teste e a qualidade 
          do software. Compreender os aspectos humanos do teste, incluindo mentalidades diferentes, vieses 
          cognitivos e dinâmicas interpessoais, é tão importante quanto dominar técnicas e ferramentas de teste.
        </p>
        <p>
          Uma abordagem equilibrada que reconhece tanto os aspectos técnicos quanto psicológicos do teste 
          cria um ambiente onde a qualidade pode florescer, beneficiando todos os envolvidos: desenvolvedores, 
          testadores, gerentes e, mais importante, os usuários finais do software.
        </p>
      </div>
      
      <div className="mt-12 flex justify-between">
        <Link 
          href="/conteudo/fundamentos/processos-teste"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Processos de Teste
        </Link>
        
        <Link 
          href="/conteudo/ciclo-vida"
          className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
        >
          Próximo: Testes ao longo do Ciclo de Vida
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 