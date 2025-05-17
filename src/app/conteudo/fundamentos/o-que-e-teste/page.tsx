import React from 'react';
import Link from 'next/link';

export default function OQueETestePage() {
  return (
    <div className="py-8">
      <div className="mb-6">
        <Link 
          href="/conteudo/fundamentos"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para Fundamentos de Teste
        </Link>
      </div>

      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mr-3">1.1 O que é Teste?</h1>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
          K2
        </span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Definição de Teste de Software</h2>
          <p>
            O teste de software pode ser definido como um conjunto de <strong>atividades realizadas para facilitar a descoberta e/ou avaliação das propriedades de um ou mais itens de teste</strong>. 
            Essas atividades incluem planejamento, preparação, execução, relatório de progresso, e relatório de resultados dos testes.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
            <p className="text-yellow-800 dark:text-yellow-200">
              O teste não é apenas a execução de testes (execução de teste), mas também inclui todas as atividades relacionadas, 
              como planejamento, análise, modelagem e implementação de testes, relatórios de progresso e resultados de 
              testes e avaliação da qualidade de um objeto de teste.
            </p>
          </div>

          <h2>Objetivos do Teste</h2>
          <p>
            Os objetivos típicos do teste incluem:
          </p>

          <ul className="space-y-2">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Verificar se o objeto de teste satisfaz os requisitos especificados</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Demonstrar que o objeto de teste está apto para o propósito pretendido</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Encontrar defeitos e falhas</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Prevenir defeitos</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Fornecer informações para a tomada de decisões</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Reduzir o nível de risco de qualidade de software inadequada</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cumprir requisitos ou normas contratuais, legais ou regulamentares</span>
            </li>
          </ul>

          <h2>Termos Fundamentais</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse my-6">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-200 dark:border-gray-600 px-4 py-2 text-left">Termo</th>
                  <th className="border border-gray-200 dark:border-gray-600 px-4 py-2 text-left">Definição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2 font-medium">Erro</td>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                    Uma ação humana que produz um resultado incorreto.
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-750">
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2 font-medium">Defeito</td>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                    Uma imperfeição ou deficiência em um produto de trabalho onde ele não atende às suas especificações ou requisitos.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2 font-medium">Falha</td>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                    Um evento no qual um componente ou sistema não executa uma função dentro dos limites especificados.
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-750">
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2 font-medium">Teste</td>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                    Um conjunto de atividades realizadas para facilitar a descoberta e/ou avaliação das propriedades de um ou mais itens de teste.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2 font-medium">Testabilidade</td>
                  <td className="border border-gray-200 dark:border-gray-600 px-4 py-2">
                    O grau de facilidade com que um componente ou sistema pode ser testado.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Relação entre Erro, Defeito e Falha</h2>
          <p>
            Um <strong>erro</strong> cometido por um ser humano (programador, analista, testador) pode levar à introdução
            de um <strong>defeito</strong> (bug) no código do software ou em algum documento relacionado. Se o defeito no código for 
            executado, o sistema pode falhar ao realizar o que deveria fazer (ou fazer algo que não deveria), causando uma <strong>falha</strong>.
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg my-6">
            <h3 className="text-gray-800 dark:text-gray-200 mb-2 font-semibold">Exemplo Prático</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Um programador comete um <strong>erro</strong> ao digitar uma condição lógica 
              incorretamente (usando &gt; em vez de &lt;). Isso resulta em um <strong>defeito</strong> 
              no código. Quando o programa é executado e essa parte específica do código é atingida, 
              o sistema exibe um valor incorreto na interface, resultando em uma <strong>falha</strong> observável.
            </p>
          </div>

          <h2>Verificação e Validação</h2>
          <p>
            É importante diferenciar dois conceitos fundamentais:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Verificação</h3>
              <p className="text-blue-600 dark:text-blue-400">
                "Estamos construindo o produto corretamente?"<br />
                Avalia se um produto ou sistema está em conformidade com os requisitos e especificações.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Validação</h3>
              <p className="text-green-600 dark:text-green-400">
                "Estamos construindo o produto correto?"<br />
                Avalia se um produto ou sistema atende às necessidades do usuário e outros stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pontos-Chave para a Certificação</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
            <span className="text-gray-700 dark:text-gray-300">
              Teste é um conjunto de atividades que inclui planejamento, preparação, execução, relatório e avaliação.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
            <span className="text-gray-700 dark:text-gray-300">
              Saiba diferenciar corretamente os conceitos de erro, defeito e falha.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
            <span className="text-gray-700 dark:text-gray-300">
              Compreenda as diferenças entre verificação (estamos construindo o produto corretamente) e validação (estamos construindo o produto correto).
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
            <span className="text-gray-700 dark:text-gray-300">
              Memorize os principais objetivos do teste, como encontrar defeitos, verificar requisitos e reduzir riscos.
            </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-12">
        <div>
          {/* Sem link anterior pois é o primeiro tópico */}
        </div>
        <div>
          <Link 
            href="/conteudo/fundamentos/por-que-teste-necessario"
            className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light"
          >
            Próximo: 1.2 Por que o Teste é Necessário?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Quiz para testar conhecimento */}
      <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Teste seus Conhecimentos</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">
              1. Qual das seguintes afirmações melhor descreve o conceito de teste de software?
            </p>
            <div className="space-y-2">
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-1" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Apenas a execução de casos de teste para encontrar defeitos</span>
              </label>
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-1" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Atividade que ocorre apenas no final do desenvolvimento</span>
              </label>
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-1" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Conjunto de atividades que incluem planejamento, preparação, execução e avaliação</span>
              </label>
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-1" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Processo exclusivamente realizado por testadores profissionais</span>
              </label>
            </div>
          </div>

          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">
              2. Qual é a relação correta entre erro, defeito e falha?
            </p>
            <div className="space-y-2">
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-2" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Um erro sempre causa uma falha, que por sua vez cria um defeito</span>
              </label>
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-2" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Um erro humano pode introduzir um defeito, que quando executado pode causar uma falha</span>
              </label>
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-2" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Um defeito no código causa um erro, que resulta em uma falha quando executado</span>
              </label>
              <label className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <input type="radio" name="quiz-2" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                <span className="ml-2 text-gray-700 dark:text-gray-300">Falha, erro e defeito são termos que significam a mesma coisa</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 