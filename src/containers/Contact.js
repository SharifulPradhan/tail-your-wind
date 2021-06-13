import React from 'react';

const Contact = () => {
  return (
    <section className='flex justify-center bg-gray-500 p-5'>
      <form class="desktop:w-2/5 mobile:w-full">
        <div class="flex items-center border-b border-yellow-500 py-2">
          <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="exampl@company.com" aria-label="Email" />
          <button class="flex-shrink-0 bg-green-500 hover:bg-yellow-400 border-yellow-400 hover:border-green-700 text-sm border-4 text-white hover:text-green-700 py-1 px-2 rounded" type="button">
            Sign Up
          </button>
          <button class="flex-shrink-0 border-transparent border-4 text-green-500 hover:text-yellow-500 text-sm py-1 px-2 rounded" type="button">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;