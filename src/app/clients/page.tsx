const clients = [
  { name: 'Eyerusalem Hotel', logo: '/images/clients/eyerusalem-hotel.png' },
  { name: 'Beteseb Academy', logo: '/images/clients/beteseb-academy.png' },
  { name: 'Kokeb PLC', logo: '/images/clients/kokeb.png' },
  { name: 'Techno School', logo: '/images/clients/techno-school.png' },
];

export default function ClientsPage() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Our Clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {clients.map((client, index) => (
          <div key={index} className="text-center">
            <img src={client.logo} alt={client.name} className="h-20 object-contain mx-auto" />
            <p className="mt-2 text-gray-700 font-medium">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
