import React, { useState } from 'react';
import Card from './Card';

const Features = () => {
  const [activeSection, setActiveSection] = useState(1);

  const renderContent = () => {
    switch (activeSection) {
      case 1:
        return <p className='text-2xl font-semibold  text-[#7f7f7f] justify-center text-center '>Combining whole-city wide leading Hospitals and <br/> delievering services at critical moments.</p>;
      case 2:
        return <p className='text-2xl font-semibold  text-[#7f7f7f] justify-center text-center '> Offering Realtime bed status , Inventory Management <br/>  OCD Queuing and much more .</p>;
      case 3:
        return <p className='text-2xl font-semibold  text-[#7f7f7f] justify-center text-center '> It enhances coordination among hospitals,<br/> reducing mortality rates.</p>;
      case 4:
        return <p className='text-2xl font-semibold  text-[#7f7f7f] justify-center text-center '>Fetching data directly from hospitals and <br/> delivering it to those in need.</p>;
      case 5:
        return <p className='text-2xl font-semibold  text-[#7f7f7f] justify-center text-center '>Collaborating with Top hospitals and helping them <br/> to enhance patient care.</p>;
      default:
        return null;
    }
  };

  return (
    <div className='mt-48 bg-[#e5e7eb]'>
      <div>
        <h1 className='text-4xl flex justify-center text-center' >
          The most complete picture of your health you’ve ever had
        </h1>
      <Card />
      </div>
      <div className="container mx-auto p-4 bg-[#e5e7eb] ">
        <div className="flex justify-center gap-0">
          <button
            className={` font-semibold p-2 rounded-lg ${activeSection === 1 ? ' bg-[#ff5e7e]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(1)}
          >
            🏠︎ About
          </button>
          <button
            className={`font-semibold p-2 rounded-lg ${activeSection === 2 ? 'bg-[#fc5f2b]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(2)}
          >
            ❖ Services
          </button>
          <button
            className={` font-semibold p-2 rounded-lg ${activeSection === 3 ? 'bg-[#11c182]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(3)}
          >
            ☑ Action Plan
          </button>
          <button
            className={` font-semibold p-2 rounded-lg ${activeSection === 4 ? 'bg-[#f7861e]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(4)}
          >
            📊 Data
          </button>
          <button
            className={` font-semibold p-2 rounded-lg ${activeSection === 5 ? 'bg-[#3f3f46]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(5)}
          >
            🏥 Hospitals
          </button>
        </div>

        <div className="content flex justify-center p-4 rounded-lg ">
          {renderContent()}
        </div>
      </div>  <section>

  </section>
    </div>
  );
};

export default Features;