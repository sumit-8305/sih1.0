import React from 'react';
import Tiles from './Tiles';
import Footer from './Footer';
import ButtonUp from './ButtonUp';
import Features from './Features';
import Bars from './Bars';
import Parallax from './Parallax';

const Landing = () => {
  return (
    <>
      <div
        className='relative overflow-hidden bg-[#e5e7eb]'
        style={{

          backgroundSize: 'contain',
          height: 'auto',
        }}
      ><div className='flex md:flex-row flex-col gap-52'>
          <div>
            <h1 className='mt-32 md:mt-96 md:ml-28 ml-2 text-8xl text-gray-900 font-semibold'>Manushi</h1>
            <h1 className='mt-22 md:mt-0  float-right ml-2 font-semibold text-gray-900 text-3xl'>By Us, For Us</h1>
          </div>
          {/* <img className='mt-48 mr-32 md:scale-150 scale-100 rounded-full border-b-2 border-gray-900' src="/images/group_doctors-removebg-preview.jpg"></img> */}
        </div>

        <div className='bg-[#e5e7eb]'>
          <Features />
        </div>

        <div className='mt-48'>
          <h3 className='text-2xl flex justify-center'>How it works</h3>
          <h3 className='text-6xl flex justify-center text-center mt-2'>An all-in-one health<br /> membership, for people<br /> who want more</h3>
          <Bars />
        </div>

        <div >
          <Parallax />
        </div>

        <div className='mt-44'>
          <div className='flex justify-center text-center'>
            <h2 className='inline text-6xl mt-2'>
              Finally, healthcare that <br />looks at the whole you
            </h2>
          </div>
          <div className='flex justify-center'>
            <h3 className=' inline text-base mt-2'>
              Personalized programs to improve every aspect of your health.
            </h3>
          </div>
          <div>
            <div className='mt-12 border-2 bg-[#e5e7eb] mt-72 pb-28'>
              
              <div className="grid md:grid-cols-5 grid-cols-2 gap-4 p-4">

                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <h1 className=' text-2xl'>Arielle Zuckerberg</h1>
                  <p className=' text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
                </div>
                

              </div>
            </div>
          </div>
        </div>

      </div>

      

      {/* new section */}
      <div className='mt-56'>
        <div className='flex justify-center text-center'>
          <h1 className='text-6xl'>
            Backed by the best
          </h1>
        </div>
        <div className='flex justify-center text-center mt-4'>
          <h1 className='text-base'>
            Supported by the world's top longevity doctors,<br />scientists, and technologists.
          </h1>
        </div>

        <div className='mt-52 pt-8 pd-28 border-2 bg-[#e5e7eb]'>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-12">

            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h1 className='ml-20 text-2xl'>Arielle Zuckerberg</h1>
              <p className='ml-20 text-sm'>Partner at Long Journey Ventures, formerly Coatue</p>
            </div>

          </div>
        </div>
      </div>


      {/* category */}
      <div className='m-8 flex flex-col md:flex-row justify-center md:gap-8 gap-4 text-black font-medium items-center ' style={{ marginTop: "150px" }}>
        <button className='w-full md:w-1/4 px-4 py-3 rounded-full text-xl text-center border-2 border-black transform hover:scale-110 duration-200 ease-in-out' style={{ background: '#47E28E' }}>
          General
        </button>

        <button className='w-full md:w-1/4 px-4 py-3 rounded-full text-xl text-center border-2 border-black transform hover:scale-110 duration-200 ease-in-out' style={{ background: '#FFD600' }}>
          OPD
        </button>

        <button className='w-full md:w-1/4 px-4 py-3 rounded-full text-xl text-center border-2 border-black transform hover:scale-110 duration-200 ease-in-out' style={{ background: '#FF00008F' }}>
          Emergency
        </button>
      </div>

      <Tiles />
      <ButtonUp />
      {/* About */}
      <div className='bg-[#e5e7eb] text-black mt-24 mb-25 p-5'>
        <h1 className='text-4xl font-bold m-5 text-center md:text-left'>About</h1>

        <p className='m-5 text-lg md:text-xl leading-relaxed'>
          Welcome to Find Your Hospital, your go-to platform for reliable and up-to-date healthcare information. We are committed to bridging the gap between patients and essential healthcare services, ensuring that you have access to critical resources when you need them the most. At Find Your Hospital, our mission is to empower individuals with the information they need to make informed healthcare decisions. Whether you're searching for available hospital beds, nearby medicine dispensaries, or the closest medical facilities, our platform is designed to provide you with accurate and timely data.
        </p>
      </div>

      <Footer />
    </>
  )
}

export default Landing;
