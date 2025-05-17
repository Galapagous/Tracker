// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import type { Categories, FormData, Transaction } from "../../types/types";
// import TransactionForm from "../../component/organism/form/TransactionForm";

// const AddTransaction: React.FC = () => {
//   const navigate = useNavigate();
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [categories, setCategories] = useState<Categories>({
//     income: ["Salary", "Freelance", "Investments"],
//     expense: ["Food", "Rent", "Utilities", "Entertainment"],
//   });
//   const [formData, setFormData] = useState<FormData>({
//     type: "income",
//     amount: "",
//     date: new Date().toISOString().split("T")[0],
//     category: "",
//     notes: "",
//   });

//   useEffect(() => {
//     const savedTransactions = localStorage.getItem("transactions");
//     if (savedTransactions) {
//       setTransactions(JSON.parse(savedTransactions));
//     }
//     const savedCategories = localStorage.getItem("categories");
//     if (savedCategories) {
//       setCategories(JSON.parse(savedCategories));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//   }, [transactions]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const addTransaction = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.amount || !formData.category) return;
//     const transaction: Transaction = {
//       id: Date.now(),
//       ...formData,
//       amount: parseFloat(formData.amount),
//     };
//     setTransactions([...transactions, transaction]);
//     setFormData({
//       type: "income",
//       amount: "",
//       date: new Date().toISOString().split("T")[0],
//       category: "",
//       notes: "",
//     });
//     navigate("/transactions");
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6 text-center">Add Transaction</h1>
//       <TransactionForm
//         formData={formData}
//         categories={categories}
//         onChange={handleInputChange}
//         onSubmit={addTransaction}
//       />
//     </div>
//   );
// };

// export default AddTransaction;

// -------- version 2 --------
import { useState, useEffect } from "react";
import type { Categories, FormData, Transaction } from "../../types/types";
import TransactionForm from "../../component/organism/form/TransactionForm";

const AddTransaction: React.FC = () => {
  // Mock navigate function since we can't import react-router-dom
  const navigate = (path: string) => {
    console.log(`Navigating to ${path}`);
    // In a real app with react-router-dom, this would navigate to the path
  };

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

  // Load saved transactions and categories from localStorage on component mount
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

  // Save categories to localStorage when they change
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

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

    // Create new array with all existing transactions plus the new one
    const updatedTransactions = [...transactions, transaction];

    // Update state and localStorage
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

    // Reset form
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Add Transaction
      </h1>
      <div className=" bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <TransactionForm
          formData={formData}
          categories={categories}
          onChange={handleInputChange}
          onSubmit={addTransaction}
        />
      </div>
    </div>
  );
};

export default AddTransaction;
