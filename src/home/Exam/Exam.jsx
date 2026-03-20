import  { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const MockTestApp = () => {
  const questionsData = [
    {
      id: 1,
      question:
        "smatter hche highest kinetic energy of  has  the highest kinetic ehjgjgjgjkhhkjhas the highest kinetic energy of particles?Which state of matter has the highest kinetic energy of particles?Which state of matter has the highest kinetic energy of particles?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 3,
      type: "Science",
    },
    {
      id: 2,
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Au", "Ag", "Gd"],
      correctAnswer: 1,
      type: "Science",
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      type: "Science",
    },
    {
      id: 4,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correctAnswer: 0,
      type: "Science",
    },
    {
      id: 5,
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      type: "Science",
    },
    {
      id: 6,
      question:
        "Which state of matter has the highest kinetic energy of particles?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 3,
      type: "Science",
    },
    {
      id: 7,
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Au", "Ag", "Gd"],
      correctAnswer: 1,
      type: "Science",
    },
    {
      id: 8,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      type: "Science",
    },
    {
      id: 9,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correctAnswer: 0,
      type: "Science",
    },
    {
      id: 10,
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      type: "Science",
    },
    {
      id: 11,
      question:
        "Which state of matter has the highest kinetic energy of particles?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 3,
      type: "Science",
    },
    {
      id: 12,
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Au", "Ag", "Gd"],
      correctAnswer: 1,
      type: "Science",
    },
    {
      id: 13,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      type: "Science",
    },
    {
      id: 14,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correctAnswer: 0,
      type: "Science",
    },
    {
      id: 15,
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 2,
      type: "Science",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [showSidebar, setShowSidebar] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !testSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmitTest();
    }
  }, [timeLeft, testSubmitted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const clearResponse = () => {
    const newAnswers = { ...answers };
    delete newAnswers[currentQuestion];
    setAnswers(newAnswers);
  };

  const toggleMarkForReview = () => {
    const newMarked = new Set(markedForReview);
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion);
    } else {
      newMarked.add(currentQuestion);
    }
    setMarkedForReview(newMarked);
  };

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
    if (Object.prototype.hasOwnProperty.call(answers, index)) {
      return markedForReview.has(index) ? "answered-marked" : "answered";
    } else if (markedForReview.has(index)) {
      return "marked";
    }
    return "not-attempted";
  };

  const handleSubmitTest = () => {
    setTestSubmitted(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "answered":
        return "bg-green-500 text-white";
      case "not-attempted":
        return "bg-gray-200 text-gray-700";
      case "marked":
        return "bg-purple-500 text-white";
      case "answered-marked":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const getStatusCount = (status) => {
    return Array.from({ length: questionsData.length }, (_, i) => i).filter(
      (i) => getQuestionStatus(i) === status
    ).length;
  };

  if (testSubmitted) {
    const correctAnswers = Object.entries(answers).filter(
      ([questionIndex, answerIndex]) =>
        questionsData[parseInt(questionIndex)].correctAnswer === answerIndex
    ).length;

    return (
     <div className="min-h-screen flex items-start justify-center p-2 sm:p-4">
  <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 max-w-6xl w-full">
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
      Test Completed!
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm md:text-base">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Section</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Total Questions</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Attempted</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Correct</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2 text-center">Score (%)</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="px-2 py-1 sm:px-4 sm:py-2">Science</td>
            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">{questionsData.length}</td>
            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">{Object.keys(answers).length}</td>
            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">{correctAnswers}</td>
            <td className="px-2 py-1 sm:px-4 sm:py-2 text-center">
              {((correctAnswers / questionsData.length) * 100).toFixed(1)}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex flex-row sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
      >
        Restart Test
      </button>
      <Link
        to="/exam/review"
        className="inline-block bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base text-center w-full sm:w-auto"
      >
        Review Answer
      </Link>
    </div>
  </div>
</div>
    );
  }

  return (
    <div className=" bg-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-2 sm:p-1.5 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-row sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-md sm:text-xl font-bold">Section:</h1>
            <p className="text-sm sm:text-xl font-semibold"> Science</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full">
              <span className="font-mono text-sm sm:text-base">Time Left</span>

              <Clock size={18} />
              <span className="font-mono text-sm sm:text-base">
                {formatTime(timeLeft)}
              </span>
            </div>
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
        {/* Main Contnt */}
        <main className="flex-1 p-4 sm:p-6 lg:p-2 max-h-screen  md:h-150 overflow-y-auto ">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            {/* Question Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
              <div>
                <span className="text-xs font-semibold sm:text-xl text-gray-800">
                  Question Type: Multiple Choice Question
                </span>
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
                </div>{" "}
                {questionsData[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-3 flex-1 h-78">
                {questionsData[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 sm:p-4  border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                      answers[currentQuestion] === index
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={index}
                      checked={answers[currentQuestion] === index}
                      onChange={() => handleAnswerSelect(index)}
                      className="mr-3 w-4 h-4"
                    />
                    <span className="text-sm sm:text-base text-gray-700">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t gap-4 sm:gap-0">
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={goToPrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-1.5 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>
                <button
                  onClick={toggleMarkForReview}
                  className={`px-1.5 sm:px-4 py-2 rounded-lg text-sm transition-colors ${
                    markedForReview.has(currentQuestion)
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  }`}
                >
                  {markedForReview.has(currentQuestion)
                    ? "Unmark"
                    : "Mark for Review"}
                </button>
                <button
                  onClick={clearResponse}
                  className="px-1.5 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm transition-colors"
                >
                  Clear Response
                </button>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={goToNext}
                  disabled={currentQuestion === questionsData.length - 1}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm transition-colors"
                >
                  Submit Test
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Desktop Sidebaar */}
        <aside className="hidden lg:block w-80 bg-white shadow-sm h-150">
          <div className="h-full flex flex-col">
            <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-black p-2 text-center">
              <h3 className="font-bold text-lg">Question Panel</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-green-600">
                    {getStatusCount("answered")}
                  </div>
                  <div className="text-xs text-green-700 font-medium">
                    Answered
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-600">
                    {getStatusCount("not-attempted")}
                  </div>
                  <div className="text-xs text-gray-700 font-medium">
                    Not Answered
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-purple-600">
                    {getStatusCount("marked")}
                  </div>
                  <div className="text-xs text-purple-700 font-medium">
                    Marked
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-blue-600">
                    {getStatusCount("answered-marked")}
                  </div>
                  <div className="text-xs text-blue-700 font-medium">
                    Ans & Marked
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                  Status Legend
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Not Answered</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Marked for Review</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Answered & Marked</span>
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
                            ${
                              currentQuestion === index
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
            <div className="p-4 border-t bg-gray-50">
              <button
                onClick={handleSubmitTest}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
              >
                Submit Test
              </button>
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
                <h3 className="font-bold text-lg">Question Panel</h3>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-2 hover:bg-blue-800 hover:text-white rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 p-4">
                <div className="grid grid-row-2 gap-3 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600">
                      {getStatusCount("answered")}
                    </div>
                    <div className="text-xs text-green-700 font-medium">
                      Answered
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-600">
                      {getStatusCount("not-attempted")}
                    </div>
                    <div className="text-xs text-gray-700 font-medium">
                      Not Answered
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-purple-600">
                      {getStatusCount("marked")}
                    </div>
                    <div className="text-xs text-purple-700 font-medium">
                      Marked
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-blue-600">
                      {getStatusCount("answered-marked")}
                    </div>
                    <div className="text-xs text-blue-700 font-medium">
                      Ans & Marked
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    Status Legend
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span>Not Answered</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Marked for Review</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Answered & Marked</span>
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
                  ${
                    currentQuestion === index
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
              <div className="p-4 border-t bg-gray-50">
                <button
                  onClick={handleSubmitTest}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                >
                  Submit Test
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default MockTestApp;
