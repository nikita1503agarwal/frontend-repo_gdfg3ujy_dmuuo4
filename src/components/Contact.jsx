import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We\'ll be in touch within 24 hours.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book a free strategy call</h2>
          <p className="mt-3 text-gray-600">Tell us about your market, listings, and systems. We\'ll show you exactly how an AI agent can fit into your workflow.</p>
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-700">Prefer email? Reach us at <a href="mailto:hello@auraai.app" className="font-medium text-gray-900 underline">hello@auraai.app</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-800">Name</label>
              <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-800">What\'s your biggest goal?</label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>More listing appointments</option>
                <option>Faster lead response</option>
                <option>Follow-up automation</option>
                <option>Improve website chat</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-800">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Share any links to listings, CRM, or current workflows..." />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white shadow-lg shadow-purple-500/30 hover:opacity-95">Request Demo</button>
          {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
