import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Users", icon: <FaUsers />, path: "/user" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } h-screen bg-slate-900 text-white duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="h-20 flex items-center justify-between px-5 border-b border-slate-700">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl hover:text-indigo-400"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {open && (
          <h1 className="text-xl font-bold whitespace-nowrap">Admin Panel</h1>
        )}
      </div>

      <div className="flex-1 p-3 space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center ${
                open ? "justify-start gap-4 px-4" : "justify-center"
              } py-3 rounded-lg transition-all ${
                isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-xl">{menu.icon}</span>

            {open && <span>{menu.name}</span>}
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="p-3 border-t border-slate-700">
        <button
          className={`flex items-center ${
            open ? "justify-center gap-3" : "justify-center"
          } w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg`}
        >
          <FaSignOutAlt />
          {open && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
