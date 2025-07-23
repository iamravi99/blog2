import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Superhero = () => {
  const [shop, setshop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getshop = async() => {
      try {
        setLoading(true);
        // Use environment variable for API URL if available, otherwise fallback to localhost
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        console.log("Fetching superheroes from:", `${API_URL}/superhero`);
        
        const res = await axios.get(`${API_URL}/superhero`);
        console.log("Superhero data received:", res.data);
        
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setshop(res.data);
        } else {
          // If no data from API, use local JSON as fallback
          console.log("No data from API, using local JSON");
          const localRes = await axios.get("/superherolist.json");
          setshop(localRes.data);
        }
      } catch (error) {
        console.error("Error fetching superheroes:", error);
        setError(error);
        
        // Fallback to local JSON file
        try {
          console.log("Falling back to local JSON file");
          const localRes = await axios.get("/superherolist.json");
          setshop(localRes.data);
        } catch (fallbackError) {
          console.error("Fallback also failed:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    getshop();
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* Top Heading */}
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Marvel's Legendary Superheroes
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          From battles on Earth to wars in space, meet the iconic Avengers who rise above all odds to defend humanity.
          <span className="text-yellow-400 font-semibold block">
            Heroes aren't born — they're made.
          </span>
        </p>
      </div>

      {loading && (
        <div className="text-center py-10">
          <p className="text-xl">Loading superheroes...</p>
        </div>
      )}

      {error && !loading && shop.length === 0 && (
        <div className="text-center py-10 text-red-500">
          <p className="text-xl">Error loading superheroes. Please try again later.</p>
        </div>
      )}

      {/* Slider */}
      {!loading && shop.length > 0 && (
        <div className="slider-container px-6 mt-10">
          <Slider {...settings}>
            {shop.map((hero, index) => (
              <div key={index} className="p-4">
                <div className="card bg-base-100 shadow-xl w-fit">
                  <figure>
                    <img
                      src={hero.image && hero.image.startsWith("http") 
                        ? hero.image 
                        : `/images/${hero.image}`}
                      alt={hero.alias}
                      className="w-full h-auto object-contain rounded-t-xl"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/ironman.jpg"; // Fallback image
                      }}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-red-600">{hero.alias}</h2>
                    <p className="text-sm text-lime-800">Name: {hero.name}</p>
                    <p className="text-sm">Power: {hero.power}</p>
                    <p className="text-sm">Weapon: {hero.weapon}</p>
                    <p className="text-sm text-yellow-400">Team: {hero.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Second slider */}
      {!loading && shop.length > 0 && (
        <div className="slider-container px-6 mt-10">
          <Slider {...settings}>
            {shop.map((hero, index) => (
              <div key={index} className="p-4">
                <div className="card bg-base-100 shadow-xl w-fit">
                  <figure>
                    <img
                      src={hero.image && hero.image.startsWith("http") 
                        ? hero.image 
                        : `/images/${hero.image}`}
                      alt={hero.alias}
                      className="w-full h-auto object-contain rounded-t-xl"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/ironman.jpg"; // Fallback image
                      }}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-red-600">{hero.alias}</h2>
                    <p className="text-sm text-lime-800">Name: {hero.name}</p>
                    <p className="text-sm">Power: {hero.power}</p>
                    <p className="text-sm">Weapon: {hero.weapon}</p>
                    <p className="text-sm text-yellow-400">Team: {hero.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Superhero;