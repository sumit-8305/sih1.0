import React , {useState} from 'react';
// import cors from 'cors';
// import express from 'express';

// const app = express();
// app.use(cors({
//     origin: 'http://localhost:3000' // or your client’s origin
// }));

const Contact = () => {
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch('http://localhost:5000/api/send-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email, phone, message }),
  //   });

  //   if (response.ok) {
  //     console.log('Email sent successfully');
  //   } else {
  //     console.error('Failed to send email');
  //   }
  // };
  return (
    <div
      style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='696' viewBox='0 0 768 696' fill='none'%3E%3Cpath d='M70.4613 131C1.66127 92.2 -13.5387 -63 10.9613 -115H912.461L968.461 689C905.128 698.167 756.261 705 667.461 659C556.461 601.5 555.854 563.797 525.961 498.5C493 426.5 442.5 380.5 339 380.5C269.457 380.5 226.182 313.365 206.961 260C160.5 131 156.461 179.5 70.4613 131Z' fill='%23D1F4FC'/%3E%3C/svg%3E") no-repeat right top`,
        backgroundSize: 'contain',
        height: '100vh',
        backgroundPosition: 'right top',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* <img className="transform scale-x-[-1]" src="/images/doctor-hand-pointing-Photoroom.png" width={564.8} height={600} alt='doctor image'></img> */}
      <div className='border-2 border-gray-700 shadow-2xl rounded-2xl p-8'>
        <div className="flex gap-3 text-4xl font-bold mr-40 mb-5">
          <svg className='scale-150' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" /></svg>
          <h1>Contact Us</h1>
        </div>

        <div className='w-full sm:max-w-md max-w-sm'>
          <form  
          // onClick={handleSubmit}
           style={{ display: 'flex', flexDirection: 'column' }}>
            {/* {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>} */}
            <input
              type="text"
              placeholder="Email ID"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '10px',
                margin: '10px 0',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <input
              type="text"
              //value={phone}
              // onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone No."
              required
              style={{
                padding: '10px',
                margin: '10px 0',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <textarea
              className='w-full h-56'
              type="text"
              //value={message}
              // onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              required
              style={{
                padding: '10px',
                margin: '10px 0',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            
            <button className="font-semibold bg-[#D1F4FA] hover:bg-blue-200 active:bg-blue-300"
              type="submit"
              
              style={{
                padding: '10px',
                margin: '10px 0',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
