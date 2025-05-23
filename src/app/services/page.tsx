// app/services/page.tsx
const services = [
  { title: 'Custom Website & Management Systems', description: 'End-to-end development of web platforms tailored for hotels, schools, and institutions.' },
  { title: 'CCTV Surveillance & Installation', description: 'Design and deployment of modern CCTV systems with remote access and monitoring capabilities.' },
  { title: 'Network & IT Infrastructure', description: 'Complete setup of secure, high-performance networks for businesses and campuses.' },
  { title: 'IT Consultancy & Support', description: 'Strategic IT advisory, maintenance, and troubleshooting for scalable growth.' },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Our Core Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white border rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{service.title}</h3>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}