// 'use client'
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Header from "../components/Header";

// export default function Dashboard() {
//   const [school, setSchool] = useState(null);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("schoolProfile"));
//     setSchool(data);
//   }, []);

//   if (!school) return <p>Loading...</p>;

//   return (
//     <>
//     <Header />
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{school.schoolName}</h1>
//       <p>{school.schoolAddress}</p>

//       <div className="mt-6">
//         <Link href="/dashboard/teachers">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">
//             Manage Teachers
//           </button>
//         </Link>
//       </div>
//     </div>
//     </>
//   );
// }


'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";

export default function SchoolProfile() {
  const [profile, setProfile] = useState(() => {
    const data = JSON.parse(localStorage.getItem("schoolProfile"));
    return data;
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("schoolProfile", JSON.stringify(profile));
    setEditMode(false);
  };

  if (!profile) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Header />

      <div className="p-6 max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">School Profile</h1>
            <p className="text-gray-500">Manage your school information</p>
          </div>

          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              {profile.logo ? (
                <Image src={profile.logo} alt="Logo" className="w-full h-full rounded-full object-cover" width={80} height={80} />
              ) : (
                <span className="text-gray-500">Logo</span>
              )}
            </div>

            {editMode && (
              <input
                type="text"
                name="logo"
                placeholder="Paste logo URL"
                value={profile.logo || ""}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            )}
          </div>

          {/* School Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField label="School Name" name="schoolName" value={profile.schoolName} onChange={handleChange} editMode={editMode} />
            <InputField label="School Address" name="schoolAddress" value={profile.schoolAddress} onChange={handleChange} editMode={editMode} />
            <InputField label="City" name="city" value={profile.city} onChange={handleChange} editMode={editMode} />
            <InputField label="State" name="state" value={profile.state} onChange={handleChange} editMode={editMode} />
            <InputField label="Country" name="country" value={profile.country} onChange={handleChange} editMode={editMode} />
            <InputField label="Phone Number" name="phone" value={profile.phone} onChange={handleChange} editMode={editMode} />
            <InputField label="Email" name="email" value={profile.email} onChange={handleChange} editMode={editMode} />
            <InputField label="Website" name="website" value={profile.website} onChange={handleChange} editMode={editMode} />
          </div>

          {/* Admin Info */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Admin Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <InputField label="Admin Name" name="adminName" value={profile.adminName} onChange={handleChange} editMode={editMode} />
              <InputField label="Admin Email" name="adminEmail" value={profile.adminEmail} onChange={handleChange} editMode={editMode} />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">School Description</label>
            {editMode ? (
              <textarea
                name="description"
                value={profile.description || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ) : (
              <p className="text-gray-600">{profile.description || "No description added"}</p>
            )}
          </div>

          {/* Save Button */}
          {editMode && (
            <div className="text-right">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* Reusable Input Component */
function InputField({ label, name, value, onChange, editMode }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      {editMode ? (
        <input
          type="text"
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full border p-2 rounded"
        />
      ) : (
        <p className="text-gray-600">{value || "-"}</p>
      )}
    </div>
  );
}