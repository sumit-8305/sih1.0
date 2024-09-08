import React from "react";
import styled from "styled-components";

const Bars = () => {
    return (
        <StyledWrapper>
            <div className="outdiv1 transition-all duration-500 ">
                <h3 className='heading1 text-3xl flex justify-center text-center mt-36'>Admin Login</h3>
                <h3 className=' heading1 text-sm flex justify-center text-center mt-2'>Access your personalized dashboard and manage hospital operations seamlessly with a secure login.</h3>
                <div className="flex justify-center">
                  <img src="/images/firstbox.jpg" className="mt-16 rounded-3xl">
                  </img>
                </div>
            </div>
            <div className="outdiv2 transition-all duration-500">
                <h3 className='heading1 text-3xl flex justify-center text-center mt-36'>Effortless OPD Bed Request</h3>
                <h3 className=' heading1 text-sm flex justify-center text-center mt-2'>Submit a request for an OPD bed seamlessly to facilitate a streamlined and efficient admission process for your medical care.</h3>
                <div className="flex justify-center">
                  <img src="/images/secondbox.jpg" className="mt-16 rounded-3xl"></img>
                </div>
            </div>
            <div className="outdiv3 transition-all duration-500 ">
                <h3 className='heading1 text-3xl flex justify-center text-center mt-36'>Streamlined Medicine Inventory Management</h3>
                <h3 className=' heading1 text-sm flex justify-center text-center mt-2'>Administer medicine inventory with precision, ensuring accurate stock levels and efficient restocking to support uninterrupted operations.</h3>
                <div className="flex justify-center">
                  <img src="/images/thirdbox.jpg" className="mt-16 rounded-3xl"></img>    
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .card {
  width: 400px;
  height:200px;
  border-radius: 20px;
  background: #1b233d;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
  .outdiv1{
  width:auto;
  height:auto;
  disply:flex;
}
.outdiv1:hover , .outdiv:active {
  transform: scale(1.15);
}
  .outdiv2{
  width:auto;
  height:auto;
  disply:flex;
}
.outdiv2:hover , .outdiv:active {
  transform: scale(1.15);
}
  .outdiv3{
  width:auto;
  height:auto;
  disply:flex;
}
.outdiv3:hover , .outdiv:active {
  transform: scale(1.15);
}
  .outdiv4{
  width:auto;
  height:auto;
  disply:flex;
}
.outdiv4:hover , .outdiv:active {
  transform: scale(1.15);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
  position: relative;
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #1b233d;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #1b233d;
}

.card .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  background: rgba(255, 255, 255, 0);
  border-top-left-radius: 10px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0);
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section .icons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.card .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}

.card .top-section .icons .social-media {
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;
}

.card .top-section .icons .social-media .svg {
  height: 100%;
  fill: #1b233d;
}

.card .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: rgba(170, 222, 243, 0.721);
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}
`;

export default Bars;
