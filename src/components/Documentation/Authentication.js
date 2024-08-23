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
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Authentication;