import React from 'react';

const HeroSection = () => {
  return (
    <div style={{ height: "550px" }} className='bg-gray-400 flex flex-col justify-center items-center container-sm'>
      <div className="w-3/5">
        <h1 className="text-4xl">The new standard in wealth management </h1>
        <p className="font-mono mt-4">We deliver independent advice and thoughtfully designed wealth management solutions, free from the conflicts at many financial institutions. Our senior investment and planning professionals take the time to get to know you – to know your family, your business and your other interests – and to invest and plan for your future, on your terms</p>
        <button class="flex-shrink-0 bg-green-500 hover:bg-yellow-400 border-yellow-400 hover:border-green-700 text-sm border-4 text-white hover:text-green-700 py-1 px-2 rounded" type="button">
          Explore About Us More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;