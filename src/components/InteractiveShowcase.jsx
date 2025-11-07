import Spline from '@splinetool/react-spline';

export default function InteractiveShowcase() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Play with your AI in real time
          </h2>
          <p className="mt-3 text-gray-600">
            An interactive preview that reacts to your cursor and taps. Explore how your agent feels—smooth, fast, and on-brand.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-1">
          <div className="relative overflow-hidden rounded-3xl bg-gray-950">
            {/* Spline canvas */}
            <div className="relative h-[520px] w-full">
              <Spline
                scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Edge fades for legibility and depth without blocking interaction */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,rgba(0,0,0,0.35))]" />
            </div>

            {/* Floating callouts */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
                Drag • Hover • Tap
              </div>
              <div className="absolute right-6 bottom-6 rounded-xl bg-white/10 p-3 text-white ring-1 ring-white/20 backdrop-blur">
                <p className="text-sm font-medium">Responsive & real-time</p>
                <p className="text-xs text-white/80">Feels native across devices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple feature bullets below the canvas */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: 'On-brand dialogs', desc: 'We match your tone, listings, and market nuances.' },
            { title: 'Instant lead capture', desc: 'Qualify, route, and schedule—hands-free.' },
            { title: 'Works everywhere', desc: 'Website chat, SMS, and voice with one brain.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
