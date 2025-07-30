'use client';

import { motion } from 'framer-motion';

export default function OtherServices() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-6">
      {/* Intro Section */}
      <motion.section
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          Other Services We Offer
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Sherwood Pharmacy, we go beyond prescriptions and immunizations. We proudly provide a wide variety of everyday essentials and specialty items. Whether you're shopping for wellness, self-care, or thoughtful gifts, you'll find just what you need here.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: 'Perfumes',
            description:
              'Discover an elegant collection of fragrances tailored for every mood and moment. Our perfumes are carefully selected to offer both classic and modern notes for men and women.',
          },
          {
            title: 'Deodorants',
            description:
              'Stay confident with our range of gentle yet effective deodorants. From natural to clinical strength, we carry options for all preferences and skin types.',
          },
          {
            title: 'Vitamins & Supplements',
            description:
              'Support your well-being with trusted multivitamins and nutritional supplements. We offer products for immunity, energy, heart health, and more.',
          },
          {
            title: 'Greeting Cards',
            description:
              'Mark any occasion with a meaningful message. From birthdays to sympathy, our curated card selection helps you say it just right.',
          },
          {
            title: 'Gift Cards',
            description:
              'Share the gift of choice. Our store gift cards make the perfect present for loved ones and let them pick exactly what they need.',
          },
          {
            title: 'Printing/Fax',
            description:
              'At Sherwood Pharmacy, we make life more convenient with in-store printing services. Whether you need to print medical documents, forms, prescription records, or general paperwork, we’ve got you covered. Our fast, secure printing helps you handle tasks without the extra trip.',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-purple-100"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
