'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DownloadPdfGenerator from '@/components/downloads/DownloadPdfGenerator';
import { glossarioTermos, provaModelo, checklistEstudos, dicasDiaProva, mapaMental } from '@/data/downloads';

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const downloadResources = [
    {
      id: 'syllabus',
      title: 'Syllabus CTFL 4.0',
      description: 'O documento oficial que detalha todo o conteúdo cobrado no exame de certificação CTFL 4.0.',
      fileType: 'PDF',
      fileSize: '1.2 MB',
      language: 'Português-BR',
      path: '/downloads/syllabus_ctfl_4.0br.pdf',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      isStatic: true
    },
    {
      id: 'glossario',
      title: 'Glossário de Termos',
      description: 'Glossário oficial do ISTQB com todos os termos e definições utilizados no universo de teste de software.',
      fileType: 'PDF',
      fileSize: '0.8 MB',
      language: 'Português-BR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      isStatic: false
    },
    {
      id: 'provamodelo',
      title: 'Prova Modelo CTFL 4.0',
      description: 'Exemplo de prova oficial fornecido pelo ISTQB com o formato e tipo de questões do exame CTFL.',
      fileType: 'PDF',
      fileSize: '0.6 MB',
      language: 'Português-BR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      isStatic: false
    },
    {
      id: 'checklist',
      title: 'Checklist de Estudos',
      description: 'Uma lista completa com todos os tópicos do syllabus para você marcar conforme for estudando.',
      fileType: 'PDF',
      fileSize: '0.3 MB',
      language: 'Português-BR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      isStatic: false
    },
    {
      id: 'dicas',
      title: 'Dicas para o Dia da Prova',
      description: 'Um guia prático com dicas importantes sobre o que fazer antes e durante o exame de certificação.',
      fileType: 'PDF',
      fileSize: '0.4 MB',
      language: 'Português-BR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      isStatic: false
    },
    {
      id: 'mapamental',
      title: 'Mapa Mental CTFL',
      description: 'Um mapa mental completo organizando todos os conceitos do syllabus CTFL de forma visual.',
      fileType: 'PDF',
      fileSize: '1.5 MB',
      language: 'Português-BR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      isStatic: false
    },
  ];

  // Renderizar conteúdo do glossário
  const renderGlossarioContent = () => (
    <div>
      <p className="mb-4">Este glossário contém os principais termos e definições utilizados no contexto de teste de software, conforme definido pelo ISTQB.</p>
      
      <div className="mt-6 space-y-4">
        {glossarioTermos.terms.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3">
            <h3 className="font-bold text-primary dark:text-primary-light">{item.term}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Renderizar conteúdo da prova modelo
  const renderProvaModeloContent = () => (
    <div>
      <p className="mb-4">{provaModelo.description}</p>
      
      <div className="mt-6 space-y-8">
        {provaModelo.questoes.map((questao) => (
          <div key={questao.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex">
              <span className="bg-primary text-white dark:bg-primary-light dark:text-gray-900 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                {questao.id}
              </span>
              <h3 className="font-bold text-gray-800 dark:text-white">{questao.pergunta}</h3>
            </div>
            
            <div className="mt-3 space-y-2 ml-8">
              {questao.alternativas.map((alt, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                  <span className="text-gray-700 dark:text-gray-300">{alt}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 ml-8 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
              <div className="font-bold text-green-800 dark:text-green-300 mb-1">
                Resposta: {questao.resposta}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{questao.explicacao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Renderizar conteúdo do checklist
  const renderChecklistContent = () => (
    <div>
      <p className="mb-4">{checklistEstudos.description}</p>
      
      <div className="mt-6 space-y-6">
        {checklistEstudos.capitulos.map((capitulo, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{capitulo.titulo}</h3>
            
            <div className="space-y-2">
              {capitulo.topicos.map((topico, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-600 rounded-md mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">{topico}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Renderizar conteúdo de dicas
  const renderDicasContent = () => (
    <div>
      <p className="mb-4">{dicasDiaProva.description}</p>
      
      <div className="mt-6 space-y-6">
        {dicasDiaProva.categorias.map((categoria, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{categoria.titulo}</h3>
            
            <ul className="space-y-2 list-disc ml-5">
              {categoria.dicas.map((dica, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300">{dica}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  // Renderizar conteúdo do mapa mental
  const renderMapaMentalContent = () => (
    <div>
      <p className="mb-4">{mapaMental.description}</p>
      
      <div className="mt-6 space-y-8">
        {mapaMental.centrais.map((central, idx) => (
          <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{central.titulo}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {central.subtopicos.map((subtopico, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-md">
                  <h4 className="font-bold text-primary dark:text-primary-light mb-2">{subtopico.nome}</h4>
                  
                  <ul className="space-y-1 list-disc ml-5">
                    {subtopico.conceitos.map((conceito, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 text-sm">{conceito}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Função para renderizar o conteúdo com base no ID do material
  const renderMaterialContent = (id: string) => {
    switch (id) {
      case 'glossario':
        return renderGlossarioContent();
      case 'provamodelo':
        return renderProvaModeloContent();
      case 'checklist':
        return renderChecklistContent();
      case 'dicas':
        return renderDicasContent();
      case 'mapamental':
        return renderMapaMentalContent();
      default:
        return <p>Selecione um material para visualizar.</p>;
    }
  };

  const handleCardClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Botão Voltar para Home */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Voltar para Home</span>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Materiais para Download</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
        <p className="text-gray-600 dark:text-gray-300">
          Aqui você encontra todos os recursos disponíveis para download e complementar seus estudos 
          para a certificação CTFL. Baixe o syllabus oficial, glossário, exemplos de provas e mais.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {downloadResources.map(resource => (
          <div 
            key={resource.id}
            className={`
              bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col
              ${!resource.isStatic && 'cursor-pointer hover:shadow-lg transition-shadow'}
              ${activeTab === resource.id ? 'ring-2 ring-primary dark:ring-primary-light' : ''}
            `}
            onClick={() => !resource.isStatic && handleCardClick(resource.id)}
          >
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  {resource.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {resource.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex flex-wrap gap-x-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {resource.fileType}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                      {resource.fileSize}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      {resource.language}
                    </span>
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                {resource.description}
              </p>
              
              <div className="mt-auto">
                {resource.isStatic ? (
                  <a 
                    href={resource.path}
                    download
                    className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Baixar PDF
                  </a>
                ) : (
                  <button 
                    className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(resource.id);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Visualizar e Baixar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Visualização e Geração de PDF */}
      {activeTab && (
        <div className="mt-12">
          <DownloadPdfGenerator
            id={activeTab}
            title={downloadResources.find(r => r.id === activeTab)?.title || ''}
            content={renderMaterialContent(activeTab)}
            className="mb-16"
          />
        </div>
      )}
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mt-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sobre os Materiais</h2>
        
        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              O <strong>Syllabus CTFL 4.0</strong> é o documento oficial do ISTQB que contém todo o conteúdo exigido no exame de certificação.
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              O <strong>Glossário</strong> contém a terminologia padrão usada em teste de software.
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              A <strong>Prova Modelo</strong> ajuda a familiarizar-se com o formato e tipo de questões do exame real.
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              Para qualquer material adicional ou versões atualizadas, verifique regularmente o site oficial do ISTQB.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
} 