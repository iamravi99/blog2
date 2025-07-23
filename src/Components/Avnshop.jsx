import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

export const Avnshop = () => {
  const weaponData = list.filter((data) => data.category === "Weapon");
  const suitData = list.filter((data) => data.category === "Suit");
  
  

  var settings = {
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
<div>
<div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-[20px]'>
  <h1 className='text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-[20px] p-[10px]
  
  flex justify-center 
  
  '>
    Avengers Assemble
  </h1>
  <p className=' mt-[10px] text-base sm:text-lg md:text-xl text-black leading-relaxed'>
    The Avengers are Earth’s mightiest heroes, brought together to protect the planet
    from threats beyond the abilities of any single hero. From Iron Man’s tech genius
    to Captain America's unwavering courage, and Thor's godly power — they stand united
    to fight for justice and peace in the Marvel Universe.
  </p>
</div>




<div >
<div 
  className="text-3xl sm:text-4xl font-extrabold 
  bg-gradient-to-r from-blue-600 via-red-500 to-yellow-300 
  bg-clip-text text-transparent 
  mb-[20px] p-[10px] flex justify-center w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-[20px]"
>
  Power Gear of Earth’s Mightiest Heroes
</div>

<div className="slider-container">
      <Slider {...settings}>
        {weaponData.map((item)=>
        <Card item={item} key={item.id}/>
        )}
      </Slider>
    </div>
</div>

    <div 
    className="text-3xl sm:text-4xl font-extrabold 
  bg-gradient-to-r from-blue-600 via-red-500 to-yellow-300 
  bg-clip-text text-transparent 
  mb-[20px] p-[10px] flex justify-center w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-[20px]"
    
    
    >Armored Legends of the Marvel Universe</div>

    <div className="slider-container">

      <Slider {...settings}>
        {suitData.map((item)=>
        <Card item={item} key={item.id}/>
        )}
      </Slider>
    </div>

</div>


</>



    
  )
}
