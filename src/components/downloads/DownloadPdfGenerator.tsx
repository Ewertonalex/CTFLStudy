'use client';

import React, { useRef } from 'react';
import { generateAndDownloadPdf } from '@/utils/htmlToPdf';
import Button from '@/components/ui/Button';

interface DownloadPdfGeneratorProps {
  id: string;
  title: string;
  content: React.ReactNode;
  className?: string;
}

export default function DownloadPdfGenerator({
  id,
  title,
  content,
  className = '',
}: DownloadPdfGeneratorProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [success, setSuccess] = React.useState<boolean | null>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;
    
    setIsGenerating(true);
    setSuccess(null);
    
    try {
      const result = await generateAndDownloadPdf(contentRef.current, {
        filename: `${id}.pdf`,
        title: title,
        footer: 'CTFL Study - Material de Estudo CTFL 4.0'
      });
      
      setSuccess(result);
      
      // Limpar a notificação após 3 segundos
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      setSuccess(false);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={`pdf-generator ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        
        <Button 
          variant="primary" 
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gerando PDF...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar PDF
            </>
          )}
        </Button>
      </div>
      
      {/* Feedback de sucesso ou erro */}
      {success !== null && (
        <div className={`p-3 mb-4 rounded-md ${
          success 
            ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' 
            : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-300'
        }`}>
          {success 
            ? 'PDF gerado e baixado com sucesso!' 
            : 'Erro ao gerar o PDF. Por favor, tente novamente.'}
        </div>
      )}
      
      {/* Conteúdo a ser convertido em PDF (oculto visualmente) */}
      <div className="hidden">
        <div ref={contentRef} className="pdf-content bg-white text-black p-8" style={{ width: '800px' }}>
          <h1 className="text-2xl font-bold mb-6">{title}</h1>
          {content}
        </div>
      </div>
      
      {/* Visualização do conteúdo */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        {content}
      </div>
    </div>
  );
} 