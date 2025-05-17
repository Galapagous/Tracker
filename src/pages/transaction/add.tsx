import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Categories, FormData, Transaction } from "../../types/types";
import TransactionForm from "../../component/organism/form/TransactionForm";

const AddTransaction: React.FC = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Categories>({
    income: ["Salary", "Freelance", "Investments"],
    expense: ["Food", "Rent", "Utilities", "Entertainment"],
  });
  const [formData, setFormData] = useState<FormData>({
    type: "income",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
    notes: "",
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

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.category) return;
    const transaction: Transaction = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount),
    };
    setTransactions([...transactions, transaction]);
    setFormData({
      type: "income",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      category: "",
      notes: "",
    });
    navigate("/transactions");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Add Transaction</h1>
      <TransactionForm
        formData={formData}
        categories={categories}
        onChange={handleInputChange}
        onSubmit={addTransaction}
      />
    </div>
  );
};

export default AddTransaction;
