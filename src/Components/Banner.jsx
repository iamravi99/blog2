import React from 'react'
import iron from "../assets/iron.png"

const Banner = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-green-400 to-blue-700 bg-clip-text text-transparent">
            Iron Man — The Genius Behind the Avengers
          </h1>
          <p className="mt-4 text-white text-sm sm:text-base md:text-lg">
            Tony Stark, better known as Iron Man, is not just a billionaire and genius inventor, but the heart of the Avengers. 
            From creating the first arc reactor in a cave to building a suit capable of saving the world, Iron Man's legacy 
            is one of sacrifice, leadership, and unmatched brilliance. His wit, courage, and armor shaped the destiny of Earth's 
            mightiest heroes.
          </p>

          <form className="mt-6 w-full flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="submit"  
              className="w-full sm:w-auto bg-white text-indigo-600 font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
          <img 
            className='w-48 sm:w-56 md:w-64 lg:w-72 object-contain' 
            src={iron} 
            alt="Iron Man" 
          />
        </div>
      </div>
    </div>
  )
}

export default Banner