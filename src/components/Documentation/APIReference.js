import React from 'react';
import { CopyBlock, nord } from 'react-code-blocks';

const APIReference = () => {
  const showLineNumbers = true; 
  const codeBlock = true; 

  return (
    <div className="documentation-container" id='api'>
      <div className="content">
        <div className="doc-page">
          <h1 style={{ fontSize: "35px" }}>API Reference</h1>
          <p>Fetch api using localhost
            <CopyBlock
              text={`http://localhost:5000/api`}
              language={'txt'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
          </p>
            {/*http://localhost:5000/api/hospital/bed-availability*/}
          <br />
          <h2 style={{fontSize: "25px",color:'#005792'}}>Create a Login Request</h2>
          <p>To log in, you need to send a POST request to the `/api/auth/login` endpoint with the hospital's credentials. Here's how you can do it using different tools:
            <h2 style={{fontSize: "20px",color:'#005792'}}>Using cURL</h2>
            <p>You can use cURL to send a request from the command line:</p>
            <CopyBlock
              text={`curl -X POST http://localhost:5000/api/auth/login \

  -H "Content-Type: application/json" \

  -d '{"username": "fortis_user", "password": "fortis123"}'`}
              language={'cURL'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
          </p>
          <h2 style={{fontSize: "20px",color:'#005792'}}>Using Postman</h2>
          <ol>
            <li>1. Open Postman.</li>
            <li>2. Create a New Request:</li>
            <li style={{textIndent:"18px"}}><li>Method: POST</li>
            <li>URL: http://localhost:5000/api/auth/login</li>
            </li>
            <li>3. Set Headers:</li>
            <p style={{textIndent:"18px"}}>Content-Type: application/json</p>
            <li>4. Set Body:</li>
            <li style={{textIndent:"18px"}}><li>Choose raw and JSON format.</li>
            <li>Enter the JSON data:
                <CopyBlock
              text={`{
    "username": "fortis_user",
    "password": "fortis123"
}`}
              language={'json'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
            </li>
            </li>
          </ol>
          <p>5. Send the Request.</p>


            <br />
          <h2 style={{fontSize: "25px",color:'#005792'}}>Registering a new hospital</h2>
          {/*http://localhost:5000/api/hospital/register*/}
                    <p>
            <h2 style={{fontSize: "20px",color:'#005792'}}>Using cURL</h2>
            <p>You can use cURL to send a request from the command line:</p>
            <CopyBlock
              text={`curl -X POST http://localhost:5000/api/hospital/register \
  -H "Content-Type: application/json" \
  -d '{
  "_id": "some_object_id",
  "totalBeds":100,
  "availableBeds":100,
  "hospital_id": "002",
  "uniqueId": "fortis123",
  "name": "fortis",
  "username": "fortis.com",
  "password": "fortis123"
}'`}
              language={'cURL'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
          </p>
          <p>Above returns:
                <CopyBlock
              text={`{
    "message": "Hospital registered successfully"
}`}
              language={'json'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
          </p>

          <h2 style={{fontSize: "20px",color:'#005792'}}>Using Postman</h2>
          <ol>
            <li>1. Open Postman.</li>
            <li>2. Create a New Request:</li>
            <li style={{textIndent:"18px"}}><li>Method: POST</li>
            <li>URL: http://localhost:5000/api/hospital/register</li>
            </li>
            <li>3. Set Headers:</li>
            <p style={{textIndent:"18px"}}>Content-Type: application/json</p>
            <li>4. Set Body:</li>
            <li style={{textIndent:"18px"}}><li>Choose raw and JSON format.</li>
            <li>Enter the JSON data:
                <CopyBlock
              text={`{
  "hospital_id": "some_hospital_id",
  "uniqueId":"some_Id",
  "name":"some_hospital",
  "username": "testuser",
  "password": "$2a$10$KIXz8nK.8QYX9nH6u.dfe6J3C1sM5y/Q1tV/BrJaE1gOob8ZzA2gq" // hashed password
}
`}
              language={'json'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
            </li>
            </li>
          </ol>
          <p>5. Send the Request.</p>

          <br />
                    <h2 style={{fontSize: "25px",color:'#005792'}}>Adding a Maintainer</h2>
                
          <h2 style={{fontSize: "20px",color:'#005792'}}>Using Postman</h2>
          <ol>
            <li>1. Open Postman.</li>
            <li>2. Create a New Request:</li>
            <li style={{textIndent:"18px"}}><li>Method: POST</li>
            <li>URL: http://localhost:5000/api/hospital/add-maintainer</li>
            </li>
            <li>3. Set Headers:</li>
            <p style={{textIndent:"18px"}}>Content-Type: application/json</p>
            <li>4. Set Body:</li>
            <li style={{textIndent:"18px"}}><li>Choose raw and JSON format.</li>
            <li>Enter the JSON data:
                <CopyBlock
              text={`{
  "_id": "some_object_id",
  "uniqueId":"some_Id",
  "name":"some_hospital",
  "username": "testuser",
  "password": "$2a$10$KIXz8nK.8QYX9nH6u.dfe6J3C1sM5y/Q1tV/BrJaE1gOob8ZzA2gq" // hashed password
}
`}
              language={'json'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
            </li>
            </li>
          </ol>
          <p>5. Send the Request.</p>

        <br />
        <h2 style={{fontSize: "25px",color:'#005792'}}>Update Beds</h2>
        <p>Maintainer with access to jwt token can access update-beds throught postman as well</p>
          {/*http://localhost:5000/api/hospital/update-beds*/}
            <h2 style={{fontSize: "20px",color:'#005792'}}>Using Postman</h2>
          <ol>
            <li>1. Open Postman.</li>
            <li>2. Create a New Request:</li>
            <li style={{textIndent:"18px"}}><li>Method: PUT</li>
            <li>URL: http://localhost:5000/api/hospital/update-beds</li>
            </li>
            <li>3. Set Headers:</li>
            <p style={{textIndent:"18px"}}>Content-Type: application/json</p>
          </ol>

          <br />
                           <h2 style={{fontSize: "25px",color:'#005792'}}>Bed Availability</h2>
          {/*http://localhost:5000/api/hospital/bed-availability*/}
                
          <h2 style={{fontSize: "20px",color:'#005792'}}>Using Postman</h2>
          <ol>
            <li>1. Open Postman.</li>
            <li>2. Create a New Request:</li>
            <li style={{textIndent:"18px"}}><li>Method: GET</li>
            <li>URL: http://localhost:5000/api/hospital/bed-availability</li>
            </li>
            <li>It returns
                <CopyBlock
              text={`[
    {
        "_id": "66c716c7749166569ab76764",
        "name": "fortis",
        "uniqueId": "fort123",
        "totalBeds": 100,
        "availableBeds": 23,
        "lastUpdated": "2024-08-23T19:45:02.183Z"
    },
    {
        "_id": "66c71d5277e324aeb023b037",
        "name": "Max-vaishali",
        "uniqueId": "Max123",
        "totalBeds": 100,
        "availableBeds": 42,
        "lastUpdated": "2024-08-22T14:05:25.081Z"
    },
    {
        "_id": "66c76c48260723ebd7f9e5d8",
        "name": "kailash",
        "uniqueId": "kailash123",
        "totalBeds": 100,
        "availableBeds": 99,
        "lastUpdated": "2024-08-22T16:55:26.583Z"
    },
    {
        "_id": "66c9e3c17e06e4be584b567c",
        "name": "some_hospital",
        "uniqueId": "lmao",
        "totalBeds": 0,
        "availableBeds": 0,
        "lastUpdated": "2024-08-24T13:44:33.076Z"
    }
]`}
              language={'json'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
            </li>
          </ol>
          <p>Above data is returedned from stored database.</p>
        </div>

        
      </div>
    </div>
  );
}

export default APIReference;
