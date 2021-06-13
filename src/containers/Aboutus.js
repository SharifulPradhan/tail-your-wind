import React from 'react';
import aboutusImage from '../about-us.png';

const Aboutus = () => {
  return (
    <section className='bg-gray-100 flex flex-col justify-center items-center mt-9'>
      <div className='w-3/5 flex justify-center items-center mobile:flex-col desktop:flex-row mt-5'>
        <div>
          <h1 className='desktop:text-5xl mobile:text-2xl'>About Tail your Wind</h1>
          <p className='text-lg mt-5'>We help organizations across the private, public, and social sectors create the Change that Matters most to them.</p>
          <p className='text-lg mt-5'>From the C-suite to the front line, we partner with our clients to transform their organizations, embed technology into everything they do, and build enduring capabilities.</p>
          <p className='text-lg mt-5'>With exceptional people in 65 countries, we combine global expertise and local insight to help you turn your ambitious goals into reality.</p>
        </div>
        <div className="mobile:mt-7 desktop:mt-0">
          <img src={aboutusImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;