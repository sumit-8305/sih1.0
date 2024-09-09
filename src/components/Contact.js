import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s1qwtm5', 'template_lgtdgtt', form.current, 'PpJ4o52xWVf5oSbEQ')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
    <div
      style={{
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="mt-10 border-2 backdrop-blur-md bg-white/60 shadow-xl rounded-xl p-8 max-w-md w-full"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="text-4xl font-normal mb-6 flex items-center justify-center text-black">
          Join Us
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Email ID"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all bg-transparent text-black placeholder-gray-600"
          />
          <input
            type="text"
            name="user_number"
            placeholder="Phone No."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all bg-transparent text-black placeholder-gray-600"
          />
          <textarea
            name="user_message"
            placeholder="Message..."
            required
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-all bg-transparent text-black placeholder-gray-600 resize-none"
          />
          <button
            type="submit"
            value="send"
            className="w-full py-2 text-white rounded-lg transition-all bg-gradient-to-r from-orange-400 via-orange-600 to-red-500"
            style={{ backgroundColor: '#005792' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;