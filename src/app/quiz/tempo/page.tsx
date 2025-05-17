'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { sampleQuestions, SimuladoQuestion } from '@/data/syllabus';

const INITIAL_TIME = 60; // 60 segundos

export default function QuizTempoPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<SimuladoQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [gameStatus, setGameStatus] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [score, setScore] = useState(0);

  // Preparar perguntas ao iniciar
  useEffect(() => {
    // Embaralhar as perguntas e pegar todas elas
    const shuffledQuestions = [...sampleQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  // Timer
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameStatus('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStatus]);

  const startGame = () => {
    setGameStatus('playing');
    setTimeLeft(INITIAL_TIME);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback || gameStatus !== 'playing') return;
    
    setSelectedOption(optionId);
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = currentQuestion.options.find(o => o.id === optionId)?.isCorrect || false;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    // Atualizar estatísticas
    if (isAnswerCorrect) {
      setCorrectAnswers(prev => prev + 1);
      
      // Cálculo da pontuação: base + bônus por tempo + bônus por dificuldade
      const timeBonus = Math.round((timeLeft / INITIAL_TIME) * 50);
      const difficultyMultiplier = 
        currentQuestion.difficulty === 'easy' ? 1 :
        currentQuestion.difficulty === 'medium' ? 1.5 : 2;
      
      const pointsEarned = Math.round((100 + timeBonus) * difficultyMultiplier);
      setScore(prev => prev + pointsEarned);
    } else {
      setIncorrectAnswers(prev => prev + 1);
    }

    // Avançar para próxima pergunta após 1.5 segundos
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      setCurrentQuestionIndex(prev => prev + 1);
    }, 1500);
  };

  // Formatar o tempo para exibição mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {gameStatus === 'ready' && (
        <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quiz: Contra o Tempo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Responda o máximo de perguntas que conseguir em 60 segundos. 
            Quanto mais rápido você responder, mais pontos ganha!
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
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Pontuação:</span>
              <span className="text-lg font-bold text-primary">{score}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tempo:</span>
              <span className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-gray-700 dark:text-gray-300'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <div className="text-sm flex items-center space-x-4">
              <div className="text-green-500">✓ {correctAnswers}</div>
              <div className="text-red-500">✗ {incorrectAnswers}</div>
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
              <p className={`font-medium ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                {isCorrect ? 'Resposta correta!' : 'Resposta incorreta!'}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      )}

      {gameStatus === 'finished' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tempo Esgotado!</h2>
          
          <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Pontuação Total</p>
                <p className="text-3xl font-bold text-primary">{score}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Perguntas</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{correctAnswers + incorrectAnswers}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Corretas</p>
                <p className="text-3xl font-bold text-green-500">{correctAnswers}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Incorretas</p>
                <p className="text-3xl font-bold text-red-500">{incorrectAnswers}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={startGame}>
              Jogar Novamente
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