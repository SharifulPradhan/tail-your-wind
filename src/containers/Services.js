import React from 'react';
import ServicesCard from './ServicesCard'

const Services = () => {
  const services = [{
    id: 1,
    icon: '',
    title: 'Home Loan',
    descriptions: 'Looking for a low down payment or the security of a fixed rate? Compare our mortgage options and discover the best home loan to meet your needs.'
  }, {
    id: 2,
    icon: '',
    title: 'Financial Consulting',
    descriptions: 'Welcome! At The Financial Consulting Firm we offer a wide range of services dedicated to serving the unique needs of each of our clients.'
  }, {
    id: 3,
    icon: '',
    title: 'Expert Advisor',
    descriptions: 'From banking and insurance to wealth management and securities distribution, Bain has dedicated financial services teams serving'
  }]
  return (
    <section className="flex flex-wrap justify-center items-center m-7">
      {
        services.map(service => <ServicesCard service={service} key={service.id}></ServicesCard>)
      }
    </section>
  );
};

export default Services;