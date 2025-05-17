'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { sampleQuestions, SimuladoQuestion } from '@/data/syllabus';

export default function QuizDesafioPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<SimuladoQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameStatus, setGameStatus] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<{
    totalQuestions: number;
    correctAnswers: number;
    wrongAnswers: number;
    timeSpent: number;
    date: string;
  }>({ totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, timeSpent: 0, date: '' });
  const [startTime, setStartTime] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  // Número fixo de perguntas para o desafio diário
  const CHALLENGE_QUESTIONS_COUNT = 10;

  // Gerar a seed baseada na data atual para que todos tenham as mesmas perguntas no mesmo dia
  const generateDailySeed = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  };

  // Preparar perguntas para o desafio diário
  useEffect(() => {
    const dailySeed = generateDailySeed();
    
    // Usar uma seed consistente para o embaralhamento
    const seededRandom = (min: number, max: number, seed: string) => {
      const seedNumber = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const x = Math.sin(seedNumber) * 10000;
      return (x - Math.floor(x)) * (max - min) + min;
    };
    
    // Embaralhar com seed consistente
    const shuffledQuestions = [...sampleQuestions].sort(() => 
      seededRandom(0, 1, dailySeed) - 0.5
    );
    
    // Selecionar as primeiras 10 perguntas
    setQuestions(shuffledQuestions.slice(0, CHALLENGE_QUESTIONS_COUNT));
  }, []);

  // Verificar se o usuário já fez o desafio hoje
  useEffect(() => {
    const checkCompletedChallenge = () => {
      try {
        const saved = localStorage.getItem('ctfl_daily_challenge');
        if (saved) {
          const data = JSON.parse(saved);
          if (data.date === generateDailySeed()) {
            // Já completou o desafio hoje
            setResults(data);
            return true;
          }
        }
        return false;
      } catch (error) {
        console.error("Erro ao verificar desafio diário:", error);
        return false;
      }
    };
    
    if (checkCompletedChallenge()) {
      setGameStatus('finished');
    }
  }, []);

  const startGame = () => {
    setGameStatus('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setUserAnswers({});
    setStartTime(Date.now());
  };

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return;
    
    setSelectedOption(optionId);
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = currentQuestion.options.find(o => o.id === optionId)?.isCorrect || false;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    // Salvar resposta do usuário
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));

    // Atualizar pontuação
    if (isAnswerCorrect) {
      const pointsEarned = currentQuestion.difficulty === 'easy' ? 100 : 
                           currentQuestion.difficulty === 'medium' ? 150 : 200;
      setScore(prev => prev + pointsEarned);
    }

    // Avançar para próxima pergunta ou finalizar
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        finishChallenge();
      }
    }, 1500);
  };

  const finishChallenge = () => {
    const endTime = Date.now();
    const timeSpent = Math.round((endTime - startTime) / 1000);
    
    // Calcular resultados
    let correctCount = 0;
    let wrongCount = 0;
    
    questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer) {
        const isCorrect = question.options.find(o => o.id === userAnswer)?.isCorrect || false;
        if (isCorrect) correctCount++; else wrongCount++;
      } else {
        wrongCount++; // Considerar não respondida como errada
      }
    });
    
    const finalResults = {
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      timeSpent,
      date: generateDailySeed()
    };
    
    setResults(finalResults);
    
    // Salvar resultados no localStorage
    try {
      localStorage.setItem('ctfl_daily_challenge', JSON.stringify(finalResults));
    } catch (error) {
      console.error("Erro ao salvar desafio diário:", error);
    }
    
    setGameStatus('finished');
  };

  // Formatar o tempo para exibição mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Formatar a data para exibição
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {gameStatus === 'ready' && (
        <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Desafio Diário</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Todo dia, um novo conjunto de 10 perguntas para testar seus conhecimentos.
            O desafio é o mesmo para todos os usuários no mesmo dia - compare seus resultados!
          </p>
          
          <Button variant="primary" onClick={startGame}>
            Iniciar Desafio
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
            
            <div className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
              Pergunta {currentQuestionIndex + 1} de {questions.length}
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
          
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Tópico: {currentQuestion.topicId.split('-')[0]}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Nível: {currentQuestion.cognitiveLevel}
            </div>
          </div>
        </div>
      )}

      {gameStatus === 'finished' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Desafio Diário Completo!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {formatDate(results.date)}
          </p>
          
          <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Pontuação</p>
                <p className="text-3xl font-bold text-primary">{score}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Corretas</p>
                <p className="text-3xl font-bold text-green-500">{results.correctAnswers}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Incorretas</p>
                <p className="text-3xl font-bold text-red-500">{results.wrongAnswers}</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Tempo</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatTime(results.timeSpent)}</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Volte amanhã para um novo desafio diário!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => router.push('/quiz')}>
              Voltar para Quiz
            </Button>
            <Button variant="primary" onClick={() => router.push('/quiz/ranking')}>
              Ver Ranking
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 