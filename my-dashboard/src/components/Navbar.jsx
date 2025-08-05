import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

export default function Navbar({ onBurger }) {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-3">
          {/* burger visible on small screens */}
          <button className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700" onClick={onBurger}>
            <FiMenu size={20} />
          </button>
          <div className="text-xl font-semibold">My Dashboard</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm">
            Status:
            <span className={`px-2 py-1 rounded ${isLoggedIn ? 'bg-green-100 text-green-800 dark:bg-green-900/40' : 'bg-red-100 text-red-800 dark:bg-red-900/40'}`}>
              {isLoggedIn ? "Logged In" : "Logged Out"}
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>

          <button
            onClick={toggleAuth}
            className="px-3 py-1 rounded bg-blue-600 text-white hover:opacity-90"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
}
