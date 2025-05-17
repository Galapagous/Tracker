import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/organism/navbar/Navbar";
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transaction";
import AddTransaction from "./pages/transaction/add";
import ManageCategories from "./pages/transaction/categories";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
            <Route path="/categories" element={<ManageCategories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
