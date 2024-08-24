import React from 'react';
import '../css/Documentation.css';

function Introduction() {
  return (
    <div className="documentation-container" id="intro">
      <div className="content">
        <div className="doc-page">
          <h1 style={{fontSize:"35px"}}>Introduction</h1>
          <p>
            Welcome to the Manushi API Documentation. This documentation provides all the details needed to interact with the API efficiently.
          </p>
          <div style={{display:'flex', flexDirection:"row"}}>
          <p><a href='/' target=' ' style={{fontWeight: "bold"}}>मानुषी/Manushi</a> is a web-based platform designed to provide real-time information on outpatient department (OPD) bed availability and Queuing Facility across multiple hospitals. Here’s a detailed explanation of how Manushi works: </p>
          </div>
          <br />
          <h2 style={{fontSize:"25px", color:'#005792'}}>Key Features and Functions of Manushi</h2>
          <ol>
            <li style={{fontWeight:"bold"}}>1. Real-Time Bed Availability:</li>
              <p style={{textIndent: "20px"}}>Manushi displays current OPD bed availability for various hospitals. This helps patients and hospital staff quickly determine available resources.</p>
            <li style={{fontWeight:"bold"}}>2. Hospital Maintainers:</li>
              <p style={{textIndent: "20px"}}>Each hospital has a designated maintainer who is responsible for updating the bed availability information. Maintainers are given access to their specific hospital’s data through a secure login system.</p>
            <li style={{fontWeight:"bold"}}>3. Unique Hospital IDs:</li>
              <p style={{textIndent: "20px"}}>Each hospital is assigned a unique ID. This ID is used by maintainers to log in to the system and update their hospital’s bed availability information.</p>
            <li style={{fontWeight:"bold"}}>4. Access Control:</li>
              <p style={{textIndent: "20px"}}>Maintainers can only access and update information related to their own hospital. This ensures data security and integrity, preventing unauthorized access to other hospitals' data.</p>
            <li style={{fontWeight:"bold"}}>5. Credential Management:</li>
              <p style={{textIndent: "20px"}}>Login credentials for maintainers are stored securely on the server. New hospitals can register and will receive credentials managed by the Manushi system.</p>
            <li style={{fontWeight:"bold"}}>6. API for Real-Time Data:</li>
              <p style={{textIndent: "20px"}}>Manushi provides an API that other hospitals can use to integrate real-time bed availability data into their own websites. This allows hospitals to display up-to-date information on their own platforms.</p>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
