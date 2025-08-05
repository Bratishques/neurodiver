'use client';
import { useState } from 'react';
import { questions, testResults, type Question, type TestResult } from './data';

interface NeuroTestPopupProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: string;
}

const NeuroTestPopup = ({ isOpen, onClose, mode }: NeuroTestPopupProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null);

  // Цвета для режима дислексии
  const dislexiaColors = ['#FF41A4', '#78FF7F', '#FFB55A', '#000000', '#17ECFF'];
  
  // Получаем случайный цвет для текущего вопроса
  const getRandomDislexiaColor = () => {
    return dislexiaColors[Math.floor(Math.random() * dislexiaColors.length)];
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const randomResult =
        testResults[Math.floor(Math.random() * testResults.length)];
      setCurrentResult(randomResult);
      setShowResults(true);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setCurrentResult(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-popupOverlay z-50 flex items-center justify-center">
      <div
        className={`w-full ${mode === 'dislexia' ? 'font-third' : 'bg-popupBg'} rounded-3xl mt-30 mx-auto flex flex-col ${showResults ? 'max-w-150' : 'max-w-200 pb-10'}`}
        style={mode === 'dislexia' ? { backgroundColor: getRandomDislexiaColor() } : {}}
      >
        <div
          className={`flex items-center justify-between ${showResults ? 'pt-6 pr-6 pl-6' : 'p-6'}`}
        >
          {!showResults ? (
            <div className="flex items-center gap-3.5">
              <div className="text-popupText font-main text-vase leading-6">
                {currentQuestion + 1}/10
              </div>

              <div className="flex gap-1.5">
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i <= currentQuestion
                        ? 'bg-popupText'
                        : 'bg-popupTextSecondary'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <button
            onClick={handleClose}
            className="text-popupText cursor-pointer text-sm font-bold hover:text-popupCloseHover transition-colors"
          >
            ✕
          </button>
        </div>

        <div
          className={`flex-1 flex flex-col justify-center p-8 ${!showResults ? 'pt-4 px-11' : 'pt-0'}`}
        >
          {!showResults ? (
            <>
              <h2 className="text-white font-secondary text-5xl tracking-tighter mb-10 mx-auto">
                {questions[currentQuestion].text}
              </h2>

              <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto w-full">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option.letter)}
                    className="w-full bg-popupButtonBg hover:bg-popupButtonHover cursor-pointer active:bg-popupButtonActive transition-colors rounded-2xl p-4 flex items-center gap-6 text-left"
                  >
                    <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">
                        {option.letter}
                      </span>
                    </div>
                    <span className="text-white font-main text-xl leading-relaxed">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-left max-w-150 mx-auto p-6 pt-0">
              <h2 className="text-white font-main text-xl leading-7.5 mb-4">
                Most likely, you
              </h2>
              <h3
                className={`text-white font-secondary tracking-tighter mb-3 ${
                  currentResult?.title.replace(/’/g, "'") ===
                  "TOURETTE'S SYNDROME"
                    ? 'text-[64px] leading-16'
                    : 'text-[96px] leading-25'
                }`}
              >
                {currentResult?.title}
              </h3>
              <p className="text-white font-main text-xl leading-7.5 mb-5">
                {currentResult?.description}
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-white text-black cursor-pointer font-main text-xl leading-5 py-6 px-8 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Gotcha!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeuroTestPopup;
