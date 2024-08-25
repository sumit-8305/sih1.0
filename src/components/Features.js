import React, { useState } from 'react';

const Features = () => {
  const [activeSection, setActiveSection] = useState(1);

  const renderContent = () => {
    switch (activeSection) {
      case 1:
        return <p>This is the content for Section 1.</p>;
      case 2:
        return <p>This is the content for Section 2.</p>;
      case 3:
        return <p>This is the content for Section 3.</p>;
      case 4:
        return <p>This is the content for Section 4.</p>;
      case 5:
        return <p>This is the content for Section 5.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 mt-8 m-5">Sections</h1>
      <div className="flex justify-around mb-8">
        <button
          className={`p-2 rounded-lg ${activeSection === 1 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection(1)}
        >
          Section 1
        </button>
        <button
          className={`p-2 rounded-lg ${activeSection === 2 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection(2)}
        >
          Section 2
        </button>
        <button
          className={`p-2 rounded-lg ${activeSection === 3 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection(3)}
        >
          Section 3
        </button>
        <button
          className={`p-2 rounded-lg ${activeSection === 4 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection(4)}
        >
          Section 4
        </button>
        <button
          className={`p-2 rounded-lg ${activeSection === 5 ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSection(5)}
        >
          Section 5
        </button>
      </div>

      <div className="content bg-gray-100 p-4 rounded-lg shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default Features;