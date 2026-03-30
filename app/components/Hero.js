
// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             The Digital Toolkit for <span className="text-blue-600">Modern Schools</span>
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//             Build reputable school brand, raise productivity and manage operations more efficiently 
//             with your one-stop school software.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg">
//               Go Digital in 10 Minutes
//             </button>
//             <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
//               Watch Demo
//             </button>
//           </div>
          
//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
//             <div>
//               <div className="text-3xl font-bold text-blue-600">100+</div>
//               <div className="text-gray-600">Schools</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-blue-600">50K+</div>
//               <div className="text-gray-600">Students</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-blue-600">24/7</div>
//               <div className="text-gray-600">Support</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-blue-600">10min</div>
//               <div className="text-gray-600">Setup</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT SECTION */}
          <div className="text-center md:text-left max-w-xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              The Digital Toolkit for{" "}
              <span className="text-blue-600">Modern Schools</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="text-xl text-gray-600 mt-6 mb-10 leading-relaxed"
            >
              Build a reputable school brand, raise productivity, and manage
              operations more efficiently with your complete school software suite.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            >
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg">
                Go Digital in 10 Minutes
              </button>

              <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all text-lg">
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/edu2.jpeg"
              alt="School management dashboard"
              className="w-full rounded-lg shadow-2xl border border-gray-200"
            />
          </motion.div>

        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-10 border-t border-gray-200 text-center">
          {[
            { value: "10+", label: "Schools" },
            { value: "50K+", label: "Students" },
            { value: "24/7", label: "Support" },
            { value: "10min", label: "Setup" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
