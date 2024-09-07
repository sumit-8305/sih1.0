import React, { useState } from 'react';
import Card from './Card';

const Features = () => {
  const [activeSection, setActiveSection] = useState(1);

  const renderContent = () => {
    switch (activeSection) {
      case 1:
        return <p className='text-[#18181b]'>This is the content for Section 1.</p>;
      case 2:
        return <p className='text-[#18181b]'>This is the content for Section 2.</p>;
      case 3:
        return <p className='text-[#18181b]'>This is the content for Section 3.</p>;
      case 4:
        return <p className='text-[#18181b]'>This is the content for Section 4.</p>;
      case 5:
        return <p className='text-[#18181b]'>This is the content for Section 5.</p>;
      default:
        return null;
    }
  };

  return (
    <div className='mt-48 bg-[#e5e7eb]'>
      <div>
        <h1 className='text-4xl flex justify-center'>
          The most complete picture of your health you’ve ever had
        </h1>
      <Card />
      </div>
      <div className="container mx-auto p-4 bg-[#e5e7eb] ">
        <div className="flex justify-center gap-0">
          <button
            className={`p-2 rounded-lg ${activeSection === 1 ? ' bg-[#ff5e7e]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(1)}
          >
            Section 1
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 2 ? 'bg-[#fc5f2b]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(2)}
          >
            Section 2
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 3 ? 'bg-[#11c182]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(3)}
          >
            Section 3
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 4 ? 'bg-[#f7861e]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(4)}
          >
            Section 4
          </button>
          <button
            className={`p-2 rounded-lg ${activeSection === 5 ? 'bg-[#3f3f46]' : 'bg-gray-200'} transition-all duration-500`}
            onClick={() => setActiveSection(5)}
          >
            Section 5
          </button>
        </div>

        <div className="content flex justify-center p-4 rounded-lg ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Features;