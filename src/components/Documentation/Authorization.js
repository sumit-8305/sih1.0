const Authentication = () => {
  return(
    <div className="documentation-container" id='autherization'>
      <div className="content">
        <div className="doc-page">
          <h1 style={{fontSize:"35px"}} >Authorization</h1>
          <p>
            Manushi is a web application designed to display real-time OPD bed availability for multiple hospitals. It includes features for hospital maintainers to manage their bed availability and provides an API for sharing this data. Authorization in Manushi ensures that only authorized users can access and modify specific hospital data.
          </p>
          <br />
          
          <h2 style={{fontSize:"25px", color:'#FC5F2B', fontWeight:'bold'}}>Authorization Mechanism</h2>
          <ol>
            <li style={{fontWeight:"bold"}}>1. User Roles:</li>
              <p style={{textIndent: "20px"}}><a style={{fontWeight:"bold"}}>Maintainers:</a> Hospital staff responsible for updating bed availability. Each maintainer can only access and manage data for their own hospital.</p>
            <li style={{fontWeight:"bold"}}>2. Authentication:</li>
              <p style={{textIndent: "20px"}}><a style={{fontWeight:"bold"}}>Login:</a> Maintainers authenticate by providing a username and password.</p>
              <p style={{textIndent: "20px"}}><a style={{fontWeight:"bold"}}>Token-Based:</a> Upon successful login, users receive a JSON Web Token (JWT) which must be included in the header of requests to authenticate and authorize access.</p>
          </ol>
          <h2 style={{fontSize:"25px", color:'#FC5F2B', fontWeight:'bold'}}>Authorization Process:</h2>
            <ol>
              <li style={{fontWeight:"bold"}}>1. User Registration:</li>
                <p style={{textIndent: "20px"}}>Admins register new hospitals and assign them unique IDs.</p>
                  <p style={{textIndent: "20px"}}>Each hospital can then register maintainers with specific credentials.</p>
              <li style={{fontWeight:"bold"}}>2. Maintainers Access:</li>
                <p style={{textIndent: "20px"}}>Upon login, maintainers receive a JWT containing their user ID and hospital ID.</p>
                <p style={{textIndent: "20px"}}>Requests to the API are checked against this token to ensure that maintainers can only access and modify data for their own hospital.</p>
                
                <li style={{fontWeight:"bold"}}>3. API Security:</li>
                                <p style={{textIndent: "20px"}}>Endpoint Protection: All sensitive endpoints (e.g., updating bed availability) are protected and require a valid JWT.</p>
                                <p style={{textIndent: "20px"}}>Token Validation: Each request is validated against the JWT to confirm that the user is authorized to perform the action.</p>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Authentication;