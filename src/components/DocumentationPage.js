import React from 'react';
import DocumentationNav from './DocumentationNav';
import Introduction from './Documentation/Introduction';
import './css/Documentation.css'; // Make sure this file is imported for styling
import Authentication from './Documentation/Authentication';
import Authorization from './Documentation/Authorization';

function DocumentationPage() {
  return (
    <div className="documentation-container" style={{background:'#D1F4FA',height:'230vh',color:'#005792'}}>
      <DocumentationNav />
      <div style={{display:'flex', flexDirection:'column',width:'100vw',height:'auto'}}>
          <Introduction />
          <Authentication />
          <Authorization />
      </div>
    </div>
  );
}

export default DocumentationPage;
