import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // Use environment variable for API URL if available, otherwise fallback to localhost
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const res = await axios.get(`${API_URL}/movie`);
        setMovies(res.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Top Heading */}
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Marvel’s Blockbuster Movies
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Cinematic masterpieces that define the Marvel Universe.
          <span className="text-yellow-400 font-semibold block">
            Lights. Camera. Heroism.
          </span>
        </p>
      </div>

      {/* Movie Slider */}
      <div className="slider-container px-6 mt-10">
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div key={index} className="p-4">
              <div className="card bg-base-100 shadow-xl w-fit">
                <figure>
                  <img
                    src={
                      movie.poster.startsWith("http")
                        ? movie.poster
                        : `/images/${movie.poster}`
                    }
                    alt={movie.title}
                    className="w-full h-auto object-contain rounded-t-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-red-600">{movie.title}</h2>
                  <p className="text-sm text-gray-600">Hero: {movie.hero}</p>
                  <p className="text-sm">Release Year: {movie.releaseYear}</p>
                  <p className="text-sm text-yellow-400">
                    Director: {movie.director}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      



      

    </>
  );
};

export default Movie;
