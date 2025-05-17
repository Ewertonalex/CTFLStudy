'use client';

import React, { useState, useRef } from 'react';
import Button from '@/components/ui/Button';
import { syllabusTopics } from '@/data/syllabus';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Estrutura para armazenar os tópicos de estudo com sua duração estimada
interface EstudoTopico {
  id: string;
  titulo: string;
  duracao: number; // em horas
  prioridade: 'alta' | 'média' | 'baixa';
  semana: number;
  dia: number;
}

// Estrutura para armazenar o plano de estudos
interface PlanoEstudos {
  totalSemanas: number;
  horasTotais: number;
  topicos: EstudoTopico[];
  dataInicio: string;
  dataFim: string;
}

interface FormData {
  horasDiarias: number;
  diasSemana: number;
  dataProva: string;
  nivelConhecimento: 'iniciante' | 'intermediario' | 'avancado';
  focoEstudo: string[];
}

export default function PlanoEstudosPage() {
  const [formData, setFormData] = useState<FormData>({
    horasDiarias: 2,
    diasSemana: 3,
    dataProva: '',
    nivelConhecimento: 'iniciante',
    focoEstudo: [],
  });

  const [planoGerado, setPlanoGerado] = useState<PlanoEstudos | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const planoRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      focoEstudo: checked
        ? [...formData.focoEstudo, value]
        : formData.focoEstudo.filter(item => item !== value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const plano = gerarPlanoEstudos();
    setPlanoGerado(plano);
    setIsFormSubmitted(true);
    
    // Simular rolagem para a seção do plano gerado
    setTimeout(() => {
      document.getElementById('plano-gerado')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const gerarPlanoEstudos = (): PlanoEstudos => {
    // Calculando o tempo total disponível
    const horasSemana = formData.horasDiarias * formData.diasSemana;
    
    // Definir data de início (hoje)
    const hoje = new Date();
    const dataInicio = hoje.toISOString().split('T')[0];
    
    // Definir data de fim (data da prova ou estimada)
    let dataFim = formData.dataProva;
    if (!dataFim) {
      // Se não tiver data da prova, estimar com base no nível
      const diasEstimados = 
        formData.nivelConhecimento === 'iniciante' ? 90 : 
        formData.nivelConhecimento === 'intermediario' ? 60 : 30;
      
      const dataEstimada = new Date();
      dataEstimada.setDate(hoje.getDate() + diasEstimados);
      dataFim = dataEstimada.toISOString().split('T')[0];
    }
    
    // Calcular o número de semanas até a prova
    const dataProvaObj = new Date(dataFim);
    const diferencaDias = Math.ceil((dataProvaObj.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    const totalSemanas = Math.ceil(diferencaDias / 7);
    
    // Criar lista de tópicos com base no syllabus
    const topicos: EstudoTopico[] = [];
    let semanaAtual = 1;
    let diaAtual = 1;
    let horasAcumuladas = 0;
    
    // Para cada capítulo do syllabus
    syllabusTopics.forEach(capitulo => {
      // Definir prioridade com base no foco de estudo
      const prioridade = formData.focoEstudo.includes(capitulo.id) 
        ? 'alta' 
        : (capitulo.id === 'fundamentos' || capitulo.id === 'modelagem') 
          ? 'média' 
          : 'baixa';
      
      // Estimar horas para o capítulo com base na prioridade e nível
      let horasEstimadas = 0;
      
      if (prioridade === 'alta') {
        horasEstimadas = formData.nivelConhecimento === 'iniciante' ? 12 : 
                          formData.nivelConhecimento === 'intermediario' ? 8 : 5;
      } else if (prioridade === 'média') {
        horasEstimadas = formData.nivelConhecimento === 'iniciante' ? 8 : 
                          formData.nivelConhecimento === 'intermediario' ? 6 : 4;
      } else {
        horasEstimadas = formData.nivelConhecimento === 'iniciante' ? 6 : 
                          formData.nivelConhecimento === 'intermediario' ? 4 : 3;
      }
      
      // Dividir o capítulo em subtópicos para distribuir nas semanas
      capitulo.subTopics.forEach(subtopico => {
        // Estimar horas por subtópico
        const horasSubtopico = Math.round(horasEstimadas / capitulo.subTopics.length);
        
        // Adicionar ao plano
        topicos.push({
          id: subtopico.id,
          titulo: subtopico.title,
          duracao: horasSubtopico,
          prioridade,
          semana: semanaAtual,
          dia: diaAtual
        });
        
        // Avançar dia/semana
        horasAcumuladas += horasSubtopico;
        if (horasAcumuladas >= horasSemana) {
          semanaAtual++;
          diaAtual = 1;
          horasAcumuladas = 0;
        } else {
          diaAtual = (diaAtual % formData.diasSemana) + 1;
        }
      });
    });
    
    // Calcular total de horas
    const horasTotais = topicos.reduce((total, topico) => total + topico.duracao, 0);
    
    // Retornar o plano completo
    return {
      totalSemanas: Math.max(semanaAtual, 1),
      horasTotais,
      topicos,
      dataInicio,
      dataFim
    };
  };

  const formatarData = (dataString: string): string => {
    if (!dataString) return '';
    
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  };

  const salvarPlano = () => {
    if (!planoGerado) return;
    
    setIsSaving(true);
    
    try {
      // Simular salvamento em localStorage
      localStorage.setItem('planoEstudos', JSON.stringify(planoGerado));
      
      // Mostrar mensagem de sucesso
      setFeedbackMessage({
        message: "Plano de estudos salvo com sucesso!",
        type: 'success'
      });
      
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
    } catch (error) {
      setFeedbackMessage({
        message: "Erro ao salvar o plano de estudos.",
        type: 'error'
      });
      
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
    } finally {
      setIsSaving(false);
    }
  };

  const exportarPDF = async () => {
    if (!planoGerado || !planoRef.current) return;
    
    setIsExporting(true);
    
    try {
      // Capturar o elemento como imagem
      const element = planoRef.current;
      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        logging: false
      });
      
      // Criar PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      // Adicionar cabeçalho
      pdf.setFontSize(20);
      pdf.setTextColor(50, 50, 50);
      pdf.text('Plano de Estudos CTFL 4.0', 105, 15, { align: 'center' });
      
      // Calcular dimensões para manter proporção
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 10, 25, imgWidth, imgHeight);
      
      // Se for grande demais, ajustar escala
      if (imgHeight > 250) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      }
      
      // Adicionar rodapé
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('CTFL Study - Plano de Estudos Personalizado', 105, 285, { align: 'center' });
      
      // Salvar PDF
      pdf.save(`plano_estudos_ctfl_${new Date().toISOString().split('T')[0]}.pdf`);
      
      // Mostrar mensagem de sucesso
      setFeedbackMessage({
        message: "PDF exportado com sucesso!",
        type: 'success'
      });
      
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
    } catch (error) {
      setFeedbackMessage({
        message: "Erro ao exportar o PDF.",
        type: 'error'
      });
      
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
    } finally {
      setIsExporting(false);
    }
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
      
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Plano de Estudos Personalizado</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Com base na sua disponibilidade e necessidades específicas, criaremos um plano de estudos 
          personalizado para ajudá-lo a se preparar adequadamente para o exame CTFL.
        </p>
        
        <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-blue-600 dark:text-blue-300 text-sm">
            O plano será ajustado automaticamente com base no seu progresso e resultados 
            nos simulados e exercícios realizados na plataforma.
          </p>
        </div>
      </div>
      
      {/* Feedback Message */}
      {feedbackMessage && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-md z-50 ${
          feedbackMessage.type === 'success' 
            ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' 
            : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-300'
        }`}>
          <p className="flex items-center">
            {feedbackMessage.type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {feedbackMessage.message}
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Configure seu Plano</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Horas disponíveis por dia
                  </label>
                  <select 
                    name="horasDiarias" 
                    value={formData.horasDiarias}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    <option value={1}>1 hora</option>
                    <option value={2}>2 horas</option>
                    <option value={3}>3 horas</option>
                    <option value={4}>4 horas</option>
                    <option value={5}>5+ horas</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Dias disponíveis por semana
                  </label>
                  <select 
                    name="diasSemana" 
                    value={formData.diasSemana}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    <option value={1}>1 dia</option>
                    <option value={2}>2 dias</option>
                    <option value={3}>3 dias</option>
                    <option value={4}>4 dias</option>
                    <option value={5}>5 dias</option>
                    <option value={6}>6 dias</option>
                    <option value={7}>7 dias</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Data prevista para o exame
                </label>
                <input 
                  type="date" 
                  name="dataProva"
                  value={formData.dataProva}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                />
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nível de conhecimento atual
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer">
                    <input 
                      type="radio" 
                      name="nivelConhecimento" 
                      value="iniciante"
                      checked={formData.nivelConhecimento === 'iniciante'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Iniciante</span>
                  </label>
                  
                  <label className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer">
                    <input 
                      type="radio" 
                      name="nivelConhecimento" 
                      value="intermediario"
                      checked={formData.nivelConhecimento === 'intermediario'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Intermediário</span>
                  </label>
                  
                  <label className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer">
                    <input 
                      type="radio" 
                      name="nivelConhecimento" 
                      value="avancado"
                      checked={formData.nivelConhecimento === 'avancado'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Avançado</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-10">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Áreas com foco especial (opcional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'fundamentos', label: 'Fundamentos de Teste' },
                    { value: 'ciclo-vida', label: 'Testes ao longo do Ciclo de Vida' },
                    { value: 'estatico', label: 'Teste Estático' },
                    { value: 'analise-modelagem', label: 'Análise e Modelagem de Teste' },
                    { value: 'gerenciamento', label: 'Gerenciamento das Atividades de Teste' },
                    { value: 'ferramentas', label: 'Ferramentas de Teste' },
                  ].map(item => (
                    <label key={item.value} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="focoEstudo"
                        value={item.value}
                        checked={formData.focoEstudo.includes(item.value)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <Button type="submit" variant="primary" fullWidth>
                Gerar Plano de Estudos
              </Button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Benefícios do Plano</h2>
            
            <ul className="space-y-4">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Plano personalizado baseado na sua disponibilidade e nível de conhecimento
                </span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Distribuição otimizada do conteúdo para maximizar a eficiência do estudo
                </span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Lembretes e notificações para manter você no caminho certo
                </span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Reajuste automático com base no seu progresso e resultados
                </span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Priorização inteligente de áreas com maior necessidade de foco
                </span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-primary/10 dark:bg-primary/20 rounded-lg">
              <p className="text-primary dark:text-primary-light text-sm font-medium">
                Estudos mostram que seguir um plano estruturado aumenta em até 80% as chances de aprovação
                em exames de certificação.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Plano de Estudos Gerado */}
      {isFormSubmitted && planoGerado && (
        <div id="plano-gerado" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10" ref={planoRef}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Seu Plano de Estudos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Duração Total</p>
              <p className="text-2xl font-bold text-primary">{planoGerado.totalSemanas} semanas</p>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Carga Horária</p>
              <p className="text-2xl font-bold text-primary">{planoGerado.horasTotais} horas</p>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Data Início</p>
              <p className="text-2xl font-bold text-primary">{formatarData(planoGerado.dataInicio)}</p>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Data Final</p>
              <p className="text-2xl font-bold text-primary">{formatarData(planoGerado.dataFim)}</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Semana</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Dia</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Tópico</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Duração</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Prioridade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {planoGerado.topicos.map((topico, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{topico.semana}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{topico.dia}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{topico.titulo}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{topico.duracao}h</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        topico.prioridade === 'alta' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300' 
                          : topico.prioridade === 'média'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300'
                            : 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300'
                      }`}>
                        {topico.prioridade === 'alta' ? 'Alta' : topico.prioridade === 'média' ? 'Média' : 'Baixa'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              onClick={salvarPlano}
              disabled={isSaving}
            >
              {isSaving ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Salvando...
                </span>
              ) : "Salvar Plano"}
            </Button>
            <Button 
              variant="outline" 
              onClick={exportarPDF}
              disabled={isExporting}
            >
              {isExporting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Exportando...
                </span>
              ) : "Exportar PDF"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 