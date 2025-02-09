import React from "react";
import TodayActionCard from "@/components/dashboard/TodayActionCard";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import RecommendationPanel from "@/components/dashboard/RecommendationPanel";

interface DashboardProps {
  userData?: {
    todayAction?: {
      title: string;
      description: string;
      isCompleted: boolean;
    };
    streakData?: {
      currentStreak: number;
      longestStreak: number;
      completionRate: number;
    };
    healthMetrics?: Array<{
      date: string;
      value: number;
    }>;
    recommendations?: Array<{
      id: string;
      title: string;
      explanation: string;
      dataPoints: string[];
    }>;
  };
}

const Dashboard = ({ userData }: DashboardProps) => {
  const handleActionComplete = () => {
    // Handle action completion logic here
    console.log("Action completed");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-4 space-y-6">
            <TodayActionCard
              action={userData?.todayAction}
              onComplete={handleActionComplete}
            />
            <RecommendationPanel recommendations={userData?.recommendations} />
          </div>

          {/* Right column */}
          <div className="lg:col-span-8">
            <ProgressTracker
              streakData={userData?.streakData}
              healthMetrics={userData?.healthMetrics}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
