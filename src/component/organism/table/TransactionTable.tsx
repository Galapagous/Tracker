import { FaNairaSign } from "react-icons/fa6";
import type { Transaction } from "../../../types/types";

interface TransactionTableProps {
  transactions: Transaction[];
  onExportCSV: () => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  onExportCSV,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <button
          onClick={onExportCSV}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Export to CSV
        </button>
      </div>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="p-2">{t.date}</td>
                  <td className="p-2 capitalize">{t.type}</td>
                  <td className="p-2">{t.category}</td>
                  <td className="p-2 flex items-center justify-center">
                    <FaNairaSign className="text-sm" /> {t.amount.toFixed(2)}
                  </td>
                  <td className="p-2">{t.notes || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
