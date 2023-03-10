import React from 'react';
import ContactMe from './ContactMe';

const Hero = () => {
  return (
    <div className="md:grid lg:grid-cols-2 lg:pt-16 leading-none">
      <div className="pt-16 lg:pt-32">
        <h1 className="text-4xl uppercase pl-16">Hi, I´m Vinicius Parizoto</h1>
        <h2 className="text-4xl font-bold lg:text-5xl uppercase pl-16">Frontend Developer</h2>
        <ContactMe />
      </div>
      <div></div>
    </div>
  );
};
export default Hero;
