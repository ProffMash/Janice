import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">MediCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional healthcare services with compassion and expertise since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#departments" className="text-gray-400 hover:text-blue-500 transition-colors">Departments</a></li>
              <li><a href="#appointment" className="text-gray-400 hover:text-blue-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Laboratory Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Surgery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Rehabilitation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: 9:00 AM - 4:00 PM</li>
              <li className="font-semibold text-blue-500">Emergency: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;