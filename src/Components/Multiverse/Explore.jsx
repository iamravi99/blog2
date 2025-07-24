import React from 'react';
import { Link } from 'react-router-dom';
import './Multiverse.css';

const Explore = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dxjjnlxl5/video/upload/v1753376344/explore_hdj1sb.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 iceland-regular px-4 text-center">
        <Link
          to="/multiverse"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold rounded-lg  transition duration-300 hover:scale-105 transform"
        >
          Go to Multiverse
        </Link>
      </div>

      {/* Optional Overlay for Dark Effect */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default Explore;
