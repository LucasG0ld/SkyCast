import { Cloud, Globe, Wifi, Sparkles, Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-gray via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-coral/10 px-4 py-2 text-sm font-medium text-coral">
                Now Available
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                SkyCast: The Weather,{' '}
                <span className="text-gradient">Reimagined</span>
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Experience weather like never before with immersive backgrounds, glassmorphism design, and offline-first architecture. Beautiful, fast, and multilingual.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-xl bg-coral px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-coral/30 transition-all hover:bg-coral/90 hover:shadow-xl hover:shadow-coral/40"
                >
                  <Cloud className="h-5 w-5" />
                  Download APK
                </a>
                <a
                  href="https://github.com/LucasG0ld/SkyCast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-coral hover:text-coral"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right: App Mockup Placeholder */}
            <div className="relative">
              <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-[3rem] border-8 border-gray-800 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 shadow-2xl">
                <div className="h-full w-full rounded-[2.5rem] bg-white/10 backdrop-blur-xl flex items-center justify-center">
                  <Cloud className="h-24 w-24 text-white/80" />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-coral/20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for the Modern User
            </h2>
            <p className="text-xl text-gray-600">
              Every detail crafted for an exceptional experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-coral/50">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Immersive Backgrounds
              </h3>
              <p className="text-gray-600">
                Dynamic gradients that adapt to weather conditions and time of day
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-coral/50">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-3">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Glassmorphism Design
              </h3>
              <p className="text-gray-600">
                Beautiful frosted glass effects with smooth animations
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-coral/50">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-coral to-orange-600 p-3">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Offline First
              </h3>
              <p className="text-gray-600">
                Weather data cached locally for instant access anytime
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-coral/50">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-green-500 to-teal-600 p-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Multilingual
              </h3>
              <p className="text-gray-600">
                Full support for English and French with automatic detection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built by Lucas Gold
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Full-stack developer passionate about creating beautiful, performant applications with modern technologies.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/LucasG0ld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:border-coral hover:text-coral"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://lucasgold.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:border-coral hover:text-coral"
            >
              <ExternalLink className="h-5 w-5" />
              Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-gray-600">
          <p>© 2025 SkyCast. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
