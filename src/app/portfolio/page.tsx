// app/portfolio/page.tsx
export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Our Work</h2>
      <p className="text-center text-gray-600 mb-8">Check back soon for highlights of our projects in web platforms, CCTV installations, and network setups.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">Coming Soon</div>
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">Coming Soon</div>
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">Coming Soon</div>
      </div>
    </div>
  );
}