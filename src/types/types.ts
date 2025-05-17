export interface Transaction {
  id: number;
  type: "income" | "expense";
  amount: number;
  date: string;
  category: string;
  notes?: string;
}

export interface FormData {
  type: "income" | "expense";
  amount: string;
  date: string;
  category: string;
  notes: string;
}

export interface Categories {
  income: string[];
  expense: string[];
}

export interface Filters {
  type: "all" | "income" | "expense";
  category: string;
  sortBy: "date-desc" | "date-asc" | "amount-desc" | "amount-asc";
}
