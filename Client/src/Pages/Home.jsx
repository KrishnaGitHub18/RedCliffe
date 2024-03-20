import React from 'react';
import bg from '../assets/pngwing.com-2.png';

const HomePage = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-1/2 px-10">
        <h1 className="text-4xl font-bold text-center relative w-[max-content]
          before:absolute before:inset-0 before:bg-white
          before:animate-typewriter">Welcome to <span className='text-[#0000ff]'>RedCliffe!</span></h1>
      </div>
      <div className="w-1/2">
        <img src={bg} className="w-full" alt="Background" />
      </div>
    </div>
  );
};

export default HomePage;

