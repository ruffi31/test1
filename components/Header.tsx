'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-700">
          SHERWOOD PHARMACY
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
          <Link href="/refill" className="text-gray-600 hover:text-purple-600 transition">Refill</Link>
          <Link href="/transfer" className="text-gray-600 hover:text-purple-600 transition">Transfer</Link>

          {/* Services with submenu */}
          <div className="relative group">
            <button
              type="button"
              className="text-gray-600 hover:text-purple-600 transition flex items-center gap-1"
            >
              Services
              <svg
                className="w-4 h-4 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
              <Link href="/refill" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Prescription Refills</Link>
              <Link href="/immunization" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Vaccinations</Link>
              <Link href="/consult" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Medication Counseling</Link>
              <Link href="/consult" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Consult a Pharmacist</Link>
              <Link href="/otc" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">OTC Products</Link>
              <Link href="/dmv" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">DMV Vision Test</Link>
              <Link href="/delivery" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Free Delivery</Link>
              <Link href="/passport" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Passport Pictures</Link>
              <Link href="/otherservices" className="block px-4 py-2 text-gray-700 hover:bg-purple-100">Other Services</Link>
            </div>
          </div>

          <Link href="/consult" className="text-gray-600 hover:text-purple-600 transition">Contact Us</Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-2 space-y-2 bg-white border-t border-gray-200 py-4 px-6">
          <Link href="/" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/refill" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Refill</Link>
          <Link href="/transfer" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Transfer</Link>

          {/* Services mobile submenu */}
          <div>
            <button
              type="button"
              onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
              className="w-full flex justify-between items-center text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              Services
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${servicesSubmenuOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesSubmenuOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/refill" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Prescription Refills</Link>
                <Link href="/immunization" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Vaccinations</Link>
                <Link href="/consult" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Consult a Pharmacist</Link>
                <Link href="/otc" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>OTC Products</Link>
                <Link href="/dmv" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>DMV Vision Test</Link>
                <Link href="/delivery" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Free Delivery</Link>
                <Link href="/passport" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Passport Pictures</Link>
                <Link href="/otherservices" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Other Services</Link>
              </div>
            )}
          </div>

          <Link href="/consult" className="block text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </nav>
      )}
    </header>
  );
}
