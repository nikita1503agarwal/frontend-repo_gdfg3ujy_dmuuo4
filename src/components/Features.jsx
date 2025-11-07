import { Rocket, Headphones, Calendar, Sparkles } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="h-5 w-5 text-purple-600" />,
      title: 'On-brand conversations',
      desc: 'We fine-tune your agent on your voice, listings, and market so it sounds like you—only faster.',
    },
    {
      icon: <Headphones className="h-5 w-5 text-blue-600" />,
      title: '24/7 lead qualification',
      desc: 'Instantly handle inquiries from portals, website chat, and SMS. Capture, qualify, and route with no delay.',
    },
    {
      icon: <Calendar className="h-5 w-5 text-orange-500" />,
      title: 'Auto-book showings',
      desc: 'Connect your calendar to let the agent schedule showings and listing appointments for you.',
    },
    {
      icon: <Rocket className="h-5 w-5 text-gray-900" />,
      title: 'Easy setup',
      desc: 'Go live in days, not months. We handle data prep, training, and deployment for you.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why agents love our AI</h2>
          <p className="mt-3 text-gray-600">Purpose-built for real estate to help you move faster and win more listings.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
