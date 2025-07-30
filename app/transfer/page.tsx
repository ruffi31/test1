'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type FormDataType = {
  fullName: string;
  dateOfBirth: string;
  currentPharmacy: string;
  phoneNumber: string;
  currentMedications: string;
  insurance: string;
};

const fields: (keyof FormDataType)[] = ['fullName', 'dateOfBirth', 'currentPharmacy', 'phoneNumber','insurance'];

export default function TransferForm() {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    dateOfBirth: '',
    currentPharmacy: '',
    phoneNumber: '',
    currentMedications: '',
    insurance: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, type: 'transfer' };
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setStatus('✅ Transfer request sent successfully!');
      setFormData({
        fullName: '',
        dateOfBirth: '',
        currentPharmacy: '',
        phoneNumber: '',
        currentMedications: '',
        insurance:'',
      });
    } else {
      setStatus('❌ Error sending request. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-indigo-100 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Transfer a Prescription</h2>
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
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          ))}
          <textarea
            name="currentMedications"
            placeholder="List current medications or notes"
            value={formData.currentMedications}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg h-28"
          />
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700">
            Submit Transfer
          </button>
        </form>
        {status && <p className="mt-5 text-center text-sm text-gray-700">{status}</p>}
      </motion.div>
    </div>
  );
}
