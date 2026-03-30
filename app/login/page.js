"use client";
import { useState } from "react";
import { User, Users, Shield } from "lucide-react";
import Header from "../components/Header";

const roles = [
  {
    name: "Teacher",
    icon: <User size={28} />,
    description: "Manage classes and students",
  },
  {
    name: "Parent",
    icon: <Users size={28} />,
    description: "Track your child's progress",
  },
  {
    name: "Administrator",
    icon: <Shield size={28} />,
    description: "Control system settings",
  },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("Teacher");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      role: selectedRole,
      ...formData,
    });

    // 👉 Connect to backend here
  };

  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center mt-6 bg-gradient-to-br from-gray-100 to-blue-300 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">
            Choose your role to continue
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {roles.map((role) => (
            <div
              key={role.name}
              onClick={() => setSelectedRole(role.name)}
              className={`cursor-pointer border rounded-2xl p-4 text-center transition-all duration-200
                ${
                  selectedRole === role.name
                    ? "border-blue-600 bg-blue-50 shadow-md scale-105"
                    : "border-gray-200 hover:border-blue-400 hover:shadow-sm"
                }`}
            >
              <div
                className={`flex justify-center mb-2 ${
                  selectedRole === role.name
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {role.icon}
              </div>
              <h3 className="font-semibold text-sm">{role.name}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={`${selectedRole} Email`}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Login as {selectedRole}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Forgot password? Contact support
          </p>
        </div>
      </div>
    </div>
    </>
  );
}