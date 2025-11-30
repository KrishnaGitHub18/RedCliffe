import React from 'react';
import bg from '../assets/pngwing.com-2.png';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="w-full md:w-1/2 px-4 md:px-10 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to <span className='text-blue-600'>RedCliffe!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Your trusted partner for laboratory reagents and supplies.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={bg} className="w-full max-w-lg h-auto object-contain" alt="Background" />
      </div>
    </div>
  );
};

export default HomePage;

