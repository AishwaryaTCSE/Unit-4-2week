import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FiX } from "react-icons/fi";

export default function Sidebar({ open, onClose }) {
  const { isLoggedIn } = useAuth();


  return (
    <>
      {}
      <div
        className={`fixed inset-0 bg-black/40 z-20 transition-opacity md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`z-30 transform top-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full fixed md:static md:translate-x-0 transition-transform ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4 flex items-center justify-between md:hidden">
          <div className="font-semibold">Menu</div>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <FiX />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold">Sidebar</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Links and quick info</p>

          <div className="mt-4">
            {isLoggedIn ? (
              <div className="p-3 rounded bg-green-50 dark:bg-green-900/20">
                <div className="font-medium">Welcome back!</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Glad to see you again.</div>
              </div>
            ) : (
              <div className="p-3 rounded bg-yellow-50 dark:bg-yellow-900/10">
                <div className="font-medium">You're not logged in</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Sign in to see personalized content.</div>
              </div>
            )}
          </div>

          <nav className="mt-6 space-y-2">
            <a className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</a>
            <a className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Products</a>
            <a className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
          </nav>
        </div>
      </aside>
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  );
}
