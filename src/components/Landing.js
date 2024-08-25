import React from 'react';
import Tiles from './Tiles';
import Footer from './Footer';
import ButtonUp from './ButtonUp';
import Features from './Features';

const Landing = () => {
  return (
    <>
      <div
        className='relative overflow-hidden'
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='696' viewBox='0 0 768 696' fill='none'%3E%3Cpath d='M70.4613 131C1.66127 92.2 -13.5387 -63 10.9613 -115H912.461L968.461 689C905.128 698.167 756.261 705 667.461 659C556.461 601.5 555.854 563.797 525.961 498.5C493 426.5 442.5 380.5 339 380.5C269.457 380.5 226.182 313.365 206.961 260C160.5 131 156.461 179.5 70.4613 131Z' fill='%23D1F4FC'/%3E%3C/svg%3E") no-repeat top right`,
          backgroundSize: 'contain',
          height: 'auto',
        }}
      >
        {/* category */}
        <div className='m-8 flex flex-col md:flex-row justify-center md:gap-8 gap-4 text-white items-center ' style={{marginTop:"500px"}}>
          <button className='w-full md:w-1/4 px-4 py-3 rounded-full text-lg text-center transform hover:scale-110 duration-200 ease-in-out' style={{ background: '#47E28E' }}>
            General
          </button>
          <button className='w-full md:w-1/4 px-4 py-3 rounded-full text-lg text-center transform hover:scale-110 duration-200 ease-in-out' style={{ background: '#FFD600' }}>
            OPD
          </button>
          <button className='w-full md:w-1/4 px-4 py-3 rounded-full text-lg text-center transform hover:scale-110 duration-200 ease-in-out' style={{ background: '#FF00008F' }}>
            Emergency
          </button>
        </div>

        <Tiles />
        <ButtonUp />
      </div>

      {/* About */}
      <div className='bg-[#d1f4fa] text-black mt-24 mb-25 p-5'>
        <h1 className='text-3xl font-bold m-5 text-center md:text-left'>About</h1>
        <hr className='m-6' />
        <p className='m-5 text-lg md:text-xl leading-relaxed'>
          Welcome to Find Your Hospital, your go-to platform for reliable and up-to-date healthcare information. We are committed to bridging the gap between patients and essential healthcare services, ensuring that you have access to critical resources when you need them the most. At Find Your Hospital, our mission is to empower individuals with the information they need to make informed healthcare decisions. Whether you're searching for available hospital beds, nearby medicine dispensaries, or the closest medical facilities, our platform is designed to provide you with accurate and timely data.
        </p>
        <p className='m-5 text-lg md:text-xl leading-relaxed'>
          Our platform was created by a passionate tech enthusiast currently pursuing a B.Tech in Computer Science at NSUT Delhi. With a strong background in web development and a deep commitment to leveraging technology for social good, we have developed this platform to address some of the most pressing challenges in healthcare access today.
        </p>
      </div>
      <Features />
      {/* new section */}
      <div className='mt-12 border-2'>
        <h3 className='text-center'>Manushi Benifits</h3>
        <div className="grid grid-cols-2 gap-4 p-4 ">
          <div className="bg-gray-200 p-4 rounded shadow">Item 1</div>
          <div className="bg-gray-200 p-4 rounded shadow">Item 2</div>
          <div className="bg-gray-200 p-4 rounded shadow">Item 3</div>
          <div className="bg-gray-200 p-4 rounded shadow">Item 4</div>
          <div className="bg-gray-200 p-4 rounded shadow">Item 5</div>
          <div className="bg-gray-200 p-4 rounded shadow">Item 6</div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Landing;
