export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple pricing that scales with you</h2>
          <p className="mt-3 text-gray-600">Launch fast, prove ROI, then grow. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-2 text-sm text-gray-600">Perfect for solo agents</p>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$299</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Custom branded chatbot</li>
              <li>• Website and SMS widget</li>
              <li>• Basic lead capture</li>
              <li>• Email support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Get Started</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-purple-600 bg-white p-8 shadow-lg ring-1 ring-purple-100">
            <span className="absolute -top-3 right-6 rounded-full bg-purple-600 px-2 py-1 text-[10px] font-semibold uppercase text-white">Most Popular</span>
            <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
            <p className="mt-2 text-sm text-gray-600">For growing teams</p>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$599</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Everything in Starter</li>
              <li>• Voice calls + voicemail</li>
              <li>• Calendar booking</li>
              <li>• CRM integrations</li>
              <li>• Priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow-lg shadow-purple-500/30 hover:opacity-95">Start Free Demo</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-2 text-sm text-gray-600">For brokerages + custom</p>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Dedicated account manager</li>
              <li>• Bespoke workflows</li>
              <li>• Data + analytics dashboard</li>
              <li>• SLA + security reviews</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Talk to Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
