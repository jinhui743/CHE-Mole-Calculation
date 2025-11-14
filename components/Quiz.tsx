import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import MathJaxRenderer from './MathJaxRenderer';

// Helper to process explanation markdown into HTML
const formatExplanation = (text: string): string => {
  return text
    .replace(/^#### .*$/m, '') // Remove markdown h4 title
    .trim()
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold** -> <strong>
    .replace(/\n/g, '<br />'); // newline -> <br>
};

interface Props {
  questions: Question[];
  onFinish: (score: number, time: number) => void;
}

const Quiz: React.FC<Props> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      onFinish(score, time);
    }
  };
  
  const getOptionClasses = (index: number) => {
    if (!isAnswered) {
      return 'bg-white hover:bg-blue-50 border-gray-300 text-gray-800';
    }
    const isCorrect = questions[currentQuestionIndex].answer === index;
    if (selectedAnswer === index) {
      return isCorrect ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800';
    }
    if (isCorrect) {
       return 'bg-green-100 border-green-500 text-green-800';
    }
    return 'bg-white border-gray-300 opacity-60 text-gray-800';
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isCorrectSelection = selectedAnswer === currentQuestion.answer;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="text-sm font-semibold text-gray-800 bg-gray-200 px-3 py-1 rounded-full">
          Time: {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div key={currentQuestionIndex}>
        <MathJaxRenderer
          as="h3"
          className="text-xl md:text-2xl font-semibold text-gray-800 mb-6"
          content={currentQuestion.question}
        />
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={`w-full text-left p-4 border rounded-lg transition-all duration-300 text-lg ${getOptionClasses(index)} ${!isAnswered ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              <MathJaxRenderer as="span" content={option} />
            </button>
          ))}
        </div>
      </div>

      {isAnswered && (
        <div className="mt-6 text-center">
             {!isCorrectSelection && (
                <div className="bg-yellow-50 border border-yellow-300 text-left rounded-lg p-4 mt-4 text-gray-700">
                    <h4 className="font-bold text-lg mb-2 text-yellow-800">解题思路 (Solution)</h4>
                    <MathJaxRenderer content={formatExplanation(currentQuestion.explanation)} />
                </div>
            )}
            <button
              onClick={handleNextQuestion}
              className="mt-6 bg-green-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105"
            >
              {currentQuestionIndex < questions.length - 1 ? '下一题 (Next)' : '完成测验 (Finish)'}
            </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;