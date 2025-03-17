import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { createContact } from '../api/contactApi';
import { toast } from 'sonner'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createContact(formData);
      console.log('Contact created:', response);
      toast.success('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side: Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Phone className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-sm text-gray-600">Emergency: (555) 123-4567</p>
              <p className="text-sm text-gray-600">General: (555) 123-4568</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Mail className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-sm text-gray-600">info@medicalcenter.com</p>
              <p className="text-sm text-gray-600">appointments@medicalcenter.com</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-sm text-gray-600">123 Medical Center Drive</p>
              <p className="text-sm text-gray-600">Healthcare City, HC 12345</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;