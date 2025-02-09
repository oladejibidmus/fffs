import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lazy, Suspense } from "react";

const RechartsComponents = lazy(() => import("./RechartsComponents"));

interface ProgressTrackerProps {
  streakData?: {
    currentStreak: number;
    longestStreak: number;
    completionRate: number;
  };
  healthMetrics?: Array<{
    date: string;
    value: number;
  }>;
}

const defaultHealthMetrics = [
  { date: "2024-01-01", value: 65 },
  { date: "2024-01-02", value: 68 },
  { date: "2024-01-03", value: 75 },
  { date: "2024-01-04", value: 72 },
  { date: "2024-01-05", value: 80 },
  { date: "2024-01-06", value: 85 },
  { date: "2024-01-07", value: 82 },
];

const defaultStreakData = {
  currentStreak: 5,
  longestStreak: 12,
  completionRate: 75,
};

const ProgressTracker = ({
  streakData = defaultStreakData,
  healthMetrics = defaultHealthMetrics,
}: ProgressTrackerProps) => {
  return (
    <Card className="p-6 w-full bg-white">
      <h2 className="text-2xl font-semibold mb-6">Progress Tracker</h2>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="metrics">Health Metrics</TabsTrigger>
          <TabsTrigger value="streaks">Habit Streaks</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-4">
          <div className="h-[300px] w-full">
            <Suspense fallback={<div>Loading chart...</div>}>
              <RechartsComponents healthMetrics={healthMetrics} />
            </Suspense>
          </div>
        </TabsContent>

        <TabsContent value="streaks" className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Current Streak</span>
                <span className="text-sm font-medium">
                  {streakData.currentStreak} days
                </span>
              </div>
              <Progress
                value={streakData.currentStreak}
                max={30}
                className="h-2"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Longest Streak</span>
                <span className="text-sm font-medium">
                  {streakData.longestStreak} days
                </span>
              </div>
              <Progress
                value={streakData.longestStreak}
                max={30}
                className="h-2"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Completion Rate</span>
                <span className="text-sm font-medium">
                  {streakData.completionRate}%
                </span>
              </div>
              <Progress value={streakData.completionRate} className="h-2" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ProgressTracker;
