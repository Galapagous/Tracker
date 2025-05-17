import { useState, useEffect } from "react";
import type { Categories, Filters, Transaction } from "../../types/types";
import TransactionTable from "../../component/organism/table/TransactionTable";

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Categories>({
    income: ["Salary", "Freelance", "Investments"],
    expense: ["Food", "Rent", "Utilities", "Entertainment"],
  });
  const [filters, setFilters] = useState<Filters>({
    type: "all",
    category: "all",
    sortBy: "date-desc",
  });

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  const filteredTransactions = transactions
    .filter((t) => filters.type === "all" || t.type === filters.type)
    .filter(
      (t) => filters.category === "all" || t.category === filters.category
    )
    .sort((a, b) => {
      if (filters.sortBy === "date-desc")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (filters.sortBy === "date-asc")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (filters.sortBy === "amount-desc") return b.amount - a.amount;
      if (filters.sortBy === "amount-asc") return a.amount - b.amount;
      return 0;
    });

  const exportToCSV = () => {
    const headers = ["Date,Type,Category,Amount,Notes"];
    const rows = filteredTransactions.map(
      (t) => `${t.date},${t.type},${t.category},${t.amount},${t.notes || ""}`
    );
    const csvContent = [...headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Transactions</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter Transactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              value={filters.type}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  type: e.target.value as Filters["type"],
                })
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="all">All</option>
              {[...new Set([...categories.income, ...categories.expense])].map(
                (cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sortBy: e.target.value as Filters["sortBy"],
                })
              }
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="date-desc">Date (Newest)</option>
              <option value="date-asc">Date (Oldest)</option>
              <option value="amount-desc">Amount (High to Low)</option>
              <option value="amount-asc">Amount (Low to High)</option>
            </select>
          </div>
        </div>
      </div>
      <TransactionTable
        transactions={filteredTransactions}
        onExportCSV={exportToCSV}
      />
    </div>
  );
};

export default Transactions;
