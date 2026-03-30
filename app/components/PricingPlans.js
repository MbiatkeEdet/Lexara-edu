export default function PricingPlans() {
  const plans = [
    {
      name: "BASIC PLAN",
      price: "₦1,000",
      per: "Per Term / Student",
      setup: "₦100,000 - Setup & Training Fee",
      setupNote: "One-off Signup Fee",
      features: [
        "School Management",
        "Result Management",
        "Term & Session Results",
        "Student & Parent Portal",
        "Admin & Teacher Portal",
        "Attendance (Staff & Students)",
        "Timetable Management",
        "Birthday Management",
        "Report Management",
        "Communication System",
        "Data Backup & Security",
        "24/7 Customer Support"
      ]
    },
    {
      name: "STANDARD PLAN",
      price: "₦1,500",
      per: "Per Term / Student",
      setup: "₦200,000 - Setup & Training Fee",
      setupNote: "One-off Signup Fee",
      features: [
        "All Basic Plan Features",
        "Transport Management",
        "Event Management",
        "Online Exam (CBT)",
        "e-Resources / Notes",
        "Manage Library",
        "Reception / Appointment",
        "Online Assignment",
        "Hostel Management",
        "Data Backup & Security",
        "24/7 Customer Support"
      ]
    },
    {
      name: "PREMIUM PLAN",
      price: "₦2,500",
      per: "Per Term / Student",
      setup: "₦300,000 - Setup & Training Fee",
      setupNote: "One-off Signup Fee",
      features: [
        "Basic & Standard Plan Features",
        "School Website",
        "Mobile Application",
        "School, Staff & Student ID",
        "Human Resource (HR)",
        "Payroll Management",
        "Expense Management",
        "School & Student Accounting",
        "Custom Email Addresses",
        "Data Backup & Security",
        "24/7 Customer Support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-blue-800 bg-opacity-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">PRICING PLAN</h2>
        <p className="text-black text-2xl max-w-3xl mx-auto mb-14">
          Our prices are structured to be paid per term and per student. This makes it easy for schools 
          to factor the cost into their school fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

              <div className="text-5xl font-bold text-indigo-600">
                {plan.price}
              </div>
              <p className="text-gray-600 mb-6">{plan.per}</p>

              <h4 className="text-lg font-semibold mb-3">FEATURES</h4>
              <ul className="text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <div className="border-t pt-4">
                <p className="font-semibold">{plan.setup}</p>
                <p className="text-sm text-gray-500">{plan.setupNote}</p>
              </div>

              <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition">
                SUBSCRIBE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
