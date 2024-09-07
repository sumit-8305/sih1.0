import { useState, useEffect } from 'react';
import { hospitalList } from '../assets/hospitalData';
import '../components/css/ButtonUp.css';

export default function Tiles() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex((index + 1) % hospitalList.length);
  }

  function handlePreviousClick() {
    setIndex((index - 1 + hospitalList.length) % hospitalList.length);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % hospitalList.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [hospitalList.length]);

  let hospital = hospitalList[index];

  return (
    <div className='bg-[#e5e7eb]'><h1 className=' font-bold mt-40 flex flex-col sm:flex-row justify-center sm:gap-4 gap-2 px-2 py-2 w-full  text-center sm:text-left text-lg sm:text-4xl'>
        Hospitals Registered
      </h1>
      <div className='flex flex-col items-center '>
        {/* Responsive image handling */}
        <div className='imageDesign' >
        <img
          src={hospital.imageURL}
          alt={hospital.alt}
          className='rounded-xl m-4 w-full sm:w-auto sm:h-96 h-64 object-cover'
        />
        </div>
        
        {/* Responsive text container */}
        <div className='flex flex-col sm:flex-row justify-center sm:gap-4 gap-2 px-2 py-2 w-full bg-gray-200 text-center sm:text-left text-lg sm:text-4xl sm:mt-64'>
          <h1 className='font-semibold'>{hospital.name}</h1>
          <p className='hidden sm:block'>|</p>
          <p className='font-semibold'>{hospital.location}</p>
          <p className='hidden sm:block'>|</p>
          <p className='font-semibold'>{hospital.helpline}</p>
        </div>

        {/* Navigation buttons */}
        <div className='flex justify-center gap-2 text-base sm:text-xl font-semibold mt-4'>
          <button onClick={handlePreviousClick} className='bg-gray-900 text-white rounded-md px-3 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
          </button>
          
          <h3 className='text-center'>
            ({index + 1} of {hospitalList.length})
          </h3>
          
          <button onClick={handleNextClick} className='bg-gray-900 text-white rounded-md px-3 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
