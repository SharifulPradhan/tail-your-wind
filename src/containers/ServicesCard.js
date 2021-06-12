import React from 'react';
import { HomeIcon } from '@heroicons/react/solid'

const ServicesCard = ({ service }) => {
  const { title, descriptions } = service;
  return (
    <div className="border border-gray-500 m-5 p-5 flex flex-col justify-center items-center" style={{width:"350px"}}>
      <HomeIcon className="h-5 w-5 text-blue-500" />
      <h1 className="text-blue-700 text-2xl">{title}</h1>
      <p>{descriptions}</p>
    </div>
  );
};

export default ServicesCard;