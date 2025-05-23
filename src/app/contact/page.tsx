// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">Let’s Work Together</h2>
      <form className="space-y-5 bg-white p-6 rounded-xl shadow-md">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <textarea placeholder="Your Message" className="w-full px-4 py-3 border rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">Send Message</button>
      </form>
    </div>
  );
}