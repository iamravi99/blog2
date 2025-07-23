import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Uni = () => {
  const [universes, setUniverses] = useState([]);

  useEffect(() => {
    const fetchUniverses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/uni");
        setUniverses(res.data);
      } catch (error) {
        console.error("Failed to fetch universes:", error);
      }
    };

    fetchUniverses();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Marvel Multiverse Realms
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the iconic universes where legends are born and destinies rewritten.
          <span className="text-yellow-400 font-semibold block">
            One multiverse. Infinite possibilities.
          </span>
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container px-6 mt-10">
        <Slider {...settings}>
          {universes.map((uni, index) => (
            <div key={index} className="p-4">
              <div className="card bg-base-100 shadow-xl w-fit">
                <figure>
                  <img
                    src={`/images/${uni.image}`}
                    alt={uni.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-red-600">{uni.title}</h2>
                  <p className="text-sm text-gray-300">{uni.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>



<div className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Marvel Multiverse Realms
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the iconic universes where legends are born and destinies rewritten.
          <span className="text-yellow-400 font-semibold block">
            One multiverse. Infinite possibilities.
          </span>
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container px-6 mt-10">
        <Slider {...settings}>
          {universes.map((uni, index) => (
            <div key={index} className="p-4">
              <div className="card bg-base-100 shadow-xl w-fit">
                <figure>
                  <img
                    src={`/images/${uni.image}`}
                    alt={uni.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-red-600">{uni.title}</h2>
                  <p className="text-sm text-gray-300">{uni.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>




      {/* Optional: Add another slider if needed */}
    </>
  );
};

export default Uni;
