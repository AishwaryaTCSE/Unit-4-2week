import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
  return (
    <footer className="w-full mt-6">
      <div className="bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm text-center">
          © {new Date().getFullYear()} My Dashboard — Footer changes color with theme.
        </div>
      </div>
    </footer>
  );
}
