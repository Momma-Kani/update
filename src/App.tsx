import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pageShimmer {
        0% { transform: translateX(-100%) rotate(12deg); }
        100% { transform: translateX(200%) rotate(12deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>
      <main className="p-6">
        <p>Content goes here</p>
      </main>
      <div
        className="fixed top-[-50%] left-0 w-[40%] h-[200%] pointer-events-none z-[9999]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 100%)',
          animation: 'pageShimmer 4s ease-in-out infinite',
        }}
      />
    </div>
  );
}
