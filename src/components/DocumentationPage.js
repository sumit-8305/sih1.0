import React from 'react';
import DocumentationNav from './DocumentationNav';
import Introduction from './Documentation/Introduction';
import './css/Documentation.css'; // Make sure this file is imported for styling
import Authentication from './Documentation/Authentication';
import Authorization from './Documentation/Authorization';
import APIReference from './Documentation/APIReference';
import Examples from './Documentation/Examples';

function DocumentationPage() {
  return (
    <div className="documentation-container" style={{marginTop:"50px", background:'#ffffff',color:'#000000'}}>
      <DocumentationNav />
      <div style={{display:'flex', flexDirection:'column',width:'100vw',height:'auto'}}>
          <Introduction />
          <Authentication />
          <Authorization />
          <APIReference />
          <Examples />
      </div>
    </div>
  );
}

export default DocumentationPage;
