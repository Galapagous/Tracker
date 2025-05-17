import type { Categories, FormData } from "../../../types/types";

interface TransactionFormProps {
  formData: FormData;
  categories: Categories;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  formData,
  categories,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-sm font-medium">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={onChange}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={onChange}
            className="mt-1 block w-full border rounded-md p-2"
            step="0.01"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={onChange}
            className="mt-1 block w-full border rounded-md p-2"
            required
          >
            <option value="">Select Category</option>
            {categories[formData.type].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Notes</label>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={onChange}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="md:col-span-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
