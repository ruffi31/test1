

'use client';

import { motion } from 'framer-motion';

export default function Immunization() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
                {/* Right image */}
        <section className="flex justify-center px-4">
          <motion.img
            src="/IMG_2392.jpg"  // Replace with your actual image path
            alt="Vaccination"
            className="rounded-3xl shadow-lg max-w-full h-auto object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </section>
        {/* Left text */}
        <section className="text-gray-800 px-4">
          <h1 className="text-4xl font-bold text-purple-700 mb-6">Vaccinations & Immunizations</h1>
          <p className="text-lg leading-relaxed max-w-xl">
            At Sherwood Pharmacy, your health and safety are our top priorities. We offer a comprehensive range of vaccinations, including flu shots, COVID-19 vaccines, and other essential immunizations for all ages. Our expert pharmacists provide personalized guidance to ensure you receive the right vaccines at the right time. Protect yourself and your loved ones with convenient, professional immunization services delivered with care and compassion.
          </p>
        </section>


      </motion.div>
    </main>
  );
}

