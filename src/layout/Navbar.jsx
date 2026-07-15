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
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Tech Surya</h3>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
