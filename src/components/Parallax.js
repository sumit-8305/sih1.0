import React from 'react'
import "../components/css/Parallax.css"
import ParaImg from '../assets/logos/image1.png';

document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 500;
        const y = (window.innerHeight - event.pageY * position) / 500;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
const Parallax = () => {
    return (
        <div className='flex justify-center mt-20'>
            <div className='parallax-wrap relative flex justify-center items-center'>
                <span value="-15" className='top-10 left-10 z-10 '><img src={ParaImg} /></span>
                <span value="5" className='top-16 right-16 z-10 rotate-12'><img src={ParaImg} /></span>
                <span value="30" className='top-32 right-92 z-10'><img src={ParaImg} /></span>
                <span value="-5" className='top-1 left-10 z-10 rotate-45'><img src={ParaImg} /></span>
                <span value="-8" className='bottom-10 right-56 z-10'><img src={ParaImg} /></span>
                <span value="12" className='top-52 right-96 z-10'><img src={ParaImg} /></span>
                <div className='left-50 z-20 mr-40'>
                    <h2 className='heading flex justify-center text-center align-center text-5xl '>Revolutionizing<br/>Healthcare</h2>
                    <h2 className='heading flex justify-center text-center align-center !text-base mt-2'>Healthcare transformed with cutting-edge technology for unparalleled results and outcomes.</h2>
                </div>
            </div>
        </div>
    )
}

export default Parallax;
