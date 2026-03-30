
"use client";

import { useState } from "react";
import { students, results, saveToStorage } from "../lib/data";

export default function TeacherDashboard() {
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [term, setTerm] = useState("First Term 2025");
  const [subjects, setSubjects] = useState([
    { subject: "", score: "" },
  ]);
  const [message, setMessage] = useState("");

  const addSubjectRow = () => {
    setSubjects([...subjects, { subject: "", score: "" }]);
  };

  const removeSubjectRow = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const getGrade = (score) => {
    const s = parseInt(score);
    if (s >= 90) return "A";
    if (s >= 80) return "A-";
    if (s >= 70) return "B";
    if (s >= 60) return "C";
    if (s >= 50) return "D";
    return "F";
  };

  const handleSaveResults = () => {
    if (!selectedStudentId) {
      setMessage("Please select a student");
      return;
    }

    const validSubjects = subjects.filter(
      (s) => s.subject.trim() && s.score && !isNaN(s.score)
    );

    if (validSubjects.length === 0) {
      setMessage("Please add at least one valid subject and score");
      return;
    }

    // Remove old results for this student + term (optional: or keep history)
    const filtered = results.filter(
      (r) => !(r.studentId === selectedStudentId && r.term === term)
    );

    // Add new ones
    validSubjects.forEach((sub) => {
      filtered.push({
        studentId: selectedStudentId,
        subject: sub.subject.trim(),
        score: parseInt(sub.score),
        grade: getGrade(sub.score),
        term: term,
      });
    });

    // Update global results
    results.length = 0;
    results.push(...filtered);
    saveToStorage();

    setMessage(`Results saved successfully for ${getStudentName(selectedStudentId)}!`);
    setTimeout(() => setMessage(""), 4000);

    // Reset form
    setSubjects([{ subject: "", score: "" }]);
  };

  const getStudentName = (id) => {
    const student = students.find((s) => s.id === id);
    return student ? student.name : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Teacher Dashboard
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Enter results for multiple subjects per student
          </p>

          {message && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-medium">
              {message}
            </div>
          )}

          <div className="space-y-6">
            {/* Student Selector */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Select Student
              </label>
              <select
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Choose a student --</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name} - {student.class}
                  </option>
                ))}
              </select>
            </div>

            {/* Term */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Term
              </label>
              <select
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg"
              >
                <option>First Term 2025</option>
                <option>Second Term 2025</option>
                <option>Third Term 2025</option>
              </select>
            </div>

            {/* Subjects List */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Subjects & Scores
                </h3>
                <button
                  onClick={addSubjectRow}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                >
                  Add Subject
                </button>
              </div>

              <div className="space-y-4">
                {subjects.map((sub, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <input
                      type="text"
                      placeholder="Subject (e.g. Mathematics)"
                      value={sub.subject}
                      onChange={(e) =>
                        updateSubject(index, "subject", e.target.value)
                      }
                      className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Score"
                      value={sub.score}
                      onChange={(e) =>
                        updateSubject(index, "score", e.target.value)
                      }
                      className="w-24 p-3 border rounded-lg text-center"
                    />
                    {subjects.length > 1 && (
                      <button
                        onClick={() => removeSubjectRow(index)}
                        className="text-red-500 hover:text-red-700 text-2xl"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveResults}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105"
            >
              Save Student Results
            </button>
          </div>

          {/* Preview Current Results */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">All Uploaded Results</h3>
            <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
              <pre className="text-sm">
                {JSON.stringify(results, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}