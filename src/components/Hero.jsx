import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold text-gray-900">AURA AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Benefits</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Get a Demo</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            AI Chatbots for Real Estate
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Convert more leads with a custom AI agent that talks like you
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We build branded, voice-enabled chatbots for real estate pros that qualify leads 24/7, book showings, and answer property questions with personality.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white shadow-lg shadow-purple-500/30 hover:opacity-95">
              See Packages
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[560px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>
    </section>
  );
}
