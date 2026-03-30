// import Navbar from "./components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="max-w-4xl text-center">
//           <h1 className="text-5xl font-bold text-blue-800 mb-6">
//             Welcome to School Result Portal
//           </h1>
//           <p className="text-xl text-gray-700 mb-10">
//             Securely upload and view student academic results
//           </p>
//           <div className="space-x-6">
//             <a
//               href="/teacher"
//               className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
//             >
//               Teacher Login
//             </a>
//             <a
//               href="/parent"
//               className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-700 transition"
//             >
//               Parent Login
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Head from 'next/head';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import PricingPlans from './components/PricingPlans';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>SchoolsFocus - All-in-One School Management Software</title>
        <meta name="description" content="Digital toolkit for modern schools. Manage operations, boost productivity, and build your school brand with our comprehensive software solution." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Header />
        <Hero />
        <Features />
        <Benefits />
        <PricingPlans />
        <WhyChoose />
        <CTA />
        <Footer />
      </main>
    </>
  );
}