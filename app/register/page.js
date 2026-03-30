'use client'
import { useState } from 'react'
import Header from '../components/Header';
import { useRouter } from "next/navigation";
import Link from 'next/link';
// Nigerian States
const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", 
  "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", 
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", 
  "Yobe", "Zamfara", "FCT"
];

// Sample LGAs – Add full list as needed
const lgas = {
  "Akwa Ibom": [
    "Uyo", "Ikono", "Eket", "Oron", "Etinan", "Ibiono Ibom", "Abak"
  ],
  "Rivers": [
    "Port Harcourt", "Obio/Akpor", "Ikwerre", "Okrika", "Eleme"
  ],
  "Lagos": [
    "Ikeja", "Surulere", "Ikorodu", "Epe", "Alimosho"
  ]
};

// Sample cities (optional) – dynamic by state
const cities = {
  "Akwa Ibom": ["Uyo", "Ikot Ekpene", "Eket"],
  "Rivers": ["Port Harcourt", "Obio Akpor", "Eleme"],
  "Lagos": ["Ikeja", "Lekki", "Yaba"]
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    phone: "",
    email: "",
    schoolName: "",
    schoolAddress: "",
    city: "",
    state: "",
    lga: "",
    position: "",
    establishmentYear: "",
    studentCount: "",
    management: "",
    gender: "",
    classLevel: "",
    referral: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" && { lga: "", city: "" }) // reset LGA + City when state changes
    }));
  };

  const router = useRouter();

  const handleSubmit = (e) => {
  e.preventDefault();

  // Save to localStorage (temporary DB)
  localStorage.setItem("schoolProfile", JSON.stringify(formData));

  router.push("/dashboard");
};

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto mt-10 bg-blue-300 p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-3 text-center">Lexara Edu</h1>
        <p className="text-gray-600 text-center mb-8">BEST SCHOOL SOFTWARE</p>

        <h2 className="text-xl font-semibold mb-6 text-center">Registration Form</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Kindly fill your details accurately to create an account with us.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">Title</label>
            <input
              name="title"
              placeholder="Mr / Mrs / Miss"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              name="fullName"
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              name="phone"
              maxLength="11"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* School Name */}
          <div>
            <label className="block mb-2 font-medium">Name of School</label>
            <input
              name="schoolName"
              placeholder="Enter the name of your school"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium">School Address</label>
            <input
              name="schoolAddress"
              placeholder="Enter your address"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-2 font-medium">State</label>
            <select
              name="state"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select State...</option>
              {states.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-medium">City</label>
            <select
              name="city"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
              disabled={!formData.state}
            >
              <option value="">Select City...</option>
              {(cities[formData.state] || []).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* LGA */}
          <div>
            <label className="block mb-2 font-medium">LGA</label>
            <select
              name="lga"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
              disabled={!formData.state}
            >
              <option value="">Select LGA...</option>
              {(lgas[formData.state] || []).map((lg) => (
                <option key={lg} value={lg}>{lg}</option>
              ))}
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="block mb-2 font-medium">Position of Applicant</label>
            <select
              name="position"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select item...</option>
              <option>Proprietor</option>
              <option>Principal</option>
              <option>Head Teacher</option>
              <option>Administrator</option>
              <option>Teacher</option>
            </select>
          </div>

          {/* Establishment Year */}
          <div>
            <label className="block mb-2 font-medium">Year of Establishment</label>
            <select
              name="establishmentYear"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select item...</option>
              {Array.from({ length: 60 }, (_, i) => 2025 - i).map((yr) => (
                <option key={yr}>{yr}</option>
              ))}
            </select>
          </div>

          {/* Student Count */}
          <div>
            <label className="block mb-2 font-medium">Number of Students/Pupils</label>
            <select
              name="studentCount"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select item...</option>
              <option>1 - 50</option>
              <option>51 - 100</option>
              <option>101 - 300</option>
              <option>301 - 500</option>
              <option>500+</option>
            </select>
          </div>

          {/* Management */}
          <div>
            <label className="block mb-2 font-medium">Management</label>
            <select
              name="management"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select item...</option>
              <option>Private</option>
              <option>Government</option>
              <option>Mission</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">Gender</label>
            <select
              name="gender"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select item...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Class */}
          <div>
            <label className="block mb-2 font-medium">Class</label>
            <select
              name="classLevel"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="">Select item...</option>
              <option>Nursery</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Mixed (All Levels)</option>
            </select>
          </div>

          {/* Referral */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">How did you hear about us?</label>
            <input
              name="referral"
              placeholder="Enter your response"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold"
            >
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </>
  );
}
