import React from 'react';
import '../components/css/ButtonUp.css';
import logo1 from  '../assets/logos/mission.png';
import  logo2 from '../assets/logos/vision.png';
import logo3 from'../assets/logos/purpose.png';

const ButtonUp = () => {
  return (
    <div className="p-4 mt-20">
      <div className="flex flex-col md:flex-row md:space-x-4 md:justify-between">
        <div className="card card1 group relative flex items-center justify-center w-full md:w-1/3 h-[320px]  text-2xl font-bold rounded-lg cursor-pointer">
          <img className="title z-10 group-hover:opacity-0 transition-opacity duration-300" src={logo3}/>
          <div className="absolute inset-0 flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="description">
              We are a knowledge delivery platform consisting of a central pool of professionals, shared across hospitals to provide best-in-industry practices, a wide network of associates & proprietary technology.
            </p>
          </div>
        </div>

        <div className="card card2 group relative flex items-center justify-center w-full md:w-1/3 h-[320px]  text-2xl font-bold rounded-lg cursor-pointer">
        <img className="title z-10 group-hover:opacity-0 transition-opacity duration-300" src={logo2}/>
          <div className="absolute inset-0 flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="description">
              Our vision is to create a “trusted” network of high-quality neighborhood hospitals transforming healthcare delivery in India.
            </p>
          </div>
        </div>

        <div className="card card3 group relative flex items-center justify-center w-full md:w-1/3 h-[320px]  text-2xl font-bold rounded-lg cursor-pointer">
        <img className="title z-10 group-hover:opacity-0 transition-opacity duration-300 " src={logo1}/>
          <div className="absolute inset-0 flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="description">
              Our mission is to deliver value to all stakeholders in our ecosystem by enabling providers to offer superior patient experience and financial value creation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonUp;
