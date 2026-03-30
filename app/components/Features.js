
export default function Features() {
  const features = [
    {
      icon: "🌐",
      title: "Standard School Website",
      description: "A well-built website to reach people far beyond your immediate environment."
    },
    {
      icon: "⚙️",
      title: "Administrator Tools",
      description: "Easily control and manage day-to-day running of your school from your device."
    },
    {
      icon: "🎓",
      title: "Students e-Portal",
      description: "Complete web portal for students to access information and activities."
    },
    {
      icon: "👨‍🏫",
      title: "Staff e-Portal",
      description: "Secure portal for staff to access tools for effective job performance."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parents e-Portal",
      description: "Keep parents involved with direct access to crucial information."
    },
    {
      icon: "💳",
      title: "Online Fees Payment",
      description: "Secure online payment system with transaction tracking."
    },
    {
      icon: "📊",
      title: "Result Processing",
      description: "Compute and publish results with scratch card security."
    },
    {
      icon: "🏠",
      title: "Hostel Management",
      description: "Seamless online allocation and management of hostel spaces."
    }
  ];

  return (
    <section id="features" className="py-20 bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-6xl font-bold text-blue-900 mb-4">
            Everything You Need, All in One Place
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Comprehensive tools designed to meet all your schools digital requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Already have a website?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Integrate Lexara Edu with your existing school website or use your own domain name.
            </p>
            <div className="bg-white rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <span>Your Domain</span>
                <span className="text-xl">→</span>
                <span>SchoolsFocus</span>
                <span className="text-xl">→</span>
                <span className="text-green-600 font-semibold">Live!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}