import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Sidebar */}
      <aside className="flex">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Navbar */}
        <header className="h-20 bg-white shadow-md border-b">
          <Navbar />
        </header>

        {/* Page Content */}
        <section className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </section>

      </main>

    </div>
  );
};

export default Layout;