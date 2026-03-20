import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Play, Users, Clock, Award, BookOpen, Target, Star } from 'lucide-react';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data for offers and banners
  const carouselItems = [
    {
      id: 1,
      title: "50% OFF Premium Mock Tests",
      subtitle: "Limited Time Offer",
      description: "Get access to 500+ premium science mock tests with detailed solutions",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
      buttonText: "Claim Offer",
      bgGradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "New Physics Module Released",
      subtitle: "Advanced Quantum Mechanics",
      description: "Master complex physics concepts with our interactive simulations",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
      buttonText: "Start Learning",
      bgGradient: "from-emerald-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Chemistry Lab Simulations",
      subtitle: "Virtual Experiments",
      description: "Practice chemistry experiments safely in our virtual laboratory",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop",
      buttonText: "Try Now",
      bgGradient: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Biology Masterclass",
      subtitle: "Cell Structure & Function",
      description: "Explore the microscopic world with 3D models and animations",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      buttonText: "Explore",
      bgGradient: "from-green-600 to-teal-600"
    }
  ];

  // Exam data for cards
  const examData = [
    {
      title: "NEET Physics",
      description: "Comprehensive physics mock tests covering all NEET syllabus topics",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-700",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      duration: "3 hours",
      questions: "45 Questions",
      textColor: "text-blue-100"
    },
    {
      title: "JEE Chemistry",
      description: "Advanced chemistry problems for JEE Main and Advanced preparation",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-700",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      duration: "3 hours",
      questions: "30 Questions",
      textColor: "text-purple-100"
    },
    {
      title: "AIIMS Biology",
      description: "Specialized biology tests designed for AIIMS entrance preparation",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-green-500 to-green-700",
      buttonColor: "bg-green-600 hover:bg-green-700",
      duration: "2.5 hours",
      questions: "40 Questions",
      textColor: "text-green-100"
    },
    {
      title: "KVPY Science",
      description: "Research aptitude test covering Physics, Chemistry, Biology & Math",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-orange-500 to-orange-700",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      duration: "3 hours",
      questions: "80 Questions",
      textColor: "text-orange-100"
    },
    {
      title: "BITSAT",
      description: "Complete mock test for BITS admission covering all subjects",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-indigo-500 to-indigo-700",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      duration: "3 hours",
      questions: "150 Questions",
      textColor: "text-indigo-100"
    },
    {
      title: "VITEEE",
      description: "VIT Engineering Entrance Examination practice tests",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-teal-500 to-teal-700",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      duration: "2.5 hours",
      questions: "125 Questions",
      textColor: "text-teal-100"
    },
    {
      title: "COMEDK",
      description: "Karnataka engineering entrance exam preparation tests",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-red-500 to-red-700",
      buttonColor: "bg-red-600 hover:bg-red-700",
      duration: "3 hours",
      questions: "180 Questions",
      textColor: "text-red-100"
    },
    {
      title: "General Science",
      description: "Comprehensive science test covering Physics, Chemistry & Biology",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-cyan-500 to-cyan-700",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      duration: "2 hours",
      questions: "60 Questions",
      textColor: "text-cyan-100"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timed Mock Tests",
      description: "Practice with real exam time constraints"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Adaptive Learning",
      description: "Personalized difficulty based on your performance"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Coverage",
      description: "Physics, Chemistry, Biology - all subjects covered"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Detailed insights into your strengths and weaknesses"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Students" },
    { number: "500+", label: "Mock Tests" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Master Science Through
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Practice
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Prepare for your science exams with our comprehensive mock test platform. 
                  Timed tests, detailed analytics, and adaptive learning powered by AI.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-200">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Practice Test</h3>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Live</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 space-y-5">
                    <div className="flex items-center justify-between text-white">
                      <span>Physics Mock Test #15</span>
                      <span className="text-yellow-400">45:23</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <div className="text-green-400 font-semibold">15</div>
                        <div className="text-gray-400">Correct</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-semibold">3</div>
                        <div className="text-gray-400">Wrong</div>
                      </div>
                      <div className="text-center">
                        <div className="text-yellow-400 font-semibold">2</div>
                        <div className="text-gray-400">Skipped</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Special Offers & Updates
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on our latest features and exclusive offers
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  <div className={`bg-gradient-to-r ${item.bgGradient} relative min-h-[450px] sm:min-h-[500px] md:min-h-[400px] lg:h-80`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative h-full flex items-center py-6 sm:py-8">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                          <div className="flex justify-center px-4">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-48 sm:h-56 md:h-64 object-cover"
                            />
                          </div>
                          <div className="text-white space-y-4 sm:space-y-6 flex flex-col items-center md:items-start text-center md:text-left px-4">
                            <div className="space-y-2">
                              <p className="text-yellow-300 font-semibold text-sm sm:text-base lg:text-lg">
                                {item.subtitle}
                              </p>
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                {item.title}
                              </h3>
                              <p className="text-base sm:text-lg lg:text-xl text-gray-200">
                                {item.description}
                              </p>
                            </div>
                            <button className="bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                              {item.buttonText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Select Your Exam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive collection of science mock exams designed for various competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {examData.map((exam, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${exam.gradient} p-6 text-white`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    {exam.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                  <p className={`${exam.textColor} text-sm`}>{exam.description}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {exam.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {exam.questions}
                    </span>
                  </div>
                  <button 
                    className={`w-full ${exam.buttonColor} text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105`}
                  >
                    Start Exam
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View All Exams
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ScienceMock?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features designed to accelerate your learning and boost exam performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transform group-hover:scale-110 transition-all duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-6
00">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Main;