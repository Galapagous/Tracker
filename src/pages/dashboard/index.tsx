import { useState, useEffect } from "react";
import type { Transaction } from "../../types/types";
import IncomeExpenseChart from "../../component/organism/chart/IncomeExpenseChart";
import { FaNairaSign } from "react-icons/fa6";

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl shadow-sm border border-emerald-200 transition-all hover:shadow-md">
          <h2 className="text-lg font-semibold text-emerald-700 mb-2">
            Total Income
          </h2>
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <FaNairaSign className="text-xl" />
            <p className="text-3xl font-medium">{totalIncome.toFixed(2)}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl shadow-sm border border-rose-200 transition-all hover:shadow-md">
          <h2 className="text-lg font-semibold text-rose-700 mb-2">
            Total Expenses
          </h2>
          <div className="flex items-center justify-center gap-2 text-rose-600">
            <FaNairaSign className="text-xl" />
            <p className="text-3xl font-medium">{totalExpenses.toFixed(2)}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-sm border border-indigo-200 transition-all hover:shadow-md">
          <h2 className="text-lg font-semibold text-indigo-700 mb-2">
            Balance
          </h2>
          <div className="flex items-center justify-center gap-2 text-indigo-600">
            <FaNairaSign className="text-xl" />
            <p
              className={`text-3xl font-medium ${
                balance < 0 ? "text-rose-600" : ""
              }`}
            >
              {balance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <IncomeExpenseChart transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
