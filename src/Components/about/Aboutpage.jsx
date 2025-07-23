import React from 'react';

const Aboutpage = () => {
  return (
    <>
      {/* Top Heading */}
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          About Marvel Verse
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A fan-made Marvel Universe Portal built with ❤️ by developers & fans alike.
          <span className="text-yellow-400 font-semibold block">
            From comics to code — welcome to MarvelVerse.
          </span>
        </p>
      </div>

      {/* About Content */}
      <div className="px-6 mt-10 flex justify-center">
        <div className="bg-base-100 shadow-xl p-8 rounded-2xl max-w-4xl w-full text-white space-y-6">
          <p className="text-gray-600 leading-relaxed text-justify">
            <strong className=" text-blue">Marvel Verse</strong> is a fan-made web app dedicated to the legendary Marvel Cinematic Universe (MCU). Explore detailed profiles of your favorite superheroes, discover Marvel movie timelines, and dive deep into character backstories — all in one place.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            Built using the <strong className="text-blue ">MERN</strong> (MongoDB, Express, React, Node.js) stack, this project demonstrates a full-stack approach to managing and displaying Marvel data with powerful search features, beautiful UI, and dynamic content updates.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            Whether you're a fan of Iron Man, Spider-Man, Black Panther, or any other Marvel legend, MarvelVerse brings the universe to your fingertips.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-red-400">🚀 Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>🔍 Explore Marvel superheroes with images and bios</li>
              <li>🎬 View movie release years and trailers</li>
              <li>⚡ Instant search for your favorite characters</li>
              <li>📱 Mobile-friendly and responsive design</li>
              <li>⚙️ Built with React & Tailwind CSS</li>
            </ul>
          </div>

          <div className="text-center pt-6">
            <p className="text-sm text-gray-600 italic">Made with ❤️ by Marvel fans.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
