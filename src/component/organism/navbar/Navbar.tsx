import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-white text-2xl font-bold mb-2 sm:mb-0">
          Finance Tracker
        </h1>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 ${isActive ? "font-bold" : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 ${isActive ? "font-bold" : ""}`
            }
          >
            Transactions
          </NavLink>
          <NavLink
            to="/add-transaction"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 ${isActive ? "font-bold" : ""}`
            }
          >
            Add Transaction
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 ${isActive ? "font-bold" : ""}`
            }
          >
            Categories
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
