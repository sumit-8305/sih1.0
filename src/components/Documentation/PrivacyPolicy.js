import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <div className='text-center flex flex-col mt-32'>
        <h4 className='text-xl text-zinc-600 mb-10'><u>Manushi Innovations</u></h4>
        <h1 className='text-7xl font-medium tracking-tighter'>Privacy Policy</h1>
        <h4 className='text-xl text-zinc-600 mt-6 mb-10'>Last updated on: 7.9.2024</h4>
      </div>


      <div className='ml-2 mr-2 xs:ml-10 xs:mr-10 sm:ml-24 sm:mr-24 md:ml-36 md:mr-36 lg:ml-52 lg:mr-52 mb-14'>
        <p className='mb-10'>At Manushi (referred to as "we," "us," or "our"), your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, share, and safeguard your personal information when you interact with our website, services, and applications. By using our services, you consent to the collection and use of your information as described in this policy.
        </p>
        <div>
          <h1 className='text-4xl m-2'>1. Information We Collect</h1>
          <p className='ml-10 mb-4'>We may collect the following types of information:</p>
          <ul className='ml-10 space-y-4'>
            <li><b>Personal Information:</b> Name, email address, phone number, and any other information you provide during registration, OPD booking, or other interactions with our services.</li>

            <li><b>Health Information:</b> Medical records, hospital preferences, prescriptions, and any other details you share to improve your experience with our health services.</li>

            <li><b>Technical Data:</b> IP address, browser type, operating system, and other similar information collected automatically when you visit our website.</li>

            <li><b>Usage Data: </b> Information about how you interact with our website, such as pages viewed, links clicked, and other activities.</li>
          </ul>
        </div>


        <div className='mt-10'>
          <h1 className='text-4xl m-2'>2. How We Use Your Information</h1>
          <p className='ml-10 mb-4'>We use the collected information to:</p>
          <ul className='ml-10 space-y-4'>
            <li>• Provide, operate, and maintain our services, including bed availability and hospital proximity data.</li>

            <li>• Improve user experience by analyzing usage patterns.</li>

            <li>• Respond to inquiries and provide customer support.</li>

            <li>• Send you updates, notifications, and relevant information about our services.</li>

            <li>• Comply with legal obligations and ensure the safety of our users.</li>
          </ul>
        </div>


        <div className='mt-10'>
          <h1 className='text-4xl m-2'>3. Sharing Your Information</h1>
          <p className='ml-10 mb-4'>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
          <ul className='ml-10 space-y-4'>
            <li><b>Healthcare Providers:</b> To facilitate your interaction with hospitals, OPD booking, and medication dispensary services.</li>

            <li><b>Service Providers:</b>Third-party vendors who assist us with website hosting, data analysis, and customer support, provided they agree to maintain the confidentiality of your information.</li>

            <li><b>Legal Authorities:</b> When required by law or to protect the rights, property, or safety of Manushi, our users, or the public.</li>

            <li><b>Usage Data: </b> Information about how you interact with our website, such as pages viewed, links clicked, and other activities.</li>
          </ul>
        </div>

        <div className='mt-10'>
          <h1 className='text-4xl m-2'>4. Your Choices</h1>
          <p className='ml-10 mb-4'>You have the right to:</p>
          <ul className='ml-10 space-y-4'>
            <li>• Access and update your personal information.</li>

            <li>• Request the deletion of your information.</li>

            <li>• Opt out of receiving communications from us at any time.</li>
          </ul>
        </div>
        
        <div className='mt-10 text-center'>
          <h1 className='text-4xl font-medium m-2'>Changes to This Policy</h1>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy regularly to stay informed of any updates.</p>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
