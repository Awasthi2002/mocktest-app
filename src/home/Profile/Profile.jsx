import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Calendar,
  Trophy,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Star,
} from "lucide-react";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock student data
  const studentData = {
    profile: {
      name: "Alex Johnson",
      email: "alex.johnson@email.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      joinDate: "September 2024",
      grade: "12th Grade",
      totalExams: 24,
      averageScore: 78.5,
      bestScore: 95,
      totalStudyTime: "156 hours",
    },
    examHistory: [
      {
        id: 1,
        name: "Physics Mock Test - Mechanics",
        date: "2024-05-25",
        attempts: 3,
        bestScore: 95,
        lastScore: 92,
        duration: "2h 30m",
        status: "completed",
      },
      {
        id: 2,
        name: "Chemistry Mock Test - Organic Chemistry",
        date: "2024-05-20",
        attempts: 2,
        bestScore: 88,
        lastScore: 88,
        duration: "2h 15m",
        status: "completed",
      },
      {
        id: 3,
        name: "Biology Mock Test - Cell Structure",
        date: "2024-05-18",
        attempts: 1,
        bestScore: 76,
        lastScore: 76,
        duration: "2h 00m",
        status: "completed",
      },
      {
        id: 4,
        name: "Mathematics Mock Test - Calculus",
        date: "2024-05-15",
        attempts: 4,
        bestScore: 82,
        lastScore: 79,
        duration: "3h 00m",
        status: "completed",
      },
      {
        id: 5,
        name: "Physics Mock Test - Thermodynamics",
        date: "2024-05-12",
        attempts: 2,
        bestScore: 91,
        lastScore: 89,
        duration: "2h 45m",
        status: "completed",
      },
      {
        id: 6,
        name: "Chemistry Mock Test - Inorganic Chemistry",
        date: "2024-05-10",
        attempts: 1,
        bestScore: 73,
        lastScore: 73,
        duration: "2h 30m",
        status: "completed",
      },
    ],
    subjectStats: [
      {
        subject: "Physics",
        exams: 8,
        avgScore: 85.2,
        color: "from-blue-500 to-blue-600",
      },
      {
        subject: "Chemistry",
        exams: 6,
        avgScore: 79.8,
        color: "from-green-500 to-green-600",
      },
      {
        subject: "Biology",
        exams: 5,
        avgScore: 72.4,
        color: "from-purple-500 to-purple-600",
      },
      {
        subject: "Mathematics",
        exams: 5,
        avgScore: 81.6,
        color: "from-orange-500 to-orange-600",
      },
    ],
    recentActivity: [
      {
        type: "exam",
        description: "Completed Physics Mock Test",
        time: "2 hours ago",
        score: 92,
      },
      {
        type: "achievement",
        description: "Achieved 90%+ in 3 consecutive tests",
        time: "1 day ago",
      },
      { type: "study", description: "Studied for 3 hours", time: "2 days ago" },
      {
        type: "exam",
        description: "Retook Chemistry Mock Test",
        time: "3 days ago",
        score: 88,
      },
    ],
  };

 

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getGradeFromScore = (score) => {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B+";
    if (score >= 60) return "B";
    return "C";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative group">
              <img
                src={studentData.profile.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {studentData.profile.name}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{studentData.profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {studentData.profile.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{studentData.profile.grade}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">
                    {studentData.profile.totalExams}
                  </div>
                  <div className="text-sm opacity-90">Total Exams</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">
                    {studentData.profile.averageScore}%
                  </div>
                  <div className="text-sm opacity-90">Average Score</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">
                    {studentData.profile.bestScore}%
                  </div>
                  <div className="text-sm opacity-90">Best Score</div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">
                    {studentData.profile.totalStudyTime}
                  </div>
                  <div className="text-sm opacity-90">Study Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="overflow-x-auto">
              <nav className="flex space-x-8 px-6 min-w-max" aria-label="Tabs">
                {[
                  { id: "overview", name: "Overview", icon: BarChart3 },
                  { id: "history", name: "Exam History", icon: BookOpen },
                  { id: "analytics", name: "Analytics", icon: TrendingUp },
                  { id: "achievements", name: "Achievements", icon: Trophy },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-fade-in">
                {/* Subject Performance */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <PieChart className="w-6 h-6 text-indigo-600" />
                    Subject Performance
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {studentData.subjectStats.map((subject, index) => (
                      <div
                        key={subject.subject}
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${subject.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                        >
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-center mb-2">
                          {subject.subject}
                        </h4>
                        <div className="text-center">
                          <div
                            className={`text-2xl font-bold ${getScoreColor(
                              subject.avgScore
                            )}`}
                          >
                            {subject.avgScore}%
                          </div>
                          <div className="text-sm text-gray-500">
                            {subject.exams} exams taken
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-indigo-600" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {studentData.recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 animate-slide-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === "exam"
                              ? "bg-blue-100 text-blue-600"
                              : activity.type === "achievement"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {activity.type === "exam" ? (
                            <BookOpen className="w-5 h-5" />
                          ) : activity.type === "achievement" ? (
                            <Trophy className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {activity.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                        {activity.score && (
                          <div
                            className={`font-bold ${getScoreColor(
                              activity.score
                            )}`}
                          >
                            {activity.score}%
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Exam History Tab */}
            {activeTab === "history" && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  Exam History ({studentData.examHistory.length} exams)
                </h3>
                <div className="space-y-4">
                  {studentData.examHistory.map((exam, index) => (
                    <div
                      key={exam.id}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {exam.name}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exam.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {exam.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              {exam.attempts} attempt
                              {exam.attempts > 1 ? "s" : ""}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                          <div className="text-center">
                            <div className="text-sm text-gray-500">
                              Best Score
                            </div>
                            <div
                              className={`text-2xl font-bold ${getScoreColor(
                                exam.bestScore
                              )}`}
                            >
                              {exam.bestScore}%
                            </div>
                            <div className="text-xs text-gray-400">
                              Grade {getGradeFromScore(exam.bestScore)}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-500">
                              Last Score
                            </div>
                            <div
                              className={`text-2xl font-bold ${getScoreColor(
                                exam.lastScore
                              )}`}
                            >
                              {exam.lastScore}%
                            </div>
                            <div className="text-xs text-gray-400">
                              Grade {getGradeFromScore(exam.lastScore)}
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="animate-fade-in space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  Performance Analytics
                </h3>

                {/* Score Distribution */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">
                    Score Distribution
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        range: "90-100%",
                        count: 6,
                        percentage: 25,
                        color: "bg-green-500",
                      },
                      {
                        range: "80-89%",
                        count: 8,
                        percentage: 33,
                        color: "bg-blue-500",
                      },
                      {
                        range: "70-79%",
                        count: 7,
                        percentage: 29,
                        color: "bg-yellow-500",
                      },
                      {
                        range: "60-69%",
                        count: 3,
                        percentage: 13,
                        color: "bg-red-500",
                      },
                    ].map((item) => (
                      <div key={item.range} className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">
                          {item.range}
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <div className="w-16 text-sm text-gray-600">
                          {item.count} exams
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Trends */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      Improvement Rate
                    </h4>
                    <div className="text-3xl font-bold text-green-600">
                      +12%
                    </div>
                    <p className="text-sm text-gray-500">vs last month</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Consistency</h4>
                    <div className="text-3xl font-bold text-blue-600">85%</div>
                    <p className="text-sm text-gray-500">stable performance</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      Avg. Completion
                    </h4>
                    <div className="text-3xl font-bold text-purple-600">
                      2h 25m
                    </div>
                    <p className="text-sm text-gray-500">per exam</p>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === "achievements" && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-indigo-600" />
                  Achievements & Badges
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "First Perfect Score",
                      description: "Scored 100% on your first exam",
                      icon: Star,
                      color: "from-yellow-400 to-yellow-500",
                      earned: true,
                    },
                    {
                      name: "Consistent Performer",
                      description: "Maintained 80%+ average for 10 exams",
                      icon: Target,
                      color: "from-green-400 to-green-500",
                      earned: true,
                    },
                    {
                      name: "Quick Learner",
                      description: "Improved score by 20% in retakes",
                      icon: TrendingUp,
                      color: "from-blue-400 to-blue-500",
                      earned: true,
                    },
                    {
                      name: "Subject Master",
                      description: "90%+ average in Physics",
                      icon: BookOpen,
                      color: "from-purple-400 to-purple-500",
                      earned: true,
                    },
                    {
                      name: "Dedication Award",
                      description: "100+ hours of study time",
                      icon: Clock,
                      color: "from-indigo-400 to-indigo-500",
                      earned: false,
                    },
                    {
                      name: "Exam Champion",
                      description: "Top 10% in monthly rankings",
                      icon: Trophy,
                      color: "from-red-400 to-red-500",
                      earned: false,
                    },
                  ].map((achievement, index) => (
                    <div
                      key={achievement.name}
                      className={`border rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-slide-in ${
                        achievement.earned
                          ? "bg-white border-gray-200 hover:shadow-lg"
                          : "bg-gray-50 border-gray-100 opacity-60"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${
                          achievement.color
                        } rounded-full flex items-center justify-center mx-auto mb-4 ${
                          !achievement.earned && "grayscale"
                        }`}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {achievement.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {achievement.description}
                      </p>
                      {achievement.earned ? (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          <Award className="w-3 h-3" />
                          Earned
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          <Clock className="w-3 h-3" />
                          In Progress
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StudentProfile;