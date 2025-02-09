import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RechartsComponentsProps {
  healthMetrics: Array<{
    date: string;
    value: number;
  }>;
}

const RechartsComponents = ({ healthMetrics }: RechartsComponentsProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={healthMetrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RechartsComponents;
