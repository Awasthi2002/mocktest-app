import  { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  X,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

const ReviewAnswerApp = () => {
  const questionsData = [
    {
      id: 1,
      question: "Which state of matter has the highest kinetic energy of particles?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 3,
      userAnswer: 2,
      type: "Science",
      explanation: "Plasma has the highest kinetic energy among all states of matter. In plasma, particles are highly energized and ionized, moving much faster than in gas, liquid, or solid states. The order of kinetic energy is: Plasma > Gas > Liquid > Solid."
    },
    {
      id: 2,
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Au", "Ag", "Gd"],
      correctAnswer: 1,
      userAnswer: 1,
      type: "Science",
      explanation: "The chemical symbol for Gold is 'Au', derived from the Latin word 'aurum' meaning gold. This symbol has been used internationally in the periodic table of elements."
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      userAnswer: 1,
      type: "Science",
      explanation: "Mars is known as the Red Planet due to iron oxide (rust) on its surface, which gives it a reddish appearance. This distinctive color makes it easily recognizable in the night sky."
    },
    {
      id: 4,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correctAnswer: 0,
      userAnswer: null,
      type: "Science",
      explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s (299,792,458 m/s to be exact). This is a fundamental physical constant denoted by 'c' and is the maximum speed at which energy and information can travel."
    },
    {
      id: 5,
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      userAnswer: 0,
      type: "Science",
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas. Oxygen comprises about 21%, while other gases including Carbon Dioxide and Argon make up the remaining 1%."
    },
    {
      id: 6,
      question: "Which state of matter has the highest kinetic energy of particles?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 3,
      userAnswer: 3,
      type: "Science",
      explanation: "Plasma has the highest kinetic energy among all states of matter. In plasma, particles are highly energized and ionized, moving much faster than in gas, liquid, or solid states."
    },
    {
      id: 7,
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Au", "Ag", "Gd"],
      correctAnswer: 1,
      userAnswer: 1,
      type: "Science",
      explanation: "The chemical symbol for Gold is 'Au', derived from the Latin word 'aurum' meaning gold. This symbol has been used internationally in the periodic table of elements."
    },
    {
      id: 8,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      userAnswer: null,
      type: "Science",
      explanation: "Mars is known as the Red Planet due to iron oxide (rust) on its surface, which gives it a reddish appearance. This distinctive color makes it easily recognizable in the night sky."
    },
    {
      id: 9,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correctAnswer: 0,
      userAnswer: 2,
      type: "Science",
      explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s (299,792,458 m/s to be exact). This is a fundamental physical constant denoted by 'c' and is the maximum speed at which energy and information can travel."
    },
    {
      id: 10,
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      userAnswer: 2,
      type: "Science",
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas. Oxygen comprises about 21%, while other gases including Carbon Dioxide and Argon make up the remaining 1%."
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
    setShowSidebar(false);
  };

  const getQuestionStatus = (index) => {
    const question = questionsData[index];
    if (question.userAnswer === null) {
      return "not-attempted";
    } else if (question.userAnswer === question.correctAnswer) {
      return "correct";
    } else {
      return "incorrect";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "correct":
        return "bg-green-500 text-white";
      case "incorrect":
        return "bg-red-500 text-white";
      case "not-attempted":
        return "bg-gray-300 text-gray-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const getStatusCount = (status) => {
    return questionsData.filter((_, i) => getQuestionStatus(i) === status).length;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "correct":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "incorrect":
        return <XCircle className="w-5 h-5 text-red-600" />;
      case "not-attempted":
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const currentQuestionData = questionsData[currentQuestion];
  const currentStatus = getQuestionStatus(currentQuestion);

  return (
    <div className="bg-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-2 sm:p-2 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-row sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-md sm:text-xl font-bold">Review Answer:</h1>
            <p className="text-sm sm:text-xl font-semibold">Science</p>
          </div>
          <div className="flex items-center gap-4">
           
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              {showSidebar ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-8xl mx-auto w-full">
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-2 max-h-screen md:h-150 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            {/* Question Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold sm:text-xl text-gray-800">
                  Question Type: Multiple Choice Question
                </span>
                {getStatusIcon(currentStatus)}
              </div>
              <div className="text-sm font-semibold text-gray-800 mt-2 sm:mt-0">
                Science
              </div>
            </div>

            {/* Question */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-base sm:text-md md:text-md font-semibold text-black mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Question No. {currentQuestion + 1}
                </div>
                {currentQuestionData.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 flex-1 h-auto mb-6">
                {currentQuestionData.options.map((option, index) => {
                  const isCorrect = index === currentQuestionData.correctAnswer;
                  const isUserAnswer = index === currentQuestionData.userAnswer;
                  const isWrongUserAnswer = isUserAnswer && !isCorrect;

                  let optionClass = "flex items-center p-3 sm:p-4 border rounded-lg ";
                  
                  if (isCorrect) {
                    optionClass += "border-green-500 bg-green-50 ";
                  } else if (isWrongUserAnswer) {
                    optionClass += "border-red-500 bg-red-50 ";
                  } else {
                    optionClass += "border-gray-300 bg-white ";
                  }

                  return (
                    <div key={index} className={optionClass}>
                      <div className="flex items-center w-full">
                        <div className="mr-3 w-4 h-4 flex items-center justify-center">
                          {isCorrect && <CheckCircle className="w-4 h-4 text-green-600" />}
                          {isWrongUserAnswer && <XCircle className="w-4 h-4 text-red-600" />}
                          {!isCorrect && !isUserAnswer && (
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                          )}
                        </div>
                        <span className={`text-sm sm:text-base flex-1 ${
                          isCorrect ? 'text-green-700 font-medium' : 
                          isWrongUserAnswer ? 'text-red-700' : 'text-gray-700'
                        }`}>
                          {option}
                        </span>
                        <div className="ml-2 text-xs font-semibold">
                          {isCorrect && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Correct Answer
                            </span>
                          )}
                          {isWrongUserAnswer && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">
                              Your Answer
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Result Summary */}
              <div className={`p-4 rounded-lg mb-6 ${
                currentStatus === 'correct' ? 'bg-green-50 border border-green-200' :
                currentStatus === 'incorrect' ? 'bg-red-50 border border-red-200' :
                'bg-gray-50 border border-gray-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(currentStatus)}
                  <span className={`font-semibold ${
                    currentStatus === 'correct' ? 'text-green-800' :
                    currentStatus === 'incorrect' ? 'text-red-800' :
                    'text-gray-700'
                  }`}>
                    {currentStatus === 'correct' ? 'Correct!' :
                     currentStatus === 'incorrect' ? 'Incorrect' :
                     'Not Attempted'}
                  </span>
                </div>
                {currentStatus === 'incorrect' && (
                  <p className="text-sm text-red-700">
                    Your answer: {currentQuestionData.options[currentQuestionData.userAnswer]}
                  </p>
                )}
                {currentStatus === 'not-attempted' && (
                  <p className="text-sm text-gray-600">
                    You did not attempt this question.
                  </p>
                )}
              </div>

              {/* Explanation */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Explanation
                </h3>
                <p className="text-sm text-blue-700 leading-relaxed">
                  {currentQuestionData.explanation}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t gap-4 sm:gap-0">
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={goToPrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>
              </div>
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={goToNext}
                  disabled={currentQuestion === questionsData.length - 1}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm transition-colors"
                >
                  Back to Test
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 bg-white shadow-sm h-150">
          <div className="h-full flex flex-col">
            <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-black p-2 text-center">
              <h3 className="font-bold text-lg">Review Panel</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-green-600">
                    {getStatusCount("correct")}
                  </div>
                  <div className="text-xs text-green-700 font-medium">
                    Correct
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-red-600">
                    {getStatusCount("incorrect")}
                  </div>
                  <div className="text-xs text-red-700 font-medium">
                    Incorrect
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-600">
                    {getStatusCount("not-attempted")}
                  </div>
                  <div className="text-xs text-gray-700 font-medium">
                    Not Attempted
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                  Status Legend
                </h4>
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Correct</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Incorrect</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Not Attempted</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                  Questions
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {questionsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`
                        w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-sm
                        ${currentQuestion === index
                          ? "ring-2 ring-offset-2 ring-blue-400"
                          : "hover:shadow-md"
                        }
                        ${getStatusColor(getQuestionStatus(index))}
                      `}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <aside
            className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col min-h-screen">
              <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-black p-2 flex justify-between items-center">
                <h3 className="font-bold text-lg">Review Panel</h3>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-2 hover:bg-blue-800 hover:text-white rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 p-4">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600">
                      {getStatusCount("correct")}
                    </div>
                    <div className="text-xs text-green-700 font-medium">
                      Correct
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-red-600">
                      {getStatusCount("incorrect")}
                    </div>
                    <div className="text-xs text-red-700 font-medium">
                      Incorrect
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-600">
                      {getStatusCount("not-attempted")}
                    </div>
                    <div className="text-xs text-gray-700 font-medium">
                      Not Attempted
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    Status Legend
                  </h4>
                  <div className="grid grid-cols-2 gap-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Correct</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Incorrect</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span>Not Attempted</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    Questions
                  </h4>
                  <div className="grid grid-cols-5 gap-2">
                    {questionsData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToQuestion(index)}
                        className={`
                          w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-sm
                          ${currentQuestion === index
                            ? "ring-2 ring-offset-2 ring-blue-400"
                            : "hover:shadow-md"
                          }
                          ${getStatusColor(getQuestionStatus(index))}
                        `}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default ReviewAnswerApp;