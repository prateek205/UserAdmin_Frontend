import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-full px-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
        <p className="text-gray-500 text-sm">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-3 border rounded-lg w-72 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <button className="relative p-3 rounded-full bg-gray-100 hover:bg-gray-200">
          <FaBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Prateek Bahad</h3>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
