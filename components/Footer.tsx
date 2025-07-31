import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG, FaFlickr } from 'react-icons/fa';

export default function Footer() {
  return (
    
    <footer className="bg-gray-100 text-gray-800 text-sm py-6">
      
      <div className="max-w-4xl mx-auto text-center px-4">
         <hr className="my-10 border-gray-700" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-gray-400 text-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-black mb-2">SHERWOOD PHARMACY</h3>
            <p>Committed to your health and wellness.</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-black mb-2">HOURS OF OPERATION</h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-center">
              <p>Monday:</p>
              <p>9AM - 7:30PM</p>
              <p>Tuesday:</p>
              <p>9AM - 7:30PM</p>
              <p>Wednesday:</p>
              <p>9AM - 7:30PM</p>
              <p>Thursday:</p>
              <p>9AM - 7:30PM</p>
              <p>Friday:</p>
              <p>9AM - 7:30PM</p>
              <p>Saturday:</p>
              <p>9AM - 7:30PM</p>
              <p>Sunday:</p>
              <p>10AM - 5:00PM</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-black mb-2">SERVICES</h4>
            <ul className="space-y-1">
              <li><a href="/consult" className="hover:underline">Consult a Pharmacist</a></li>
              <li><a href="/immunization" className="hover:underline">Vaccination</a></li>
              <li><a href="/delivery" className="hover:underline">Free Delivery</a></li>

              <li><a href="/refill" className="hover:underline">Refill Prescription</a></li>
              <li><a href="/transfer" className="hover:underline">Transfer Prescription</a></li>
              <li><a href="/otc" className="hover:underline">Over the Counter (OTC)</a></li>
              <li><a href="/passport" className="hover:underline">Passport Pictures</a></li>
              <li><a href="/dmv" className="hover:underline">DMV Vision Test</a></li>
              <li><a href="/otherservices" className="hover:underline">Other Services</a></li>

            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-black mb-2">ABOUT US</h4>
            <ul className="space-y-1">
              <li><a href="/consult" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-5">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaRss className="hover:text-gray-300 cursor-pointer" />
            <FaGooglePlusG className="hover:text-gray-300 cursor-pointer" />
            <FaFlickr className="hover:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-gray-500 text-center text-xs">
            &copy; {new Date().getFullYear()} SHERWOOD PHARMACY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
