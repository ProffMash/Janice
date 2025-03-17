import { useState } from 'react';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">MediCare</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#departments" className="text-gray-700 hover:text-blue-600 transition-colors">Departments</a>
            <a href="#appointment" className="text-gray-700 hover:text-blue-600 transition-colors">Appointment</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="flex flex-col space-y-4 py-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Services</a>
              <a href="#departments" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Departments</a>
              <a href="#appointment" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Appointment</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;