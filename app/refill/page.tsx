'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const dynamic = 'force-dynamic';

type FormDataType = {
  fullName: string;
  dateOfBirth: string;
  rxNumber: string;
  phoneNumber: string;
  additionalNotes: string;
  insurance: string;
};

const fields: (keyof FormDataType)[] = ['insurance','fullName', 'dateOfBirth', 'rxNumber', 'phoneNumber'];

export default function RefillForm() {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    dateOfBirth: '',
    rxNumber: '',
    phoneNumber: '',
    additionalNotes: '',
    insurance:'',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // name is now guaranteed to be keyof FormDataType
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, type: 'refill' };
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setStatus('✅ Submitted successfully! We’ll contact you shortly.');
      setFormData({
        fullName: '',
        dateOfBirth: '',
        rxNumber: '',
        phoneNumber: '',
        additionalNotes: '',
        insurance:'',
      });
    } else {
      setStatus('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200"
      >
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">RX Refill Request</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')
                                .replace(/\b\w/g, char => char.toUpperCase())}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300"
            />
          ))}
          <textarea
            name="additionalNotes"
            placeholder="Additional RX numbers or comments"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full h-24 px-4 py-3 rounded-xl border border-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"
          >
            Submit Request
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </motion.div>
    </div>
  );
}
