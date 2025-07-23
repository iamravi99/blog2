import React, { useEffect ,useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import axios from 'axios';



const Superhero = () => {
const [shop,setshop]= useState([])
useEffect (()=>{
const getshop= async()=>{
  try {
   const res=  await axios.get("http://localhost:3000/shop")
   console.log(res.data)
   setshop(res.data)
  } catch (error) {
    console.log(error)
  }
}

getshop();

}
,[]


)






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
          Marvel’s Legendary Superheroes
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          From battles on Earth to wars in space, meet the iconic Avengers who rise above all odds to defend humanity.
          <span className="text-yellow-400 font-semibold block">
            Heroes aren't born — they're made.
          </span>
        </p>
      </div>

      {/* Slider */}
      <div className="slider-container px-6 mt-10 ">
        <Slider {...settings}>
          {shop.map((hero, index) => (
            <div key={index} className="p-4">
              <div className="card   bg-base-100 shadow-xl w-fit">
                <figure>
                  <img
  src={`/images/${hero.image}`}
  alt={hero.alias}
  className="w-full h-auto object-contain rounded-t-xl"
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


      {/* second slider  */}
      <div className="slider-container px-6 mt-10 ">
        <Slider {...settings}>
          {shop.map((hero, index) => (
            <div key={index} className="p-4">
              <div className="card   bg-base-100 shadow-xl w-fit">
                <figure>
                  <img
  src={`/images/${hero.image}`}
  alt={hero.alias}
  className="w-full h-auto object-contain rounded-t-xl"
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
    </>
  );
};

export default Superhero;
