import React from "react";
import { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// const users = [
//   {
//     id: "#EMP001",
//     image: "https://i.pravatar.cc/100?img=1",
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@example.com",
//     phone: "+91 9876543210",
//     dob: "12 Mar 1998",
//     age: 27,
//     gender: "Male",
//     department: "Development",
//     designation: "Frontend Developer",
//     role: "Employee",
//     employeeId: "EMP001",
//     joiningDate: "10 Jan 2024",
//     salary: "₹45,000",
//     location: "Pune",
//     address: "MG Road",
//     city: "Pune",
//     state: "Maharashtra",
//     country: "India",
//     zip: "411001",
//     status: "Active",
//   },
// ];

const User = () => {
  const [showModel, setShowModel] = useState(false);

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

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[2400px] w-full border-collapse">
            <thead className="bg-gray-800 text-white sticky top-0">
              <tr className="text-sm">
                {[
                  "User ID",
                  "Profile",
                  "First Name",
                  "Last Name",
                  "Full Name",
                  "Email",
                  "Phone",
                  "DOB",
                  "Age",
                  "Gender",
                  "Department",
                  "Designation",
                  "Role",
                  "Employee ID",
                  "Joining Date",
                  "Salary",
                  "Work Location",
                  "Address",
                  "City",
                  "State",
                  "Country",
                  "ZIP Code",
                  "Status",
                  "Actions",
                ].map((item) => (
                  <th
                    key={item}
                    className="px-5 py-4 whitespace-nowrap text-left font-semibold"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            {/* <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-5 py-4">{user.id}</td>

                  <td className="px-5 py-4">
                    <img
                      src={user.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  </td>

                  <td className="px-5 py-4">{user.firstName}</td>

                  <td className="px-5 py-4">{user.lastName}</td>

                  <td className="px-5 py-4 font-medium">
                    {user.firstName} {user.lastName}
                  </td>

                  <td className="px-5 py-4">{user.email}</td>

                  <td className="px-5 py-4">{user.phone}</td>

                  <td className="px-5 py-4">{user.dob}</td>

                  <td className="px-5 py-4">{user.age}</td>

                  <td className="px-5 py-4">{user.gender}</td>

                  <td className="px-5 py-4">{user.department}</td>

                  <td className="px-5 py-4">{user.designation}</td>

                  <td className="px-5 py-4">{user.role}</td>

                  <td className="px-5 py-4">{user.employeeId}</td>

                  <td className="px-5 py-4">{user.joiningDate}</td>

                  <td className="px-5 py-4 font-semibold text-green-600">
                    {user.salary}
                  </td>

                  <td className="px-5 py-4">{user.location}</td>

                  <td className="px-5 py-4">{user.address}</td>

                  <td className="px-5 py-4">{user.city}</td>

                  <td className="px-5 py-4">{user.state}</td>

                  <td className="px-5 py-4">{user.country}</td>

                  <td className="px-5 py-4">{user.zip}</td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                        <FaEye />
                      </button>

                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">
                        <FaEdit />
                      </button>

                      <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
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
            <form className="grid grid-cols-3 gap-2">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Email ID</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Phone No.</label>
                <input
                  type="tel"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Age</label>
                <input
                  type="number"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Gender</label>
                <select className="w-full py-1 px-2 border border-black rounded-md">
                  <option value="">Select Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Department</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Designation</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Role</label>
                <select className="w-full py-1 px-2 border border-black rounded-md">
                  <option value="">Select Role</option>
                  <option value="">Employee</option>
                  <option value="">Manager</option>
                  <option value="">Admin</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Employee ID</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Joining Date</label>
                <input
                  type="date"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Salary</label>
                <input
                  type="number"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Work Location</label>
                <input
                  type="date"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">ZIP Code</label>
                <input
                  type="text"
                  className="w-full border border-black rounded-md py-1 px-2"
                />
              </div>
              <div>
                <label className="block mb-2">Status</label>
                <select className="w-full py-1 px-2 border border-black rounded-md">
                  <option value="">Select Status</option>
                  <option value="">Active</option>
                  <option value="">In-Active</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Address</label>
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="3"
                  className="w-full py-1 px-2 border border-black rounded-md"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2">Profile Image</label>
                <input type="file" />
              </div>
            </form>
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
          </div>
        </div>
      )}
    </section>
  );
};

export default User;
