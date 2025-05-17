'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { sampleQuestions, SimuladoQuestion } from '@/data/syllabus';

export default function QuizStreakPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<SimuladoQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [gameStatus, setGameStatus] = useState<'ready' | 'playing' | 'failed'>('ready');
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<{id: string, correct: boolean, time: number}[]>([]);

  // Preparar perguntas ao iniciar
  useEffect(() => {
    // Embaralhar as perguntas e selecionar todas
    const shuffledQuestions = [...sampleQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const startGame = () => {
    setGameStatus('playing');
    setStreak(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setAnsweredQuestions([]);
    setStartTime(Date.now());
  };

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback || gameStatus !== 'playing') return;
    
    const endTime = Date.now();
    const timeTaken = startTime ? (endTime - startTime) / 1000 : 0;
    setResponseTime(timeTaken);
    
    setSelectedOption(optionId);
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = currentQuestion.options.find(o => o.id === optionId)?.isCorrect || false;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    // Atualizar o histórico de perguntas respondidas
    setAnsweredQuestions(prev => [...prev, {
      id: currentQuestion.id,
      correct: isAnswerCorrect,
      time: timeTaken
    }]);

    // Atualizar sequência
    if (isAnswerCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
      
      // Avançar para próxima pergunta após 1.5 segundos
      setTimeout(() => {
        setShowFeedback(false);
        setSelectedOption(null);
        setCurrentQuestionIndex(prev => prev + 1);
        setStartTime(Date.now());
      }, 1500);
    } else {
      // Game over - quebrou a sequência
      setTimeout(() => {
        setGameStatus('failed');
      }, 1500);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {gameStatus === 'ready' && (
        <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quiz: Sequência Perfeita</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Quantas perguntas consecutivas você consegue acertar sem errar nenhuma?
            Teste seu conhecimento contínuo e tente bater seu próprio recorde!
          </p>
          
          <Button variant="primary" onClick={startGame}>
            Iniciar Quiz
          </Button>
        </div>
      )}

      {gameStatus === 'playing' && currentQuestion && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Sequência Atual:</span>
              <span className="text-xl font-bold text-primary">{streak}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Melhor Sequência:</span>
              <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{bestStreak}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Pergunta {currentQuestionIndex + 1}
            </div>
            <div className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
              {currentQuestion.difficulty === 'easy' ? 'Fácil' : 
               currentQuestion.difficulty === 'medium' ? 'Médio' : 'Difícil'}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div 
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    !showFeedback 
                      ? selectedOption === option.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5'
                      : selectedOption === option.id 
                        ? option.isCorrect 
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                          : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : option.isCorrect 
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                          : 'border-gray-200 dark:border-gray-700'
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      {showFeedback && option.isCorrect && (
                        <span className="text-green-500 font-bold">✓</span>
                      )}
                      {showFeedback && !option.isCorrect && selectedOption === option.id && (
                        <span className="text-red-500 font-bold">✗</span>
                      )}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{option.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {showFeedback && (
            <div className={`p-4 rounded-lg my-4 ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}`}>
              <div className="flex justify-between items-center mb-2">
                <p className={`font-medium ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                  {isCorrect ? 'Resposta correta!' : 'Resposta incorreta!'}
                </p>
                {responseTime !== null && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tempo de resposta: {responseTime.toFixed(1)}s
                  </p>
                )}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      )}

      {gameStatus === 'failed' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sequência Quebrada!</h2>
          
          <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Sequência Final</p>
                <p className="text-3xl font-bold text-primary">{streak}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Melhor Sequência</p>
                <p className="text-3xl font-bold text-green-500">{bestStreak}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Seu Desempenho
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Pergunta</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Resultado</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Tempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {answeredQuestions.map((answer, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {index + 1}
                      </td>
                      <td className="py-2 px-4 text-sm">
                        {answer.correct ? (
                          <span className="text-green-500 font-medium">Correta</span>
                        ) : (
                          <span className="text-red-500 font-medium">Incorreta</span>
                        )}
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {answer.time.toFixed(1)}s
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={startGame}>
              Tentar Novamente
            </Button>
            <Button variant="outline" onClick={() => router.push('/quiz')}>
              Voltar para Quiz
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 