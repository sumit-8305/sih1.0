import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tiles from './Tiles';
import Footer from './Footer';
// import ButtonUp from './ButtonUp';
import Features from './Features';
import Bars from './Bars';
import Parallax from './Parallax';
import Grid5x2 from './Grid5x2';


const Landing = () => {
  const lines = [
    "We believe that if you improve your health, you can improve",
    "every other aspect of your life.",
    "",
    "But mainstream medicine hasn’t helped many of us do that. It",
    "ignores red flags, reacts too late, and misses the full picture.",
    "",
    "Our vision of the future is a completely different way of looking",
    "at health. A system where proactive health is the norm. Where",
    "it’s easy to slow aging and prevent disease. Where our food and",
    "environments are default healthy and toxin free. Where",
    "everyone is able to reach their peak potential.",
    "",
    "It’s time to unleash your inner Superpower."
  ];

  // Intersection observer to trigger animation when visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1, // Start animation when 10% is in view
  });

  // Variants for the animation of each line
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Delay each line by 0.3s
      },
    }),
  };

  return (
    <>
      <div
        className='relative overflow-hidden bg-[#e5e7eb]'
        style={{

          backgroundSize: 'contain',
          height: 'auto',
        }}
      >
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('bg.png')" }}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* <div className="relative z-10 flex flex-col justify-center text-center  h-full px-4 md:px-16">
            <h1 className="text-5xl md:text-6xl text-center  text-white font-semibold ">Manushi<br/></h1>
            <h2 className="text-xl md:text-2xl text-white font-semibold ">By Us, For Us</h2>
          </div> */}
        </div>

        <div className='bg-[#e5e7eb]'>
          <Features />
        </div>

        <div className='mt-48 '>
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
              Designed to enhance all aspects of your health, We care!
            </h3>
          </div>
          <div>
            <div className='mt-12 border-2 bg-[#e5e7eb]  pb-28'>

              <div className=" gap-4 p-4">
                {/* <Grid5x2 /> */}
                <div className='mt-52 pt-8 pd-28 border-2 bg-[#e5e7eb]'>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-12">

                    <div className=" flex justify-center bg-gray-200 p-4 rounded shadow border-t-2 border-b-2">
                      <svg
                        className='mt-4 mr-8'
                        width="20"
                        viewBox="0 0 530.91 530.91"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M73.762,530.91h383.381c19.076,0,34.541-15.465,34.541-34.541V216.611c0-19.076-15.465-34.542-34.541-34.542h-6.634
			C448.856,81.402,366.506,0,265.452,0C164.399,0,82.048,81.402,80.402,182.07h-6.634c-19.076,0-34.541,15.465-34.541,34.542
			v279.764C39.227,515.445,54.686,530.91,73.762,530.91z M299.008,358.32v83.85c0,16.896-13.702,30.6-30.6,30.6h-5.918
			c-16.897,0-30.6-13.703-30.6-30.6v-83.85c-17.962-11.219-29.958-31.107-29.958-53.85c0-35.074,28.434-63.514,63.513-63.514
			s63.513,28.434,63.513,63.514C328.966,327.213,316.971,347.102,299.008,358.32z M265.452,73.44
			c60.551,0,109.891,48.464,111.537,108.63H153.915C155.562,121.911,204.901,73.44,265.452,73.44z" />
                      </svg>
                      <div>
                        <h1 className=' text-2xl'>Safe</h1>
                        <p className=' text-md'>Using latest Encryption technique to Secure data. </p>
                      </div>
                    </div>
                    <div className=" flex justify-center bg-gray-200 p-4 rounded shadow border-t-2 border-b-2">
                      <svg
                        className='mt-4 mr-8'
                        width="20"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"

                      >
                        <path d="M36.8,11.1A2.8,2.8,0,0,0,34.5,10H32V8a2.9,2.9,0,0,0-3-3H5A2.9,2.9,0,0,0,2,8V35a3,3,0,0,0,3,3H7.3a7,7,0,0,0,13.4,0h6.6a7,7,0,0,0,13.4,0H43a3,3,0,0,0,3-3V21.2ZM14,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,14,39Zm8-17H19v3a2,2,0,0,1-4,0V22H12a2,2,0,0,1,0-4h3V15a2,2,0,0,1,4,0v3h3a2,2,0,0,1,0,4ZM34,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,34,39ZM32,21V14h2l6.4,7Z" />
                      </svg>
                      <div>
                        <h1 className='text-2xl'>Reliablity</h1>
                        <p className=' text-md'>Using Real-time data , we provide accurate results.</p>
                      </div>
                    </div>
                    <div className="flex justify-center align-center bg-gray-200 p-4 rounded shadow border-t-2 border-b-2">
                      <svg
                        className='mt-4 mr-20'
                        width="20"
                        viewBox="0 0 16 16"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 14H1L1 2H3L8 7L8 2H10L16 8L10 14H8L8 9L3 14Z" />
                      </svg>
                      <div>
                        <h1 className=' text-2xl'>Quick</h1>
                        <p className=' text-md'>Using Real-time data processing to reduce delays.</p>
                      </div>
                    </div>
                    <div className="flex justify-center align-center bg-gray-200 p-4 rounded shadow border-t-2 border-b-2">
                      <svg
                        className='mt-4 mr-8'
                        width="20"
                        viewBox="0 0 48 48"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.367,26.263l1.485-1.484l-2.693-2.694l-1.484,1.486c-0.864-0.572-1.828-0.999-2.858-1.267v-2.22h-4.781   v2.22c-1.053,0.272-2.039,0.711-2.917,1.302l-1.425-1.425L3,24.873l1.449,1.449c-0.554,0.849-0.97,1.793-1.23,2.8H1v4.776h2.218   c0.267,1.031,0.694,1.998,1.267,2.862L3,38.245l2.693,2.691l1.485-1.484c0.866,0.573,1.834,1.002,2.867,1.269v2.216h4.761v-2.216   c1.01-0.26,1.957-0.678,2.808-1.231l1.544,1.543l2.693-2.691l-1.521-1.522c0.594-0.883,1.034-1.876,1.306-2.934h2.215v-4.747   h-2.215C21.371,28.103,20.943,27.131,20.367,26.263z M12.426,35.428c-2.163,0-3.917-1.754-3.917-3.917s1.754-3.917,3.917-3.917   s3.917,1.754,3.917,3.917S14.589,35.428,12.426,35.428z" fill="#241F20" />

                        <path d="M42.264,26.271V24.5h-2.876v1.771h-4.426V24.5h-2.877v1.771h-4.734v0.797v2.39v3.142v0.13v1.902v1.154   v9.028V48h2.876h6.352h0.796h6.75H47v-3.187v-9.028v-1.154v-1.902v-0.13v-3.142v-2.39v-0.797H42.264z M44.124,35.785v9.028H30.227   v-9.028H44.124z M30.227,32.599v-3.142h1.858v1.549h2.877v-1.549h4.426v1.549h2.876v-1.549h1.86v3.142H30.227z" fill="#241F20" />

                      </svg>

                      <div>
                        <h1 className='text-2xl'>Availability</h1>
                        <p className='text-md'>Providing on a wide range of devices.</p>
                      </div>
                    </div>
                    <div className="flex justify-center item-start bg-gray-200 p-4 rounded shadow border-t-2 border-b-2">
                      <svg
                        className='mt-4 mr-20'
                        width="20"
                        viewBox="0 0 64 64"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M48,34c0-0.265-0.105-0.52-0.293-0.707L47.414,33l0.293-0.293C47.895,32.52,48,32.265,48,32v-3.586l11.707-11.707
		l-1.414-1.414L52,21.586L42.414,12l6.293-6.293l-1.414-1.414L35.586,16H32c-0.265,0-0.52,0.105-0.707,0.293L31,16.586l-0.293-0.293
		l-0.379-0.379l-3.621-3.621C26.52,12.105,26.265,12,26,12h-1.586l-7.707-7.707l-1.414,1.414L17.586,8L8,17.586l-2.293-2.293
		l-1.414,1.414L12,24.414V30c0,0.265,0.105,0.52,0.293,0.707L15,33.414v3.172L4.293,47.293l1.414,1.414L11,43.414L20.586,53
		l-5.293,5.293l1.414,1.414L27.414,49H31c0.265,0,0.52-0.105,0.707-0.293L32.414,48h3.172l11.707,11.707l1.414-1.414L42.414,52
		L52,42.414l6.293,6.293l1.414-1.414L48,35.586V34z M41,13.414L50.586,23L47,26.586L37.414,17L41,13.414z M35.586,18L46,28.414
		v3.172L32.414,18H35.586z M46,34.414v1.172L35.586,46h-3.172L27,40.586v-1.172l1.293,1.293l1.414-1.414L18.328,27.914
		C18.117,27.702,18,27.421,18,27.121C18,26.503,18.503,26,19.121,26c0.3,0,0.581,0.117,0.793,0.328l7.379,7.379l1.414-1.414
		l-7.379-7.379C21.117,24.702,21,24.421,21,24.121C21,23.503,21.503,23,22.121,23c0.3,0,0.581,0.117,0.793,0.328l7.379,7.379
		l1.414-1.414l-7.379-7.379C24.117,21.702,24,21.421,24,21.121C24,20.503,24.503,20,25.121,20c0.3,0,0.581,0.117,0.793,0.328
		l7.379,7.379l1.414-1.414l-7.379-7.379C27.117,18.702,27,18.421,27,18.121C27,17.503,27.503,17,28.121,17
		c0.3,0,0.581,0.117,0.793,0.328l0.379,0.379L46,34.414z M19,9.414L22.586,13L13,22.586L9.414,19L19,9.414z M14,24.414L24.414,14
		h1.172l1.272,1.272c-1.06,0.472-1.804,1.516-1.847,2.739c-1.632,0.058-2.942,1.368-3,3c-1.632,0.058-2.942,1.368-3,3
		C17.342,24.07,16,25.438,16,27.121c0,0.834,0.325,1.618,0.914,2.207L17.586,30L16,31.586l-2-2V24.414z M22,51.586L12.414,42
		L16,38.414L25.586,48L22,51.586z M27.414,47L17,36.586v-3.172l2-2l6,6V41c0,0.265,0.105,0.52,0.293,0.707L30.586,47H27.414z
		 M41,50.586L37.414,47L47,37.414L50.586,41L41,50.586z"/>
                      </svg>
                      <div>
                        <h1 className='text-2xl'>Partners</h1>
                        <p className='text-md'>Collaborating with city-wide hospitals.</p>
                      </div>
                    </div>
                    <div className="flex justify-center align-center bg-gray-200 p-4 rounded shadow border-t-2 border-b-2">
                      <svg
                        className='mt-4 mr-20'
                        width="20"
                        viewBox="0 0 493.656 493.656"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M79.648,243.104L59.544,263.2l45.256,45.256l20.096-20.104c8.576,4.872,17.648,8.648,27.104,11.264V328h64v-28.384
				c9.456-2.616,18.52-6.392,27.104-11.264l20.096,20.104l45.256-45.256l-20.104-20.096c4.872-8.576,8.648-17.648,11.264-27.104H328
				v-64h-28.384c-2.616-9.456-6.392-18.52-11.264-27.104l20.104-20.096L263.2,59.544l-20.096,20.104
				C234.52,74.776,225.456,71,216,68.384V40h-64v28.384c-9.456,2.616-18.52,6.392-27.104,11.264L104.8,59.544L59.544,104.8
				l20.104,20.096C74.776,133.48,71,142.544,68.384,152H40v64h28.384C71,225.456,74.776,234.52,79.648,243.104z M56,168h25.08
				l1.376-6.288c2.624-11.968,7.336-23.312,14.016-33.72l3.48-5.424L82.176,104.8l22.632-22.632l17.768,17.776l5.424-3.48
				c10.408-6.68,21.752-11.392,33.72-14.016L168,81.08V56h32v25.08l6.288,1.376c11.968,2.624,23.312,7.336,33.72,14.016l5.424,3.48
				L263.2,82.176l22.632,22.632l-17.776,17.768l3.48,5.424c6.68,10.408,11.392,21.752,14.016,33.72l1.368,6.28H312v32h-25.08
				l-1.376,6.288c-2.624,11.968-7.336,23.312-14.016,33.72l-3.48,5.424l17.776,17.768l-22.632,22.632l-17.768-17.776l-5.424,3.48
				c-10.408,6.68-21.752,11.392-33.72,14.016L200,286.92V312h-32v-25.08l-6.288-1.376c-11.968-2.624-23.312-7.336-33.72-14.016
				l-5.424-3.48L104.8,285.824l-22.632-22.632l17.776-17.768L96.464,240c-6.68-10.408-11.392-21.752-14.016-33.72L81.08,200H56V168z
				"/>
                        <path d="M184,272c48.52,0,88-39.48,88-88s-39.48-88-88-88s-88,39.48-88,88S135.48,272,184,272z M224,243.824
				C212.552,251.504,198.792,256,184,256s-28.552-4.496-40-12.176V232c0-13.232,10.768-24,24-24h32c13.232,0,24,10.768,24,24
				V243.824z M208,152c0,13.232-10.768,24-24,24s-24-10.768-24-24s10.768-24,24-24S208,138.768,208,152z M181.944,112.052
				C160.84,113.126,144,130.633,144,152c0,22.056,17.944,40,40,40c22.056,0,40-17.944,40-40c0-21.367-16.84-38.874-37.944-39.948
				C224.81,113.147,256,144.985,256,184c0,17.248-6.104,33.088-16.256,45.496C238.424,208.624,221.2,192,200,192h-16h-16
				c-21.2,0-38.424,16.624-39.744,37.496C118.104,217.088,112,201.248,112,184C112,144.985,143.19,113.147,181.944,112.052z"/>
                        <path d="M91.312,416l-48-48L80,331.312L108.688,360h150.624L360,259.312V108.688L331.312,80L368,43.312l48,48v224l66.344,66.344
				l11.312-11.312L432,308.688v-224L347.312,0h-14.624L288,44.688v14.624l56,56v137.376L252.688,344H115.312l-56-56H44.688
				L0,332.688v14.624L84.688,432h224l61.656,61.656l11.312-11.312L315.312,416H91.312z M304,52.688v-1.376L339.312,16h1.376l16,16
				L320,68.688L304,52.688z M16,340.688v-1.376L51.312,304h1.376l16,16L32,356.688L16,340.688z"/>
                        <path d="M383.6,336c-26.248,0-47.6,21.352-47.6,47.6c0,12.712,4.952,24.664,13.944,33.656l76.4,76.4l11.312-11.312l-76.4-76.4
				C355.288,399.976,352,392.04,352,383.6c0-17.424,14.176-31.6,31.6-31.6c8.44,0,16.376,3.288,22.344,9.256l76.4,76.4
				l11.312-11.312l-76.4-76.4C408.264,340.952,396.312,336,383.6,336z"/>
                      </svg>
                      <div>
                        <h1 className=' text-2xl'>Management System</h1>
                        <p className=' text-md'>Assisting hospitals to manage their Inventory.</p>
                      </div>
                    </div>


                  </div>
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


      </div>

      <Tiles />

      <div className='mt-52'>
        <div className='flex justify-center text-center'>
          <h1 className='text-6xl '>For people who want more</h1>
        </div>
        <div className='flex justify-center text-center mt-44 mb-36'>
          <motion.h1
            className='text-xl'
            ref={ref} // To track when this section comes into view
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className='block' // Keep lines in block style
              >
                {line === "" ? <br /> : line} {/* Add <br/> for empty lines */}
              </motion.div>
            ))}
          </motion.h1>
        </div>
      </div>




      {/* category */}
      {/* <div className='m-8 flex flex-col md:flex-row justify-center md:gap-8 gap-4 text-black font-medium items-center ' style={{ marginTop: "150px" }}>
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

      
      <ButtonUp /> */}
      {/* About */}
      {/* <div className='bg-[#e5e7eb] text-black mt-24 mb-25 p-5'>
        <h1 className='text-4xl font-bold m-5 text-center md:text-left'>About</h1>

        <p className='m-5 text-lg md:text-xl leading-relaxed'>
          Welcome to Find Your Hospital, your go-to platform for reliable and up-to-date healthcare information. We are committed to bridging the gap between patients and essential healthcare services, ensuring that you have access to critical resources when you need them the most. At Find Your Hospital, our mission is to empower individuals with the information they need to make informed healthcare decisions. Whether you're searching for available hospital beds, nearby medicine dispensaries, or the closest medical facilities, our platform is designed to provide you with accurate and timely data.
        </p>
      </div> */}

      <section>
        <video autoPlay loop playsInline muted>
          <source src="Videos/Video.mp4" type='video/mp4' />
        </video>
      </section>
      <Footer />
    </>
  )
}

export default Landing;