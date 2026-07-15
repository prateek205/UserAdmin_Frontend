import React, { useEffect } from "react";
import { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, postEmployee } from "../redux/Action";

const User = () => {
  const dispatch = useDispatch();
  const { Employee, loading } = useSelector((state) => state.employee);
  // console.log("EMPLOYEE:", Employee);
  // console.log(Array.isArray(Employee));
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const [showModel, setShowModel] = useState(false);
  const [formData, setFormData] = useState({
    UserID: "",
    FirstName: "",
    LastName: "",
    FullName: "",
    EmailAddress: "",
    PhoneNumber: "",
    DateOfBirth: "",
    Age: "",
    Gender: "",
    Department: "",
    Designation: "",
    Role: "",
    EmployeeID: "",
    JoiningDate: "",
    Salary: "",
    WorkLocation: "",
    Address: "",
    City: "",
    State: "",
    Country: "",
    ZIPCode: "",
    Status: "",
    Actions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    dispatch(postEmployee(formData));
  };

  const handleOpen = () => {
    setShowModel(true);
  };

  const handleClose = () => {
    setShowModel(false);
  };

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
          <p className="text-gray-500 mt-1">Manage all employees and users</p>
        </div>

        <button
          onClick={() => handleOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full transition"
        >
          <FaPlus />
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 mb-5">
        <div className="relative max-w-md">
          <FaSearch className="absolute top-4 left-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-11 pr-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Employee.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border overflow-hidden"
          >
            {/* Top */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-5 text-white flex justify-between">
              <div>
                <h2 className="text-xl font-bold">{user.FullName}</h2>
                <p className="text-sm opacity-90">{user.Designation}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold h-fit ${
                  user.Status === "Active"
                    ? "bg-green-400 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {user.Status}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Employee-ID</span>
                <span className="font-semibold">{user.EmployeeID}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Department</span>
                <span>{user.Department}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Role</span>
                <span>{user.Role}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="text-right">{user.EmailAddress}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Phone</span>
                <span>{user.PhoneNumber}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Salary</span>
                <span className="font-bold text-green-600">₹{user.Salary}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Location</span>
                <span>{user.City}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-4 flex justify-around">
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <FaEye />
                View
              </button>

              <button className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700">
                <FaEdit />
                Edit
              </button>

              <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModel && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-6xl w-[150vh] h-[96vh] p-8 mb-2 overflow-y-auto flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold capitalize">
                add new employee
              </h1>
              <button
                onClick={() => handleClose(false)}
                className="font-bold text-xl text-gray-400"
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-xl shadow-sm border p-5">
                <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-blue-600">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* User ID */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">User ID</label>
                    <input
                      label="User ID"
                      name="UserID"
                      value={formData.UserID}
                      onChange={handleChange}
                      placeholder="User ID"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      label="First Name"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      label="Last Name"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      label="Full Name"
                      name="FullName"
                      value={formData.FullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email ID</label>
                    <input
                      type="email"
                      label="Email"
                      name="EmailAddress"
                      value={formData.EmailAddress}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Contact No.</label>
                    <input
                      label="Phone Number"
                      name="PhoneNumber"
                      value={formData.PhoneNumber}
                      onChange={handleChange}
                      placeholder="Contact No."
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      label="Date Of Birth"
                      name="DateOfBirth"
                      value={formData.DateOfBirth}
                      onChange={handleChange}
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Age</label>
                    <input
                      type="number"
                      label="Age"
                      name="Age"
                      value={formData.Age}
                      onChange={handleChange}
                      placeholder="Age"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Gender</label>
                    <select
                      label="Gender"
                      name="Gender"
                      value={formData.Gender}
                      onChange={handleChange}
                      placeholder="UserID"
                      className="border-2 border-gray-300 rounded-md p-2"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employment */}
              <div className="bg-gray-50 rounded-xl shadow-sm border p-5">
                <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-green-600">
                  Employment Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Employee ID</label>
                    <input
                      label="Employee ID"
                      name="EmployeeID"
                      value={formData.EmployeeID}
                      onChange={handleChange}
                      placeholder="EmployeeID"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Department</label>
                    <input
                      label="Department"
                      name="Department"
                      value={formData.Department}
                      onChange={handleChange}
                      placeholder="Department"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Designation</label>
                    <input
                      label="Designation"
                      name="Designation"
                      value={formData.Designation}
                      onChange={handleChange}
                      placeholder="Designation"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Role</label>
                    <select
                      label="Role"
                      name="Role"
                      value={formData.Role}
                      onChange={handleChange}
                      placeholder="UserID"
                      className="border-2 border-gray-300 rounded-md p-2"
                    >
                      <option value="Role">Select Role</option>
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Joining Date</label>
                    <input
                      type="date"
                      label="Joining Date"
                      name="JoiningDate"
                      value={formData.JoiningDate}
                      onChange={handleChange}
                      placeholder="UserID"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Salary</label>
                    <input
                      type="number"
                      label="Salary"
                      name="Salary"
                      value={formData.Salary}
                      onChange={handleChange}
                      placeholder="Salary"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Work Location</label>
                    <input
                      label="Work Location"
                      name="WorkLocation"
                      value={formData.WorkLocation}
                      onChange={handleChange}
                      placeholder="Work Location"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Status</label>
                    <select
                      label="Status"
                      name="Status"
                      value={formData.Status}
                      onChange={handleChange}
                      className="border-2 border-gray-300 rounded-md p-2"
                    >
                      <option value="status">Status</option>
                      <option value="Active">Active</option>
                      <option value="InActive">InActive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-xl shadow-sm border p-5">
                <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-purple-600">
                  Address Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-3">
                    <label className="text-sm font-medium">Address</label>

                    <textarea
                      rows="4"
                      name="Address"
                      value={formData.Address}
                      onChange={handleChange}
                      placeholder="Address"
                      className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">City</label>
                    <input
                      label="City"
                      name="City"
                      value={formData.City}
                      onChange={handleChange}
                      placeholder="City"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">State</label>
                    <input
                      label="State"
                      name="State"
                      value={formData.State}
                      onChange={handleChange}
                      placeholder="State"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">ZIP-Code</label>
                    <input
                      label="ZIP Code"
                      name="ZIPCode"
                      value={formData.ZIPCode}
                      onChange={handleChange}
                      placeholder="ZIPCode"
                      className="border-2 border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => handleClose(false)}
                  className="px-6 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default User;
