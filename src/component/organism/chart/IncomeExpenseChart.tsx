import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { Transaction } from "../../../types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IncomeExpenseChartProps {
  transactions: Transaction[];
}

const IncomeExpenseChart: React.FC<IncomeExpenseChartProps> = ({
  transactions,
}) => {
  const data = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "Amount ($)",
          data: [income, expense],
          backgroundColor: ["#34D399", "#F87171"],
          borderColor: ["#059669", "#B91C1C"],
          borderWidth: 1,
        },
      ],
    };
  }, [transactions]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Income vs. Expense",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default IncomeExpenseChart;
