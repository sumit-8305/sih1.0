import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center text-center  gap-4 p-12 ">
        <div className="card ">
          <div className="card-content">
            <div className="card-top">
              <span className="card-title">01.</span>
              <p>Quick</p>
            </div>
            <div className="card-bottom">
              <p>Real-time status</p>
              <svg
                width="32"
                viewBox="0 -960 960 960"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
              </svg>
            </div>
          </div>
          <div className="card-image">
            <svg
              width="48"
              viewBox="0 0 16 16"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 14H1L1 2H3L8 7L8 2H10L16 8L10 14H8L8 9L3 14Z" />
            </svg>
          </div>
        </div>
        
        <div className="card ">
          <div className="card-content">
            <div className="card-top">
              <span className="card-title">02.</span>
              <p>Secure</p>
            </div>
            <div className="card-bottom">
              <p>Encrypted data</p>
              <svg
                width="32"
                viewBox="0 -960 960 960"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
              </svg>
            </div>
          </div>
          <div className="card-image">
            <svg
              width="45"
              viewBox="0 0 530.91 530.91"
              height="45"
              xmlns="http://www.w3.org/2000/svg" 
            >
              <path d="M73.762,530.91h383.381c19.076,0,34.541-15.465,34.541-34.541V216.611c0-19.076-15.465-34.542-34.541-34.542h-6.634
			C448.856,81.402,366.506,0,265.452,0C164.399,0,82.048,81.402,80.402,182.07h-6.634c-19.076,0-34.541,15.465-34.541,34.542
			v279.764C39.227,515.445,54.686,530.91,73.762,530.91z M299.008,358.32v83.85c0,16.896-13.702,30.6-30.6,30.6h-5.918
			c-16.897,0-30.6-13.703-30.6-30.6v-83.85c-17.962-11.219-29.958-31.107-29.958-53.85c0-35.074,28.434-63.514,63.513-63.514
			s63.513,28.434,63.513,63.514C328.966,327.213,316.971,347.102,299.008,358.32z M265.452,73.44
			c60.551,0,109.891,48.464,111.537,108.63H153.915C155.562,121.911,204.901,73.44,265.452,73.44z" />
            </svg>
          </div>
        </div>
        <div className="card ">
          <div className="card-content">
            <div className="card-top">
              <span className="card-title">03.</span>
              <p>Reliable</p>
            </div>
            <div className="card-bottom">
              <p>Selfless services</p>
              <svg
                width="32"
                viewBox="0 -960 960 960"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
              </svg>
            </div>
          </div>
          <div className="card-image">
            <svg
              width="48"
              viewBox="0 0 48 48" 
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              
            >
              <path d="M36.8,11.1A2.8,2.8,0,0,0,34.5,10H32V8a2.9,2.9,0,0,0-3-3H5A2.9,2.9,0,0,0,2,8V35a3,3,0,0,0,3,3H7.3a7,7,0,0,0,13.4,0h6.6a7,7,0,0,0,13.4,0H43a3,3,0,0,0,3-3V21.2ZM14,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,14,39Zm8-17H19v3a2,2,0,0,1-4,0V22H12a2,2,0,0,1,0-4h3V15a2,2,0,0,1,4,0v3h3a2,2,0,0,1,0,4ZM34,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,34,39ZM32,21V14h2l6.4,7Z" />
            </svg>
          </div>
        </div>
        </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  width: 320px;
  background: #fff480;
  color: black;
  position: relative;
  border-radius: 2.5em;
  padding: 2em;
  transition: transform 0.4s ease;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5em;
  height: 100%;
  transition: transform 0.4s ease;
}

.card .card-top, .card .card-bottom {
  display: flex;
  justify-content: space-between;
}

.card .card-top p, .card .card-top .card-title, .card .card-bottom p, .card .card-bottom .card-title {
  margin: 0;
}

.card .card-title {
  font-weight: bold;
}

.card .card-top p, .card .card-bottom p {
  font-weight: 600;
}

.card .card-bottom {
  align-items: flex-end;
}

.card .card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.card .card-image svg {
  width: 4em;
  height: 4em;
  transition: transform 0.4s ease;
}

.card:hover {
  cursor: pointer;
  transform: scale(0.97);
}

.card:hover .card-content {
  transform: scale(0.96);
}

.card:hover .card-image svg {
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.9);
}
`;

export default Card;