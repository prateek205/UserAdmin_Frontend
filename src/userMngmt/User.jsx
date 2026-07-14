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
                <span className="text-gray-500">Employee ID</span>
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
                <span className="font-bold text-green-600">
                  ₹ {user.Salary}
                </span>
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
              <h1 className="text-2xl font-bold capitalize">add new user</h1>
              <button
                onClick={() => handleClose(false)}
                className="font-bold text-xl text-gray-400"
              >
                {" "}
                X{" "}
              </button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Email ID</label>
                <input
                  type="email"
                  name="EmailAddress"
                  value={formData.EmailAddress}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Phone No.</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="DateOfBirth"
                  value={formData.DateOfBirth}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Age</label>
                <input
                  type="number"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Gender</label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="w-full py-1 px-2 border border-black rounded-md"
                >
                  <option>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Department</label>
                <input
                  type="text"
                  name="Department"
                  value={formData.Department}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Designation</label>
                <input
                  type="text"
                  name="Designation"
                  value={formData.Designation}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Role</label>
                <select
                  name="Role"
                  value={formData.Role}
                  onChange={handleChange}
                  className="w-full py-1 px-2 border border-black rounded-md"
                >
                  <option>Select Role</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Employee ID</label>
                <input
                  type="text"
                  name="EmployeeID"
                  value={formData.EmployeeID}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Joining Date</label>
                <input
                  type="date"
                  name="JoiningDate"
                  value={formData.JoiningDate}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Salary</label>
                <input
                  type="number"
                  name="Salary"
                  value={formData.Salary}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Work Location</label>
                <input
                  type="text"
                  name="WorkLocation"
                  value={formData.WorkLocation}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  name="City"
                  value={formData.City}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  name="State"
                  value={formData.State}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="ZIPCode"
                  value={formData.ZIPCode}
                  onChange={handleChange}
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Status</label>
                <select
                  name="Status"
                  value={formData.Status}
                  onChange={handleChange}
                  className="w-full py-1 px-2 border border-black rounded-md"
                >
                  <option>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="InActive">In-Active</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Address</label>
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="3"
                  name="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="w-full py-1 px-2 border border-black rounded-md"
                ></textarea>
              </div>
              <div className="flex items-center justify-end gap-5 p-2">
                <button
                  onClick={() => handleClose(false)}
                  className="text-lg border border-black rounded-lg p-2 bg-gray-500 text-white hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-lg border border-black rounded-lg p-2 bg-blue-500 text-white hover:bg-green-500 hover:text-white cursor-pointer"
                >
                  Save Profile
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
