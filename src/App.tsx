const App = () => {
  const capabilityCards = [
    {
      icon: "🌐",
      title: "Landing Pages",
      desc: "Stunning marketing sites that convert",
      bgImage:
        "url('https://images.pexels.com/photos/9128859/pexels-photo-9128859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      hoverBorder: "hover:border-violet-500/50",
    },
    {
      icon: "📊",
      title: "Dashboards",
      desc: "Data-rich interfaces with real-time feel",
      bgImage:
        "url('https://images.pexels.com/photos/20815047/pexels-photo-20815047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      icon: "🎨",
      title: "Portfolios",
      desc: "Bold, editorial personal sites",
      bgImage:
        "url('https://images.pexels.com/photos/6985042/pexels-photo-6985042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      hoverBorder: "hover:border-emerald-500/50",
    },
    {
      icon: "🛍️",
      title: "E-commerce",
      desc: "Product pages and storefronts",
      bgImage:
        "url('https://images.pexels.com/photos/20043053/pexels-photo-20043053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      hoverBorder: "hover:border-orange-500/50",
    },
    {
      icon: "⚡",
      title: "Apps & Tools",
      desc: "Interactive utilities and micro-apps",
      bgImage:
        "url('https://images.pexels.com/photos/20815038/pexels-photo-20815038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      hoverBorder: "hover:border-yellow-500/50",
    },
  ];

  const suggestionChips = ["🛒 An online shop", "📅 A booking page", "🎵 A music player UI"];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans">
      <div className="shimmer-overlay" />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(200%) rotate(25deg); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient-shift 4s ease infinite;
          background-size: 200% auto;
        }
        .shimmer-overlay {
          pointer-events: none;
          position: fixed;
          top: -50%;
          left: -50%;
          width: 40px;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.06) 50%,
            transparent 100%
          );
          animation: shimmer-sweep 4s ease-in-out infinite;
          z-index: 9999;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.15]"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6985268/pexels-photo-6985268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          }}
        />

        {/* Floating Orbs */}
        <div
          className="absolute top-10 right-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "9s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "12s" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 w-full max-w-5xl">
          {/* Pill Badge */}
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-violet-500 to-pink-500 p-[1px] rounded-full">
              <div className="bg-[#0A0A0F] rounded-full px-5 py-2 text-sm text-white font-medium">
                ✦ Welcome to Code Studio
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
            Build Anything.
            <br />
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
              Instantly.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 max-w-xl mx-auto mt-6 leading-relaxed">
            I'm Poía, your AI creative director. Tell me what to build — a landing page, a dashboard, an app — and watch
            it come to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
              Start Creating
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/5">
              See Examples ↓
            </button>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section id="examples" className="py-24 px-6 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-4">WHAT I CAN BUILD</p>
          <h2 className="text-4xl font-bold">Endless possibilities.</h2>
          <p className="text-gray-400 mt-3 text-lg">From a quick test like this one, to full product launches.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {capabilityCards.map((card) => (
              <div
                key={card.title}
                className={`group relative h-72 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.02] ${card.hoverBorder}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: card.bgImage }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 flex items-end gap-3">
                  <span className="text-3xl">{card.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Special Card: Anything Else */}
            <div className="h-72 rounded-2xl bg-gradient-to-br from-violet-900/50 to-pink-900/50 border border-violet-500/30 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:scale-[1.02]">
              <span className="text-5xl">✨</span>
              <h3 className="text-xl font-bold mt-4">Anything Else</h3>
              <p className="text-gray-400 mt-2">Seriously. Just describe it.</p>
              <div className="mt-4 w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="py-24 px-6 bg-[#0D0D15]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest">TRY IT</p>
          <h2 className="text-4xl font-bold mt-4">What will you build?</h2>

          {/* Mock Chat Input */}
          <div
            className="mt-10 p-6 bg-[#1A1A24] rounded-2xl border border-white/10"
            style={{
              boxShadow:
                "0 0 40px rgba(124,58,237,0.2), 0 0 80px rgba(236,72,153,0.1)",
            }}
          >
            <textarea
              disabled
              placeholder="e.g. Build me a recipe app with a dark theme and card layout..."
              className="w-full bg-transparent border-none outline-none resize-none text-gray-300 placeholder-gray-500 h-24 text-lg cursor-not-allowed"
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500 text-sm">Powered by Poía ✦</span>
              <span className="px-6 py-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-full text-sm opacity-75 cursor-not-allowed">
                Build it →
              </span>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {suggestionChips.map((chip) => (
              <div
                key={chip}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-violet-500/40 cursor-pointer transition-all duration-300"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-gray-500 text-sm">Made with Poía · Code Studio</p>
        <p className="mt-2 text-lg font-semibold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
          Start your build today →
        </p>
      </footer>
    </div>
  );
};

export default App;
