import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Spline cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Soft gradient overlays for readability (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold text-white drop-shadow">AURA AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
            <a href="#features" className="hover:text-white">Benefits</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20">Get a Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            AI Chatbots for Real Estate
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white drop-shadow sm:text-6xl">
            Convert more leads with a custom AI agent that talks like you
          </h1>
          <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
            We build branded, voice-enabled chatbots for real estate pros that qualify leads 24/7, book showings, and answer property questions with personality.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-gray-900 shadow-lg shadow-purple-500/30 hover:bg-gray-100">
              See Packages
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>

      {/* Spacer to transition into next section with clean white background */}
      <div className="relative h-12" />
    </section>
  );
}
