'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const quizModes = [
  {
    id: 'tempo',
    title: 'Contra o Tempo',
    description: 'Responda o máximo de perguntas corretamente dentro do limite de tempo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    path: '/quiz/tempo'
  },
  {
    id: 'streak',
    title: 'Sequência Perfeita',
    description: 'Veja quantas perguntas você consegue acertar em sequência sem errar.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    path: '/quiz/streak'
  },
  {
    id: 'desafio',
    title: 'Desafio Diário',
    description: 'Um conjunto diário de 10 perguntas para testar seu conhecimento regularmente.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    path: '/quiz/desafio'
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [numQuestions, setNumQuestions] = useState<string>('10');
  
  const startQuickQuiz = () => {
    if (!selectedDifficulty) {
      alert('Por favor, selecione uma dificuldade');
      return;
    }
    
    // Na prática, esses parâmetros seriam passados como query params ou estado
    // Aqui vamos apenas redirecionar para o modo contra o tempo
    router.push('/quiz/tempo');
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
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quiz Game CTFL</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Divirta-se enquanto testa seus conhecimentos sobre o syllabus CTFL em
          um formato de jogo interativo e desafiador.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {quizModes.map((mode) => (
          <div 
            key={mode.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            {mode.icon}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{mode.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{mode.description}</p>
            <Button variant="primary" onClick={() => router.push(mode.path)} fullWidth>
              Jogar
            </Button>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Comece um Quiz Rápido</h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Escolha a Dificuldade
            </label>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant={selectedDifficulty === 'easy' ? 'primary' : 'outline'} 
                onClick={() => setSelectedDifficulty('easy')}
              >
                Fácil
              </Button>
              <Button 
                variant={selectedDifficulty === 'medium' ? 'primary' : 'outline'} 
                onClick={() => setSelectedDifficulty('medium')}
              >
                Médio
              </Button>
              <Button 
                variant={selectedDifficulty === 'hard' ? 'primary' : 'outline'} 
                onClick={() => setSelectedDifficulty('hard')}
              >
                Difícil
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Número de Questões
            </label>
            <select 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
            >
              <option value="5">5 questões</option>
              <option value="10">10 questões</option>
              <option value="15">15 questões</option>
              <option value="20">20 questões</option>
            </select>
          </div>
          
          <div className="w-full md:w-1/3 self-end">
            <Button variant="primary" onClick={startQuickQuiz} fullWidth>
              Iniciar Quiz
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dicas para o Quiz</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Algumas dicas para aproveitar ao máximo o seu tempo de estudo com o Quiz:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Utilize o modo <strong>Contra o Tempo</strong> para treinar sua velocidade de resposta.
            </span>
          </div>
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              O modo <strong>Sequência Perfeita</strong> é ótimo para identificar lacunas no seu conhecimento.
            </span>
          </div>
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Complete o <strong>Desafio Diário</strong> todos os dias para manter a consistência nos estudos.
            </span>
          </div>
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Não se preocupe com erros - utilize-os como oportunidade de aprendizado e revisão.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 