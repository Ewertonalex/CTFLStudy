'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Estrutura de tópicos do syllabus
const syllabusTopics = [
  {
    id: 'fundamentos',
    title: 'Fundamentos de Teste',
    path: '/conteudo/fundamentos',
    subTopics: [
      { id: 'fundamentos-1', title: '1.1 O que é Teste?', path: '/conteudo/fundamentos/o-que-e-teste' },
      { id: 'fundamentos-2', title: '1.2 Por que o Teste é Necessário?', path: '/conteudo/fundamentos/por-que-teste-necessario' },
      { id: 'fundamentos-3', title: '1.3 Sete Princípios de Teste', path: '/conteudo/fundamentos/sete-principios' },
      { id: 'fundamentos-4', title: '1.4 Processos de Teste', path: '/conteudo/fundamentos/processos-teste' },
      { id: 'fundamentos-5', title: '1.5 A Psicologia do Teste', path: '/conteudo/fundamentos/psicologia-teste' },
    ]
  },
  {
    id: 'ciclo-vida',
    title: 'Testes ao longo do Ciclo de Vida',
    path: '/conteudo/ciclo-vida',
    subTopics: [
      { id: 'ciclo-vida-1', title: '2.1 Modelos de Ciclo de Vida', path: '/conteudo/ciclo-vida/modelos-ciclo-vida' },
      { id: 'ciclo-vida-2', title: '2.2 Níveis de Teste', path: '/conteudo/ciclo-vida/niveis-teste' },
      { id: 'ciclo-vida-3', title: '2.3 Tipos de Teste', path: '/conteudo/ciclo-vida/tipos-teste' },
      { id: 'ciclo-vida-4', title: '2.4 Testes de Manutenção', path: '/conteudo/ciclo-vida/testes-manutencao' },
    ]
  },
  {
    id: 'estatico',
    title: 'Teste Estático',
    path: '/conteudo/estatico',
    subTopics: [
      { id: 'estatico-1', title: '3.1 Básico de Teste Estático', path: '/conteudo/estatico/basico-teste-estatico' },
      { id: 'estatico-2', title: '3.2 Processo de Revisão', path: '/conteudo/estatico/processo-revisao' },
    ]
  },
  {
    id: 'analise-modelagem',
    title: 'Análise e Modelagem de Teste',
    path: '/conteudo/analise-modelagem',
    subTopics: [
      { id: 'analise-1', title: '4.1 Categorias de Técnicas', path: '/conteudo/analise-modelagem/categorias-tecnicas' },
      { id: 'analise-2', title: '4.2 Técnicas Caixa-Preta', path: '/conteudo/analise-modelagem/tecnicas-caixa-preta' },
      { id: 'analise-3', title: '4.3 Técnicas Caixa-Branca', path: '/conteudo/analise-modelagem/tecnicas-caixa-branca' },
      { id: 'analise-4', title: '4.4 Técnicas Baseadas em Experiência', path: '/conteudo/analise-modelagem/tecnicas-experiencia' },
    ]
  },
  {
    id: 'gerenciamento',
    title: 'Gerenciamento das Atividades de Teste',
    path: '/conteudo/gerenciamento',
    subTopics: [
      { id: 'gerenciamento-1', title: '5.1 Organização do Teste', path: '/conteudo/gerenciamento/organizacao-teste' },
      { id: 'gerenciamento-2', title: '5.2 Planejamento e Estimativas', path: '/conteudo/gerenciamento/planejamento-estimativas' },
      { id: 'gerenciamento-3', title: '5.3 Monitoramento e Controle', path: '/conteudo/gerenciamento/monitoramento-controle' },
      { id: 'gerenciamento-4', title: '5.4 Gestão de Configuração', path: '/conteudo/gerenciamento/gestao-configuracao' },
      { id: 'gerenciamento-5', title: '5.5 Riscos e Testes', path: '/conteudo/gerenciamento/riscos-testes' },
      { id: 'gerenciamento-6', title: '5.6 Gestão de Defeitos', path: '/conteudo/gerenciamento/gestao-defeitos' },
    ]
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas de Teste',
    path: '/conteudo/ferramentas',
    subTopics: [
      { id: 'ferramentas-1', title: '6.1 Considerações sobre Ferramentas', path: '/conteudo/ferramentas/consideracoes' },
      { id: 'ferramentas-2', title: '6.2 Uso Efetivo de Ferramentas', path: '/conteudo/ferramentas/uso-efetivo' },
    ]
  }
];

const Sidebar = () => {
  const pathname = usePathname();
  const [openTopics, setOpenTopics] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setOpenTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId) 
        : [...prev, topicId]
    );
  };

  const isActive = (path: string) => pathname === path;
  
  // Mostrar automaticamente o tópico ativo
  React.useEffect(() => {
    const activeTopic = syllabusTopics.find(topic => 
      topic.subTopics.some(subTopic => pathname === subTopic.path)
    );
    
    if (activeTopic && !openTopics.includes(activeTopic.id)) {
      setOpenTopics(prev => [...prev, activeTopic.id]);
    }
  }, [pathname]);

  return (
    <aside className="w-full lg:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Conteúdo do Syllabus</h2>
        
        <nav>
          <ul className="space-y-1">
            {syllabusTopics.map(topic => (
              <li key={topic.id} className="mb-2">
                <div 
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => toggleTopic(topic.id)}
                >
                  <Link 
                    href={topic.path}
                    className={`flex-grow font-medium ${isActive(topic.path) ? 'text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300'}`}
                  >
                    {topic.title}
                  </Link>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openTopics.includes(topic.id) ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {openTopics.includes(topic.id) && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {topic.subTopics.map(subTopic => (
                      <li key={subTopic.id}>
                        <Link 
                          href={subTopic.path}
                          className={`block py-2 px-3 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            isActive(subTopic.path) 
                              ? 'text-primary dark:text-primary-light bg-gray-50 dark:bg-gray-750' 
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {subTopic.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 