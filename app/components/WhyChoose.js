
export default function WhyChoose() {
  const reasons = [
    {
      icon: "🔄",
      title: "All-in-One Platform",
      description: "Your website and management tools under one roof"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Affordable solution with high return on investment"
    },
    {
      icon: "👍",
      title: "User Friendly",
      description: "Intuitive design for easy adoption by all users"
    },
    {
      icon: "🆙",
      title: "Regular Updates",
      description: "Continuous improvements at no extra cost"
    },
    {
      icon: "🎓",
      title: "On-site Training",
      description: "Comprehensive training for your staff"
    },
    {
      icon: "💬",
      title: "Customer Support",
      description: "Responsive support when you need it"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Lexara Edu?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer the A-list features you need, with more being added regularly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Pro Edition */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Lexara Edu Pro for Higher Institutions
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Customizable edition designed to meet the complex technological demands of universities and colleges.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Learn About Pro Edition
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}