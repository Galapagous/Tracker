import { useState, useEffect } from "react";
import type { Categories } from "../../types/types";

const ManageCategories: React.FC = () => {
  const [categories, setCategories] = useState<Categories>({
    income: ["Salary", "Freelance", "Investments"],
    expense: ["Food", "Rent", "Utilities", "Entertainment"],
  });
  const [newCategory, setNewCategory] = useState<string>("");

  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addCategory = (type: "income" | "expense") => {
    if (!newCategory) return;
    setCategories({
      ...categories,
      [type]: [...categories[type], newCategory],
    });
    setNewCategory("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Categories</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium">Add Income Category</h3>
            <div className="flex">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex-1 border rounded-md p-2 mr-2"
                placeholder="New category"
              />
              <button
                onClick={() => addCategory("income")}
                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Add Expense Category</h3>
            <div className="flex">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex-1 border rounded-md p-2 mr-2"
                placeholder="New category"
              />
              <button
                onClick={() => addCategory("expense")}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
