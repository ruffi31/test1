'use client';

import { motion } from 'framer-motion';

export default function Immunization() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col px-6 py-20">
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left text */}
          <section className="text-gray-800 px-4">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">Consult a Pharmacist</h1>
            <p className="text-lg leading-relaxed max-w-xl mb-6">
              At Sherwood Pharmacy, you have the unique opportunity to consult with some of the top pharmacists in the industry—professionals who are not only highly trained but also deeply committed to your health and well-being. Our pharmacists bring years of experience and up-to-date clinical knowledge to every interaction, ensuring that you receive expert, personalized guidance tailored to your specific medical history, current prescriptions, and lifestyle needs. Whether you have questions about a new medication, are managing a chronic condition, or simply want to better understand your treatment options, our team is here to help with patience, clarity, and compassion. We take the time to listen to your concerns, explain possible side effects or interactions, and recommend solutions that align with your health goals. At our pharmacy, you're not just picking up a prescription—you're gaining a trusted healthcare partner dedicated to helping you lead a healthier, more informed life.
            </p>
            <a
              href="tel:+1 (718) 699-7700"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            >
              📞 CALL TO SPEAK WITH A PHARMACIST
            </a>
          </section>

          {/* Right image */}
          <section className="flex justify-center px-4">
            <motion.img
              src="/IMG_2392.jpg"
              alt="Vaccination"
              className="rounded-3xl shadow-lg max-w-full h-auto object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </section>
        </motion.div>

        {/* Locate Us Section */}
        <section className="w-full max-w-7xl mx-auto bg-white p-10 rounded-3xl shadow-xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-purple-700 text-center mb-10"
          >
            Locate Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-purple-600 text-lg mb-8"
          >
            Visit us at our convenient location in Jackson Heights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-md border border-gray-200"
          >
            <iframe
              title="Pharmacy Location"
              src="https://www.google.com/maps?q=97-21+57+th+Avenue+Corona+NY&output=embed"
              allowFullScreen
              loading="lazy"
              className="w-full h-[28rem] border-none"
            ></iframe>
          </motion.div>
        </section>
      </main>

      {/* Optional Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Sherwood Pharmacy. All rights reserved.
      </footer>
    </>
  );
}
