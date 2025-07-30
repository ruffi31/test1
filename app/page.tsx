'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const welcomeWords = ['Welcome', 'to', 'Sherwood', 'Pharmacy'];

const services = [
  {
    title: 'Prescription Refills',
    desc: 'Fast and accurate prescription refills tailored to your needs.',
    icon: '💊',
    href:'/refill'

  },
  {
    title: 'Vaccinations',
    desc: 'We offer flu shots, COVID-19 vaccines, and more.',
    icon: '💉',href:'/immunization'
  },
  {
    title: 'Medication Counseling',
    desc: 'Personalized consultations with expert pharmacists.',
    icon: '👩‍⚕️',href:'/consult'
  },
  {
    title: 'OTC Products',
    desc: 'Wide selection of over-the-counter health products.',
    icon: '🛒',href:'/otc'
  },
    {
    title: 'DMV Vision Test',
    desc: 'We submit the results electronically to the DMV',
    icon: '👓',href:'/dmv'
  },
  {
    title: 'Passport Pictures',
    desc: 'We offer Passport Pictures for all age groups.',
    icon: '🗺️⁀જ✈︎',href:'/passport'
  },
  {
    title: 'Free Delivery',
    desc: 'Get your medication and other products delivered to your house.',
    icon: '🚚',href:'/delivery'
  },
  {
    title: 'All Major Insurances Accepted',
    desc: 'We accept all major insurances.',
    icon: '🪪',href:'/insurance'
  },
];

const images = [
  '/2.jpg',
  '/3.jpg',
  '/1.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
];

export default function AboutPage() {
  return (
    
<main className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-white text-gray-800 px-6 py-8 sm:py-12 space-y-10 flex flex-col items-center">

  {/* Welcome Animation */}
  <motion.div
    initial={{ opacity: 0, scale: 2 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="mx-auto rounded-3xl max-w-xl"
  >
    <img
      src="logo.jpg"
      alt="Sherwood Pharmacy Banner"
      className="w-full h-48 sm:h-80 md:h-96 object-contain rounded-3xl"
    />
    <div className="mt-2 sm:mt-4 flex justify-center gap-4 sm:gap-6">
      <button
        type="button"
        className="flex-1 px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition"
        onClick={() => { window.location.href = '/refill'; }}
      >
        Refill Prescriptions
      </button>
      <button
        type="button"
        className="flex-1 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
        onClick={() => { window.location.href = '/transfer'; }}
      >
        Switch Pharmacies
      </button>
    </div>
  </motion.div>

  {/* About Us Section */}
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg text-center"
  >
    <h1 className="text-4xl font-bold text-purple-700 mb-6">About Us</h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      At Sherwood Pharmacy, we pride ourselves on delivering personalized, high-quality healthcare to every member of our community. With decades of combined experience, our team of expert pharmacists and dedicated support staff work tirelessly to ensure each patient receives the care, respect, and attention they deserve. We understand that every health journey is unique, which is why we take the time to listen, answer your questions, and provide tailored recommendations for both prescription and over-the-counter needs. From medication management and vaccinations to wellness advice and everyday health products, our pharmacy is more than just a place to pick up your prescriptions — it’s a trusted partner in your health and wellness. Your well-being is our top priority, and we are here to support you every step of the way with compassion, professionalism, and a commitment to excellence.
    </p>
  </motion.section>
    {/*Mission Statement*/}
      <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg text-center"
  >
    <h1 className="text-4xl font-bold text-purple-700 mb-6">Our Mission Statement</h1>
    <p className="text-gray-700 text-lg leading-relaxed">
At Sherwood Pharmacy, our mission is to empower our community to live healthier lives by offering accessible, reliable, and compassionate pharmaceutical care. We are committed to building long-lasting relationships with our patients based on trust, transparency, and respect. Through a combination of advanced pharmacy practices, ongoing education, and a deep understanding of individual needs, we aim to be a source of strength, knowledge, and wellness for every person we serve. Our goal is to not only meet your healthcare needs — but to exceed your expectations every time you walk through our doors.    </p>
  </motion.section>
    
      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-700 text-center mb-10"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link href={service.href} passHref>
              <div className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all h-full">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-700 text-center mb-10"
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img src={src} alt={`Gallery ${idx}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>


      
     <section className="w-full max-w-7xl mx-auto bg-white p-10 rounded-3xl shadow-xl my-16">
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
  );
}
