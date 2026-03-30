"use client";

import { useState } from "react";
import { students, results } from "../lib/data";
import ResultTable from "../components/ResultTable";

export default function ParentPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const found = students.find(
      (s) => s.parentEmail === email && s.password === password
    );

    if (found) {
      setStudent(found);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  const studentResults = student
    ? results.filter((r) => r.studentId === student.id)
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-6">
        {!student ? (
          <div className="bg-white p-10 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-center mb-8">Parent Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Parent Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded mb-4"
                required
              />
              <input
                type="password"
                placeholder="Password (demo: 1234)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded mb-6"
                required
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Demo: parent1@example.com / 1234
            </p>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold mb-2">{student.name} Results</h1>
            <p className="text-gray-600 mb-8">Class: {student.class}</p>

            {studentResults.length > 0 ? (
              <ResultTable results={studentResults} />
            ) : (
              <p>No results uploaded yet.</p>
            )}

            <button
              onClick={() => {
                setStudent(null);
                setEmail("");
                setPassword("");
              }}
              className="mt-8 text-blue-600 hover:underline"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}