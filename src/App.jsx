import Hero from './components/Hero';
import InteractiveShowcase from './components/InteractiveShowcase';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <InteractiveShowcase />
      <Features />
      <Pricing />
      <Contact />
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} AURA AI — Custom chatbots for real estate</p>
          <div className="text-sm text-gray-600">
            Built with love and a lot of coffee.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
