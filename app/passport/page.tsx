'use client';

import { motion } from 'framer-motion';

export default function Passport() {
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
            <h1 className="text-4xl font-bold text-purple-700 mb-6">Passport Pictures</h1>
            <p className="text-lg leading-relaxed max-w-xl mb-6">
                At our pharmacy, we offer professional passport photo services for all age groups, from newborns to seniors. Whether you need a photo for a new passport, visa, immigration application, or official ID, our trained staff ensures each picture meets the exact specifications required by government agencies. We understand that capturing the perfect photo—especially for infants and young children—can be challenging, which is why we take the time to create a calm, comfortable environment and work patiently to get it right. Our high-quality, compliant photos are printed on the spot, so you can walk out with exactly what you need in minutes. Convenient, quick, and reliable—trust us for all your passport photo needs.            </p>
            <a
              href="tel:+1 (718) 699-7700"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            >
              📞 CALL FOR DETAILS
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
