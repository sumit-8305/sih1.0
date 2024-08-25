import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div
      style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='696' viewBox='0 0 768 696' fill='none'%3E%3Cpath d='M70.4613 131C1.66127 92.2 -13.5387 -63 10.9613 -115H912.461L968.461 689C905.128 698.167 756.261 705 667.461 659C556.461 601.5 555.854 563.797 525.961 498.5C493 426.5 442.5 380.5 339 380.5C269.457 380.5 226.182 313.365 206.961 260C160.5 131 156.461 179.5 70.4613 131Z' fill='%23D1F4FC'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="backdrop-blur-md bg-white/60 shadow-xl rounded-xl p-8 max-w-md w-full"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="text-3xl font-bold mb-6 flex items-center justify-center text-black">
          Contact Us
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Email ID"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all bg-transparent text-black placeholder-gray-600"
          />
          <input
            type="text"
            name="user_number"
            placeholder="Phone No."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all bg-transparent text-black placeholder-gray-600"
          />
          <textarea
            name="user_message"
            placeholder="Message..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all bg-transparent text-black placeholder-gray-600 h-32 resize-none"
          />
          <button
            type="submit"
            value="send"
            className="w-full py-2 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600"
            style={{ backgroundColor: '#005792' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
