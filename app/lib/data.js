
export let students = [
  { id: "1", name: "John Doe", class: "Grade 10A", parentEmail: "parent1@example.com", password: "1234" },
  { id: "2", name: "Jane Smith", class: "Grade 10A", parentEmail: "parent2@example.com", password: "1234" },
];

export let results = [
  { studentId: "1", subject: "Mathematics", score: 95, grade: "A", term: "First Term 2025" },
  { studentId: "1", subject: "English", score: 88, grade: "B+", term: "First Term 2025" },
  { studentId: "2", subject: "Mathematics", score: 78, grade: "C+", term: "First Term 2025" },
];

// Simple localStorage persistence
if (typeof window !== "undefined") {
  const savedStudents = localStorage.getItem("students");
  const savedResults = localStorage.getItem("results");
  if (savedStudents) students = JSON.parse(savedStudents);
  if (savedResults) results = JSON.parse(savedResults);
}

export const saveToStorage = () => {
  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("results", JSON.stringify(results));
};