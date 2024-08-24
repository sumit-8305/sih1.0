import React from 'react';
import { CopyBlock, nord } from 'react-code-blocks';

const Examples = () => {
      const showLineNumbers = true; 
  const codeBlock = true; 
    return(
        <div className="documentation-container" id='example'>
        <div className="content">
            <div className="doc-page">
          <h1 style={{ fontSize: "35px" }}>Example</h1>
          <CopyBlock
              text={` useEffect(() => {
    // Function to fetch bed availability data from the API
    const fetchBedData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hospital/bed-availability', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBedData(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBedData();
  }, []);`}
              language={'js'}
              theme={nord}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              codeBlock={codeBlock}
            />
        {/*  useEffect(() => {
    // Function to fetch bed availability data from the API
    const fetchBedData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hospital/bed-availability', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBedData(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBedData();
  }, []); // Empty dependency array means this useEffect runs once on component mount
*/} 
                </div>
            </div>
        </div>
    )
}

export default Examples;