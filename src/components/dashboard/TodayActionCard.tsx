import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";
import { motion } from "framer-motion";

interface TodayActionCardProps {
  action?: {
    title: string;
    description: string;
    isCompleted: boolean;
  };
  onComplete?: () => void;
}

const TodayActionCard = ({
  action = {
    title: "Take a 10-minute walk",
    description: "A short walk can boost your energy and mood",
    isCompleted: false,
  },
  onComplete = () => {},
}: TodayActionCardProps) => {
  return (
    <Card className="w-[400px] bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          {action.isCompleted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CheckCircle className="w-6 h-6 text-green-500" />
            </motion.div>
          ) : (
            <Circle className="w-6 h-6 text-blue-500" />
          )}
          Today's Action
        </CardTitle>
        <CardDescription className="text-gray-500">
          Your personalized health task for today
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">
            {action.title}
          </h3>
          <p className="text-gray-600">{action.description}</p>
        </div>

        <Button
          className={`w-full ${action.isCompleted ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
          onClick={onComplete}
          disabled={action.isCompleted}
        >
          {action.isCompleted ? "Completed!" : "Mark as Complete"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodayActionCard;
