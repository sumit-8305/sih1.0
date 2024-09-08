import React from 'react';
import { motion } from "framer-motion";


const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function aboutUs() {
  return (
    <>
    <motion.div 
      variants = {fadeIn}
      initial="initial"
      whileInView = "animate"
      viewport = {{
        once: true,
      }}
    className='mt-28 mb-5'>
      <div>
        <h1 className='mt-32 text-xl text-center' id='Manushiinnovations'><u>Manushi Innovations</u></h1>
        <h1 className=' ml-10 text-8xl font-semibold text-center pt-10'>About Us</h1>
        <div className='mt-12 xs:ml-2 xs:mr-2 sm:ml-10 sm:mr-10 md:ml-36 md:mr-36 xl:ml-96 xl:mr-96 pb-10 pt-4 w-auto text-xl text-center'>
          <p>Welcome to Manushi, your trusted platform for reliable, up-to-date healthcare information tailored to your needs. In today's fast-paced world, navigating the healthcare system can be challenging, especially during critical moments when time is of the essence. We are here to bridge the gap between patients and essential healthcare services, ensuring you have quick and easy access to the resources that matter. </p>
          <br></br>
          <p>We understand that healthcare is not just about finding the right place—it's about finding it at the right time. That's why our platform is continuously updated with accurate and real-time data, giving you peace of mind when you need it most. We are committed to providing a user-friendly experience, ensuring that even in the most stressful situations, you can quickly find the information you need.</p>
        </div>
      </div>

      <div className='bg-[#FC5F2B] text-white'>
        <h1 className='mt-32 ml-10 text-8xl font-semibold text-center pt-10'>Our Mission</h1>
        <hr></hr>
        <div className='mt-12 xs:ml-2 xs:mr-2 sm:ml-10 sm:mr-10 md:ml-36 md:mr-36 xl:ml-96 xl:mr-96 pb-10 pt-4 w-auto text-xl text-center'>
          <p>At Manushi, our mission is to enhance healthcare accessibility by leveraging technology to streamline hospital management and patient services. We aim to provide hospitals with cutting-edge tools that facilitate real-time monitoring of bed availability, OPD bookings, and nearby dispensary services, ensuring that patients receive timely care. By optimizing hospital operations and making vital data easily accessible, we seek to bridge the gap between medical facilities and the people who need them the most. </p>
          <br></br>
          <p>We believe that healthcare should be transparent, efficient, and easily accessible for all. Manushi is committed to empowering hospitals with the tools they need to deliver quality care and enabling patients to make informed decisions about their health. Through innovation and collaboration, we are determined to transform the healthcare landscape into one that is patient-centric, equitable, and humane.</p>
        </div>
      </div>

      <div>
        <h1 className='mt-32 ml-10 text-8xl font-semibold text-center pt-4'>Our Vision</h1>
        <div className='mt-12 xs:ml-2 xs:mr-2 sm:ml-10 sm:mr-10 md:ml-36 md:mr-36 xl:ml-96 xl:mr-96 pb-10 pt-4 w-auto text-xl text-center'>
          <p>At Manushi, our vision is to become a global leader in healthcare technology by creating solutions that simplify the patient experience and optimize hospital workflows. We envision a future where healthcare is driven by technology that enables hospitals to operate more efficiently, reduces patient wait times, and provides instant access to critical services. We aspire to create a seamless connection between patients and healthcare providers, where resources are utilized effectively and care is delivered when it’s needed the most.</p>
          <br></br>
          <p>We are working toward a future where no one is left waiting for medical attention due to inefficiencies or lack of information. Our goal is to create a healthcare ecosystem that prioritizes accessibility, quality, and care for every individual, regardless of their location or circumstances. With technology at the forefront, we aim to redefine what it means to deliver healthcare in the 21st century.</p>
        </div>
      </div>
    </motion.div>
    </>

  );
}

export default aboutUs;
