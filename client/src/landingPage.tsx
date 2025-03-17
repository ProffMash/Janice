import { Heart, Activity, Users, Award, Stethoscope, Microscope, Syringe, Bed, Brain } from 'lucide-react';
import Navbar from './components/navbar';
import Contact from './components/contac';
import Appointment from './components/Appointments';
import Footer from './components/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/34/2d/ec/342dec30cab9d17beae361aeb66fd504.jpg"
            alt="Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Health Is Our Priority
            </h1>
            <p className="text-xl mb-8">
              Providing exceptional healthcare services with compassion and expertise.
              Our team of dedicated professionals is here to care for you and your family.
            </p>
            <a
              href="#appointment"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Dedicated medical professionals providing the best care</p>
            </div>
            
            <div className="text-center">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-gray-600">State-of-the-art facilities and equipment</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
              <p className="text-gray-600">Focused on your comfort and well-being</p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accredited</h3>
              <p className="text-gray-600">Recognized for excellence in healthcare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of medical services to meet all your healthcare needs,
            delivered by our team of experienced professionals using the latest medical technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
                title: "Primary Care",
                description: "Comprehensive health assessments and preventive care for patients of all ages."
              },
              {
                icon: <Microscope className="w-12 h-12 text-blue-600" />,
                title: "Laboratory Services",
                description: "Advanced diagnostic testing and quick, accurate results."
              },
              {
                icon: <Syringe className="w-12 h-12 text-blue-600" />,
                title: "Vaccinations",
                description: "Preventive immunizations and flu shots for all age groups."
              },
              {
                icon: <Bed className="w-12 h-12 text-blue-600" />,
                title: "Inpatient Care",
                description: "24/7 monitoring and treatment for patients requiring hospitalization."
              },
              {
                icon: < Heart className="w-12 h-12 text-blue-600" />,
                title: "Emergency Care",
                description: "Round-the-clock emergency medical services for urgent conditions."
              },
              {
                icon: <Brain className="w-12 h-12 text-blue-600" />,
                title: "Specialized Care",
                description: "Expert treatment for specific medical conditions and specialties."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cardiology',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
                description: 'Comprehensive heart care services'
              },
              {
                name: 'Neurology',
                image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80',
                description: 'Expert neurological treatments'
              },
              {
                name: 'Pediatrics',
                image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80',
                description: 'Specialized care for children'
              }
            ].map((dept, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Specialist Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Component */}
      <Appointment />

      {/* Contact Component */}
      <Contact />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default LandingPage;