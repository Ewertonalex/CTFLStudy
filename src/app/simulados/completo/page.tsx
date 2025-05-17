'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { sampleQuestions } from '@/data/syllabus';
import Button from '@/components/ui/Button';

export default function SimuladoCompletoPage() {
  const [simulado, setSimulado] = useState<{
    started: boolean;
    completed: boolean;
    timeLeft: number;
    currentQuestion: number;
    questions: typeof sampleQuestions;
    answers: {[key: string]: string};
    marked: {[key: string]: boolean};
  }>({
    started: false,
    completed: false,
    timeLeft: 60 * 60, // 60 minutos em segundos
    currentQuestion: 0,
    questions: [],
    answers: {},
    marked: {},
  });

  // Inicializa o simulado com questões
  useEffect(() => {
    if (simulado.questions.length === 0) {
      // Em um ambiente real, estas questões seriam carregadas de uma API
      // e seriam diferentes a cada vez, mas para este exemplo usamos as questões de amostra
      // e repetimos algumas para chegar a 40 questões
      const repeatedQuestions: typeof sampleQuestions = [];
      
      // Repetimos as questões de amostra para chegar a 40 questões
      for (let i = 0; i < 14; i++) {
        sampleQuestions.forEach(q => {
          repeatedQuestions.push({
            ...q,
            id: `${q.id}-${i}`, // Criamos IDs únicos para cada questão
          });
        });
      }
      
      // Selecionamos apenas 40 questões
      const selectedQuestions = repeatedQuestions.slice(0, 40);
      
      setSimulado(prev => ({
        ...prev,
        questions: selectedQuestions,
      }));
    }
  }, [simulado.questions.length]);

  // Timer do simulado
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (simulado.started && !simulado.completed && simulado.timeLeft > 0) {
      timer = setInterval(() => {
        setSimulado(prev => {
          const newTimeLeft = prev.timeLeft - 1;
          
          // Finaliza automaticamente quando o tempo acabar
          if (newTimeLeft <= 0) {
            clearInterval(timer);
            return {
              ...prev,
              timeLeft: 0,
              completed: true,
            };
          }
          
          return {
            ...prev,
            timeLeft: newTimeLeft,
          };
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [simulado.started, simulado.completed, simulado.timeLeft]);

  const startSimulado = () => {
    setSimulado(prev => ({
      ...prev,
      started: true,
    }));
  };

  const finishSimulado = () => {
    setSimulado(prev => ({
      ...prev,
      completed: true,
    }));
  };

  const handleAnswer = (questionId: string, optionId: string) => {
    setSimulado(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionId,
      },
    }));
  };

  const toggleMarkQuestion = (questionId: string) => {
    setSimulado(prev => ({
      ...prev,
      marked: {
        ...prev.marked,
        [questionId]: !prev.marked[questionId],
      },
    }));
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < simulado.questions.length) {
      setSimulado(prev => ({
        ...prev,
        currentQuestion: index,
      }));
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Cálculo de resultados
  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    
    simulado.questions.forEach(question => {
      const userAnswer = simulado.answers[question.id];
      
      if (!userAnswer) {
        skipped++;
      } else {
        const correctOption = question.options.find(o => o.isCorrect)?.id;
        if (userAnswer === correctOption) {
          correct++;
        } else {
          wrong++;
        }
      }
    });
    
    const totalQuestions = simulado.questions.length;
    const scorePercentage = Math.round((correct / totalQuestions) * 100);
    
    // Análise por tópico
    const topicAnalysis: {[topicId: string]: {total: number, correct: number, percentage: number}} = {};
    
    simulado.questions.forEach(question => {
      const userAnswer = simulado.answers[question.id];
      const isCorrect = userAnswer && question.options.find(o => o.id === userAnswer)?.isCorrect;
      
      if (!topicAnalysis[question.topicId]) {
        topicAnalysis[question.topicId] = { total: 0, correct: 0, percentage: 0 };
      }
      
      topicAnalysis[question.topicId].total++;
      if (isCorrect) {
        topicAnalysis[question.topicId].correct++;
      }
    });
    
    // Calcula a porcentagem para cada tópico
    Object.keys(topicAnalysis).forEach(topicId => {
      const topic = topicAnalysis[topicId];
      topic.percentage = Math.round((topic.correct / topic.total) * 100);
    });
    
    return {
      correct,
      wrong,
      skipped,
      total: totalQuestions,
      percentage: scorePercentage,
      topicAnalysis,
      passed: scorePercentage >= 65, // Considera aprovado com 65% ou mais
    };
  };

  // Componente de questão atual
  const CurrentQuestion = () => {
    const question = simulado.questions[simulado.currentQuestion];
    
    if (!question) return null;
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Questão {simulado.currentQuestion + 1} de {simulado.questions.length}
          </h3>
          
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              simulado.marked[question.id]
                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => toggleMarkQuestion(question.id)}
          >
            {simulado.marked[question.id] ? 'Marcada para revisão' : 'Marcar para revisão'}
          </button>
        </div>
        
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-900 dark:text-white mb-4">{question.question}</p>
          
          <div className="space-y-3">
            {question.options.map(option => (
              <div 
                key={option.id}
                className={`p-4 border rounded-lg cursor-pointer ${
                  simulado.answers[question.id] === option.id
                    ? 'border-primary bg-primary/5 dark:bg-primary/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary'
                }`}
                onClick={() => handleAnswer(question.id, option.id)}
              >
                <label className="flex items-start cursor-pointer">
                  <input
                    type="radio"
                    className="mt-1 mr-3"
                    checked={simulado.answers[question.id] === option.id}
                    onChange={() => handleAnswer(question.id, option.id)}
                  />
                  <span className="text-gray-800 dark:text-gray-200">{option.text}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => goToQuestion(simulado.currentQuestion - 1)}
            disabled={simulado.currentQuestion === 0}
          >
            Anterior
          </Button>
          
          {simulado.currentQuestion < simulado.questions.length - 1 ? (
            <Button
              variant="primary"
              onClick={() => goToQuestion(simulado.currentQuestion + 1)}
            >
              Próxima
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={finishSimulado}
            >
              Finalizar Simulado
            </Button>
          )}
        </div>
      </div>
    );
  };

  // Componente de navegação das questões
  const QuestionNavigation = () => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Navegação</h3>
        
        <div className="grid grid-cols-5 gap-2">
          {simulado.questions.map((question, index) => {
            let bgColor = 'bg-gray-100 dark:bg-gray-700';
            let textColor = 'text-gray-700 dark:text-gray-300';
            
            if (simulado.answers[question.id]) {
              bgColor = 'bg-green-100 dark:bg-green-900/40';
              textColor = 'text-green-700 dark:text-green-300';
            }
            
            if (simulado.marked[question.id]) {
              bgColor = 'bg-yellow-100 dark:bg-yellow-900/40';
              textColor = 'text-yellow-700 dark:text-yellow-300';
            }
            
            if (index === simulado.currentQuestion) {
              bgColor = 'bg-primary/10 dark:bg-primary/30';
              textColor = 'text-primary dark:text-primary-light';
            }
            
            return (
              <button
                key={question.id}
                onClick={() => goToQuestion(index)}
                className={`${bgColor} ${textColor} w-full py-2 rounded-md font-medium`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        
        <div className="mt-6 space-y-2">
          <div className="flex items-center text-sm">
            <span className="inline-block w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-sm mr-2"></span>
            <span className="text-gray-700 dark:text-gray-300">Não respondida</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="inline-block w-4 h-4 bg-green-100 dark:bg-green-900/40 rounded-sm mr-2"></span>
            <span className="text-green-700 dark:text-green-300">Respondida</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="inline-block w-4 h-4 bg-yellow-100 dark:bg-yellow-900/40 rounded-sm mr-2"></span>
            <span className="text-yellow-700 dark:text-yellow-300">Marcada para revisão</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="inline-block w-4 h-4 bg-primary/10 dark:bg-primary/30 rounded-sm mr-2"></span>
            <span className="text-primary dark:text-primary-light">Questão atual</span>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-750 rounded-lg">
          <p className="text-gray-900 dark:text-white font-medium mb-2">Tempo Restante</p>
          <p className="text-2xl font-bold text-primary">{formatTime(simulado.timeLeft)}</p>
        </div>
      </div>
    );
  };

  // Componente de resultados
  const SimuladoResults = () => {
    const results = calculateResults();
    
    return (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resultado do Simulado</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center mb-6 md:mb-0">
              <div className="text-5xl font-bold text-primary mb-2">{results.percentage}%</div>
              <p className="text-gray-600 dark:text-gray-400">Pontuação Final</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 h-24 w-px mx-4 hidden md:block"></div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-1">{results.correct}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Corretas</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">{results.wrong}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Incorretas</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">{results.skipped}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Não respondidas</p>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 h-24 w-px mx-4 hidden md:block"></div>
            
            <div className="text-center">
              <div className={`text-xl font-bold ${results.passed ? 'text-green-500' : 'text-red-500'} mb-1`}>
                {results.passed ? 'APROVADO' : 'REPROVADO'}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mínimo para aprovação: 65%
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Desempenho por Tópico</h3>
            
            <div className="space-y-4">
              {Object.entries(results.topicAnalysis).map(([topicId, data]) => {
                // Mapeamento simplificado de IDs para nomes de tópicos
                const topicNames: {[key: string]: string} = {
                  'fundamentos-1': 'O que é Teste?',
                  'fundamentos-2': 'Por que o Teste é Necessário?',
                  'fundamentos-3': 'Sete Princípios de Teste',
                  'ciclo-vida-2': 'Níveis de Teste',
                  'analise-2': 'Técnicas Caixa-Preta',
                };
                
                const topicName = topicNames[topicId] || topicId;
                
                // Cores baseadas na performance
                let barColor = 'bg-red-500';
                if (data.percentage >= 65 && data.percentage < 80) {
                  barColor = 'bg-yellow-500';
                } else if (data.percentage >= 80) {
                  barColor = 'bg-green-500';
                }
                
                return (
                  <div key={topicId}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{topicName}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {data.correct}/{data.total} ({data.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`${barColor} h-2.5 rounded-full`}
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="primary" fullWidth>
              <Link href="/simulados" className="w-full">Voltar para Simulados</Link>
            </Button>
            <Button variant="outline" fullWidth>
              <Link href="/simulados/completo" className="w-full">Fazer outro Simulado</Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recomendações de Estudo</h3>
          
          <div className="space-y-4">
            {Object.entries(results.topicAnalysis)
              .filter(([_, data]) => data.percentage < 70) // Filtra tópicos com menos de 70% de acerto
              .map(([topicId, data]) => {
                const topicNames: {[key: string]: string} = {
                  'fundamentos-1': 'O que é Teste?',
                  'fundamentos-2': 'Por que o Teste é Necessário?',
                  'fundamentos-3': 'Sete Princípios de Teste',
                  'ciclo-vida-2': 'Níveis de Teste',
                  'analise-2': 'Técnicas Caixa-Preta',
                };
                
                const topicPaths: {[key: string]: string} = {
                  'fundamentos-1': '/conteudo/fundamentos/o-que-e-teste',
                  'fundamentos-2': '/conteudo/fundamentos/por-que-teste-necessario',
                  'fundamentos-3': '/conteudo/fundamentos/sete-principios',
                  'ciclo-vida-2': '/conteudo/ciclo-vida/niveis-teste',
                  'analise-2': '/conteudo/analise-modelagem/tecnicas-caixa-preta',
                };
                
                const topicName = topicNames[topicId] || topicId;
                const topicPath = topicPaths[topicId] || '/conteudo';
                
                return (
                  <div key={topicId} className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Recomendamos que você revise o tópico <strong>{topicName}</strong> onde seu desempenho foi de apenas {data.percentage}%.
                      </p>
                      <Link href={topicPath} className="text-primary hover:underline text-sm">
                        Ir para o material de estudo →
                      </Link>
                    </div>
                  </div>
                );
              })}
            
            {Object.entries(results.topicAnalysis).filter(([_, data]) => data.percentage < 70).length === 0 && (
              <p className="text-green-600 dark:text-green-400">
                Parabéns! Você teve um bom desempenho em todos os tópicos. Continue praticando para manter seu conhecimento atualizado.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Página inicial do simulado
  const SimuladoIntro = () => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Simulado Completo CTFL</h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">Informações do Simulado</h3>
              <p className="text-blue-600 dark:text-blue-400">
                Este simulado segue o formato oficial da prova CTFL 4.0, com questões de múltipla escolha 
                cobrindo todos os tópicos do syllabus nos níveis cognitivos apropriados (K1, K2 e K3).
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Detalhes do Simulado</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>40 questões de múltipla escolha</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tempo máximo: 60 minutos</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pontuação para aprovação: 65% (26 acertos)</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Todas as questões têm o mesmo peso</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dicas para o Simulado</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Gerencie seu tempo: em média, você tem 1,5 minutos por questão</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Leia as questões com atenção, procurando por palavras-chave como "MAIS", "MENOS", "EXCETO", "NÃO"</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Use o botão de marcador para revisitar questões que você deseja revisar</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Responda todas as questões, mesmo que precise adivinhar algumas. Não há penalidade para respostas erradas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button variant="primary" size="lg" onClick={startSimulado}>
            Iniciar Simulado
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {!simulado.started ? (
        <SimuladoIntro />
      ) : !simulado.completed ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CurrentQuestion />
          </div>
          <div>
            <QuestionNavigation />
          </div>
        </div>
      ) : (
        <SimuladoResults />
      )}
    </div>
  );
} 