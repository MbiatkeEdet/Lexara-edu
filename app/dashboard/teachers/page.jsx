'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTeacher() {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    password: ""
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("teachers")) || [];

    localStorage.setItem(
      "teachers",
      JSON.stringify([...existing, teacher])
    );

    router.push("/dashboard/teachers");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4">Add Teacher</h2>

      <input
        placeholder="Name"
        className="w-full border p-2 mb-3"
        onChange={(e) =>
          setTeacher({ ...teacher, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        className="w-full border p-2 mb-3"
        onChange={(e) =>
          setTeacher({ ...teacher, email: e.target.value })
        }
      />

      <input
        placeholder="Password"
        type="password"
        className="w-full border p-2 mb-3"
        onChange={(e) =>
          setTeacher({ ...teacher, password: e.target.value })
        }
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Teacher
      </button>
    </form>
  );
}