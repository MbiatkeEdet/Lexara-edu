
// export default function Benefits() {
//   const benefits = [
//     {
//       group: "Schools & Administrators",
//       icon: "🏫",
//       items: [
//         "Increased publicity and wider reach",
//         "Data-driven decisions with convenient access",
//         "Reduced workload and overhead costs",
//         "Improved accountability and productivity"
//       ]
//     },
//     {
//       group: "Teachers",
//       icon: "👩‍🏫",
//       items: [
//         "Become a tech-age educator",
//         "Compute results in clicks, not days",
//         "Better class management and communication",
//         "Increased job convenience and motivation"
//       ]
//     },
//     {
//       group: "Parents",
//       icon: "👨‍👩‍👧‍👦",
//       items: [
//         "Stay involved from anywhere",
//         "Convenient online fee payments",
//         "Direct access to fees, results, and announcements",
//         "Timely communication with teachers"
//       ]
//     },
//     {
//       group: "Students",
//       icon: "🎓",
//       items: [
//         "Digitized learning approach",
//         "24/7 access to learning resources",
//         "Better collaboration with peers",
//         "Improved digital literacy skills"
//       ]
//     }
//   ];

//   return (
//     <section id="benefits" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Benefits for Your Entire School Community
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Everyone wins with SchoolsFocus - from administrators to students
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <span className="text-2xl mr-3">{benefit.icon}</span>
//                 <h3 className="text-xl font-semibold text-gray-900">{benefit.group}</h3>
//               </div>
//               <ul className="space-y-3">
//                 {benefit.items.map((item, itemIndex) => (
//                   <li key={itemIndex} className="flex items-start">
//                     <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-600">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
export default function Benefits() {
  const benefits = [
    {
      group: "Schools & Administrators",
      icon: "🏫",
      image: "/edu1.jpeg",
      items: [
        "Increased publicity and wider reach",
        "Data-driven decisions with convenient access",
        "Reduced workload and overhead costs",
        "Improved accountability and productivity"
      ]
    },
    {
      group: "Teachers",
      icon: "👩‍🏫",
      image: "/edu5.jpeg",
      items: [
        "Become a tech-age educator",
        "Compute results in clicks, not days",
        "Better class management and communication",
        "Increased job convenience and motivation"
      ]
    },
    {
      group: "Parents",
      icon: "👨‍👩‍👧‍👦",
      image: "/edu4.png",
      items: [
        "Stay involved from anywhere",
        "Convenient online fee payments",
        "Direct access to fees, results, and announcements",
        "Timely communication with teachers"
      ]
    },
    {
      group: "Students",
      icon: "🎓",
      image: "/edu2.jpeg",
      items: [
        "Digitized learning approach",
        "24/7 access to learning resources",
        "Better collaboration with peers",
        "Improved digital literacy skills"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits for Your Entire School Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everyone wins with Lexara Edu - from administrators to students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.group}
                </h3>
              </div>

              <Image
                src={benefit.image}
                alt={benefit.group}
                className="w-full h-60 object-contain mb-5 rounded-lg"
                width={600}
                height={400}
              />

              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
