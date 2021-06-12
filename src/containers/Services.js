import React from 'react';
import ServicesCard from './ServicesCard'

const Services = () => {
  const services = [{
    id: 1,
    icon: '',
    title: 'Home Loan',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt aliqua.'
  }, {
    id: 2,
    icon: '',
    title: 'Financial Consulting',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt aliqua.'
  }, {
    id: 3,
    icon: '',
    title: 'Expert Advisor',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt aliqua.'
  }]
  return (
    <div className="flex flex-wrap justify-center items-center">
      {
        services.map(service => <ServicesCard service={service} key={service.id}></ServicesCard>)
      }
    </div>
  );
};

export default Services;