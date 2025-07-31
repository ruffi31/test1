'use client';

import { motion } from 'framer-motion';

export default function Delivery() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col px-6 py-20">
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
          {/* Left text */}
          <section className="text-gray-800 px-4">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">FREE DELIVERY</h1>
            <p className="text-lg leading-relaxed max-w-xl mb-6">
                At our pharmacy, we understand that life can get busy and making time to pick up your medications isn't always easy—especially for seniors, parents, or those managing health conditions. That’s why we’re proud to offer free delivery services to all our customers. Whether you need a one-time prescription filled or receive regular medications, our reliable delivery team ensures your prescriptions arrive safely, promptly, and with the same care you’d expect if you walked through our doors. This service is designed to provide added peace of mind, reduce the burden of transportation, and support your health journey without interrupting your daily routine. No hidden fees, no minimum order—just our commitment to bringing quality care directly to your doorstep. Because at our pharmacy, your well-being and convenience are always our top priority.            </p>
            <a
              href="tel:+1 (718) 699-7700"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            >
              📞 CALL TO SCHEDULE A DELIVERY
            </a>
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
            Visit us at our convenient location in Corona.
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
