const Authentication = () => {
  return(
    <div className="documentation-container" id='authentication'>
      <div className="content" >
        <div className="doc-page">
          <h1 style={{fontSize:"35px"}} >Authentication</h1>
          <p>
            Manushi provides a secure authentication system for accessing its features. This system is designed to ensure that only authorized personnel can manage and update bed availability information for their respective hospitals. Here’s an overview of how authentication works in Manushi:
          </p>
          <br />
          <ol>
            <li style={{fontWeight:"bold"}}>1. Overview</li>
              <p style={{textIndent: "20px"}}>Manushi's authentication system is built on a standard login and registration mechanism, ensuring that each hospital has its own set of credentials. The system uses JSON Web Tokens (JWT) for secure, stateless authentication.</p>
            <li style={{fontWeight:"bold"}}>2. Registration</li>
              <p style={{textIndent: "20px"}}><a style={{fontWeight:"bold"}}>Purpose:</a> Allows new hospitals to register and gain access to the system.</p>
                <p style={{textIndent: "20px", fontWeight:"bold"}}>Process:</p>
                  <ol style={{textIndent: "20px"}}>
                  <li>A new hospital's details, including a unique ID and credentials, are submitted through a registration endpoint.</li>
                  <li>The hospital’s information is saved in the database, including a hashed version of the password for security.</li>
                  <li>Upon successful registration, the hospital is provided with credentials for logging in.</li>
                </ol>
            <li style={{fontWeight:"bold"}}>3. Key Features of Manushi Authentication</li>
            <p style={{textIndent: "20px", fontWeight:'bold'}}>Secure Login Mechanism:</p>
            <p style={{textIndent: "20px"}}>Manushi utilizes a standard username and password-based login system. Hospitals are provided with credentials during registration. When hospital maintainers log in, their credentials are authenticated against a secure, hashed password stored on the server. This prevents unauthorized access to hospital-specific data and ensures that only authenticated users can update bed information.</p>
            <p style={{textIndent: "20px", fontWeight:'bold'}}>JSON Web Token (JWT) Based Authentication</p>
            <p style={{textIndent: "20px"}}>Manushi implements JWT-based authentication to maintain security and session management. Once a user successfully logs in, the server issues a JWT token, which is then stored on the client side (in cookies or local storage). This token is sent with each subsequent request to protected endpoints, ensuring that the user remains authenticated without repeatedly logging in.</p>
            <p style={{textIndent: "20px", fontWeight:'bold'}}>Hospital-Specific Access Control</p>
            <p style={{textIndent: "20px"}}>Each hospital is assigned a unique ID during registration. When a hospital maintainer logs in, their JWT token contains this ID, which is then used to fetch and update bed availability specific to their hospital. Maintainers cannot view or modify data from other hospitals, ensuring strict role-based access control.</p>
            <p style={{textIndent: "20px", fontWeight:'bold'}}>Password Hashing</p>
            <p style={{textIndent: "20px"}}>Manushi uses industry-standard encryption and hashing techniques to store passwords securely. Passwords are never stored in plain text; instead, they are hashed using algorithms like bcrypt. Even if the database is compromised, hashed passwords provide a layer of protection against attackers.</p>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Authentication;