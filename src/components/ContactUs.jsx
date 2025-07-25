import { Facebook, Instagram, Youtube, Linkedin, Twitter, MapPin, Phone, Mail, Smartphone } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="bg-slate-950  text-gray-300">
      <div className="max-w-6xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Addresses and Contact Info */}
          <div className="space-y-8">
            {/* Head Office */}
            <div>
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Head Office / Branch 1 (Tathawade, Pune)</h3>
              </div>
              <p className="text-gray-400 leading-relaxed ml-8">
                113-114, 1st Floor, Vision One Mall, <br />
                Opp. to Indira College, Near Bhumkar Chowk, <br />
                Tathawade, Pune - 411033
              </p>
            </div>

            {/* Branch 2 */}
            <div>
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Branch 2 (Nigdi, Pune)</h3>
              </div>
              <p className="text-gray-400 leading-relaxed ml-8">
                Sector 27/A, Plot 80, Above Axis Bank, <br />
                Near Lokmanya Hospital, <br />
                Nigdi, Pune - 411044
              </p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-start space-x-3 mb-3">
                <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Phone</h3>
              </div>
              <div className="text-gray-400 ml-8 space-y-1">
                <p>
                  <a href="tel:+918290990901" className="hover:text-white transition-colors">
                    +91 82 909 909 01
                  </a>
                </p>
                <p>
                  <a href="tel:+918788545855" className="hover:text-white transition-colors">
                    +91 87 885 458 55
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start space-x-3 mb-3">
                <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-400 ml-8">
                <a 
                  href="mailto:enquiry@akprofessionalinstitute.com" 
                  className="hover:text-white transition-colors hover:underline"
                >
                  enquiry@akprofessionalinstitute.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media and Apps */}
          <div className="space-y-8">
            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <Facebook size={20} className="text-blue-500" />
                  <span className="text-gray-300">Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <Instagram size={20} className="text-pink-500" />
                  <span className="text-gray-300">Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <Youtube size={20} className="text-red-500" />
                  <span className="text-gray-300">YouTube</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <Linkedin size={20} className="text-blue-600" />
                  <span className="text-gray-300">LinkedIn</span>
                </a>
              </div>
              
            </div>

            {/* Download App */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone size={20} className="text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Download Our App</h3>
              </div>
              <div className="space-y-4">
                <a href="#" className="block">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg">
                     Download from Google Play
                  </button>
                </a>
                <a href="#" className="block">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg">
                     Download from App Store
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}