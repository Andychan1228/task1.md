'use client';

import React from 'react';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center gap-2">
            {/* Simple Logo Placeholder */}
            <div className="w-8 h-8 bg-black rounded-full shadow-lg"></div>
            <span className="font-bold text-xl font-satoshi">Sumz</span>
        </div>

        <button
          type="button"
          onClick={() => window.open('https://github.com', '_blank')}
          className="bg-black text-white px-5 py-1.5 rounded-full hover:bg-gray-800 transition-all border border-black hover:bg-white hover:text-black"
        >
          GitHub
        </button>
      </nav>

      <h1 className="text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center mt-5">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;