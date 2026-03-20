import { useState } from "react";
import {
  Clock,
  FileText,
  AlertCircle,
  CheckCircle,
  Monitor,
  Wifi,
  Volume2,
  Eye,
  Shield,
  ArrowRight,
  ChevronLeft,
  Download,
} from "lucide-react";

const ExamInstructionsPage = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const examDetails = {
    title: "NEET Physics Mock Test #15",
    duration: "3 Hours",
    totalQuestions: 45,
    totalMarks: 180,
    positiveMarks: 4,
    negativeMarks: 1,
    passingMarks: 50,
    sections: [
      { name: "Mechanics", questions: 15 },
      { name: "Thermodynamics", questions: 10 },
      { name: "Optics", questions: 10 },
      { name: "Modern Physics", questions: 10 },
    ],
  };

  const generalInstructions = [
    "Please read all instructions carefully before starting the exam.",
    "Ensure you have a stable internet connection throughout the exam.",
    "Keep your device charged or connected to power supply.",
    "Close all other applications and browser tabs.",
    "Do not refresh the browser page during the exam.",
    "The exam will auto-submit when time expires.",
    "You can review and change answers before final submission.",
    "Calculator and rough sheets are allowed for calculations.",
  ];

  const examRules = [
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: "Time Management",
      description:
        "Total duration is 3 hours. Timer will be displayed throughout the exam. No additional time will be given.",
    },
    {
      icon: <FileText className="w-5 h-5 text-green-600" />,
      title: "Question Navigation",
      description:
        "You can move between questions freely. Use the question palette to navigate quickly between questions.",
    },
    {
      icon: <Monitor className="w-5 h-5 text-purple-600" />,
      title: "Screen Requirements",
      description:
        "Use a desktop or laptop for best experience. Mobile devices are supported but not recommended.",
    },
    {
      icon: <Wifi className="w-5 h-5 text-orange-600" />,
      title: "Technical Requirements",
      description:
        "Stable internet connection is mandatory. Exam will pause if connection is lost and resume when restored.",
    },
  ];

  const markingScheme = [
    {
      type: "Correct Answer",
      marks: `+${examDetails.positiveMarks}`,
      color: "text-green-600 bg-green-50",
    },
    {
      type: "Wrong Answer",
      marks: `-${examDetails.negativeMarks}`,
      color: "text-red-600 bg-red-50",
    },
    { type: "Unanswered", marks: "0", color: "text-gray-600 bg-gray-50" },
  ];

  const importantNotes = [
    {
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      text: "Once you start the exam, you cannot pause or restart it.",
      type: "warning",
    },
    {
      icon: <Eye className="w-5 h-5 text-blue-500" />,
      text: "Your screen activity may be monitored for security purposes.",
      type: "info",
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      text: "Any form of cheating will result in immediate disqualification.",
      type: "warning",
    },
    {
      icon: <Volume2 className="w-5 h-5 text-purple-500" />,
      text: "Ensure your device volume is at an appropriate level for any audio questions.",
      type: "info",
    },
  ];

  const handleStartExam = () => {
    if (agreedToTerms) {
      alert("Redirecting to exam...");
    }
  };

  const handleDownloadInstructions = () => {
    const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>NEET Physics Mock Test #15 - Instructions</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
          h1 { font-size: 24px; font-weight: bold; color: #1F2937; }
          h2 { font-size: 20px; font-weight: bold; color: #1F2937; margin-top: 20px; }
          p, li { font-size: 14px; color: #374151; }
          ul { list-style-type: disc; padding-left: 20px; }
          @media print {
            body { padding: 10mm; }
          }
        </style>
      </head>
      <body>
        <h1>NEET Physics Mock Test #15 - Exam Instructions</h1>

        <h2>Exam Overview</h2>
        <ul>
          <li><b>Title:</b> ${examDetails.title}</li>
          <li><b>Duration:</b> ${examDetails.duration}</li>
          <li><b>Total Questions:</b> ${examDetails.totalQuestions}</li>
          <li><b>Total Marks:</b> ${examDetails.totalMarks}</li>
          <li><b>Passing Marks:</b> ${examDetails.passingMarks}%</li>
        </ul>

        <h2>General Instructions</h2>
        <ul>
          ${generalInstructions.map((inst) => `<li>${inst}</li>`).join("")}
        </ul>

        <h2>Exam Rules & Guidelines</h2>
        <ul>
          ${examRules
            .map((rule) => `<li><b>${rule.title}:</b> ${rule.description}</li>`)
            .join("")}
        </ul>

        <h2>Marking Scheme</h2>
        <ul>
          ${markingScheme
            .map((scheme) => `<li><b>${scheme.type}:</b> ${scheme.marks}</li>`)
            .join("")}
        </ul>

        <h2>Question Distribution</h2>
        <ul>
          ${examDetails.sections
            .map(
              (section) =>
                `<li><b>${section.name}:</b> ${section.questions} Questions</li>`
            )
            .join("")}
        </ul>

        <h2>Important Notes</h2>
        <ul>
          ${importantNotes.map((note) => `<li>${note.text}</li>`).join("")}
        </ul>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "NEET_Physics_Mock_Test_15_Instructions.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
    

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {examDetails.title}
            </h1>
            <p className="text-gray-600">
              Please read the following instructions carefully before starting
              your exam
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">
                  {examDetails.duration}
                </div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <FileText className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">
                  {examDetails.totalQuestions}
                </div>
                <div className="text-sm text-gray-600">Questions</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">
                  {examDetails.totalMarks}
                </div>
                <div className="text-sm text-gray-600">Total Marks</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">
                  {examDetails.passingMarks}%
                </div>
                <div className="text-sm text-gray-600">Passing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                General Instructions
              </h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {generalInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Exam Rules & Guidelines
              </h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {examRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">{rule.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">
                        {rule.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
                Marking Scheme
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {markingScheme.map((scheme, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${scheme.color}`}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">
                        {scheme.marks}
                      </div>
                      <div className="text-sm font-medium">{scheme.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-indigo-600" />
                Question Distribution
              </h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {examDetails.sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900">
                      {section.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {section.questions} Questions
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                Important Notes
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {importantNotes.map((note, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-4 rounded-lg border ${
                      note.type === "warning"
                        ? "bg-red-50 border-red-200"
                        : "bg-blue-50 border-blue-200"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">{note.icon}</div>
                    <p className="text-sm text-gray-700">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mt-1"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                  I have read and understood all the instructions and rules
                  mentioned above. I agree to follow all guidelines during the
                  examination and understand that any violation may result in
                  disqualification.
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <button
                  onClick={handleDownloadInstructions}
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Instructions
                </button>
                <button
                  onClick={handleStartExam}
                  disabled={!agreedToTerms}
                  className={`w-full sm:w-auto px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center ${
                    agreedToTerms
                      ? "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Start Exam
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              {!agreedToTerms && (
                <p className="text-sm text-red-600 text-center mt-2">
                  Please agree to the terms and conditions to start the exam
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExamInstructionsPage;
