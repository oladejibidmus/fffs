import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, ChevronRight, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RecommendationPanelProps {
  recommendations?: {
    id: string;
    title: string;
    explanation: string;
    dataPoints: string[];
  }[];
}

const defaultRecommendations = [
  {
    id: "1",
    title: "Increase daily water intake",
    explanation:
      "Based on your activity level and recent hydration patterns, increasing water intake will help improve energy levels.",
    dataPoints: [
      "Current intake: 4 glasses/day",
      "Recommended: 8 glasses/day",
      "Activity level: Moderate",
    ],
  },
  {
    id: "2",
    title: "Add 10-minute morning stretch",
    explanation:
      "Your sitting patterns indicate extended periods of inactivity. A morning stretch routine will help with flexibility and reduce stiffness.",
    dataPoints: [
      "Sedentary hours: 8-10/day",
      "Current stretching: None",
      "Reported back tension: Yes",
    ],
  },
];

const RecommendationPanel = ({
  recommendations = defaultRecommendations,
}: RecommendationPanelProps) => {
  return (
    <Card className="w-full max-w-md bg-white shadow-lg">
      <CardHeader className="border-b">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">AI Recommendations</CardTitle>
        </div>
        <CardDescription>
          Personalized insights based on your health data
        </CardDescription>
      </CardHeader>
      <ScrollArea className="h-[500px]">
        <CardContent className="p-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="mb-6 last:mb-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-medium text-base">{rec.title}</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{rec.explanation}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground mb-2">
                  Supporting Data:
                </p>
                <ul className="space-y-1">
                  {rec.dataPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default RecommendationPanel;
