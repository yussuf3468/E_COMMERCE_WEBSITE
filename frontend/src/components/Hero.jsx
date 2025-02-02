import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-gradient-to-r from-gray-100 to-gray-200 py-12 lg:py-20 px-6 lg:px-16">
      {/* Left Side */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-sm text-gray-500 uppercase font-medium tracking-wider mb-4">
          Discover Our Best Deals
        </p>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Shop the Latest <span className="text-yellow-500">Arrivals</span> Now!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Explore our newest collection of top-quality products, handpicked just for you.
        </p>
        <div className="flex justify-center lg:justify-start gap-6">
          <button className="bg-yellow-500 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105">
            Shop Now
          </button>
          <button className="bg-gray-900 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
  <img
    className="w-full lg:w-full object-cover rounded-xl shadow-lg"
    src={assets.hero_img1}
    alt="Hero"
  />
</div>

    </div>
  );
};

export default Hero;
