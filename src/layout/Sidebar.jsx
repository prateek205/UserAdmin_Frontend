import React from "react";
import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Users", icon: <FaUsers />, path: "/user" },
];

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wide">Admin Panel</h1>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
              }`
            }
          >
            {menu.icon}
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-slate-700">
        <button className="flex items-center gap-3 w-full justify-center bg-red-500 hover:bg-red-600 py-3 rounded-lg">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
