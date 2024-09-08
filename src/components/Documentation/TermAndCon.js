import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="width-full flex items-center justify-center bg-gray-100 mt-20">
      <div className="bg-gray-100 shadow-md rounded-lg p-10 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
        <p className="text-gray-700 mb-4">
          <strong>Last updated: 08-09-2024</strong>
        </p>
        <p className="text-gray-600 mb-4">
          Welcome to our OPD Queuing Management System. By using this system, you agree to comply
          with the following terms and conditions. Please read them carefully before proceeding.
        </p>

        <h3 className="text-xl font-semibold mb-2">1. General Use</h3>
        <p className="text-gray-600 mb-4">
          Our OPD queuing system is designed to help hospitals manage patient flow and appointments efficiently. By accessing and using this system, you agree that you will:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Use the system for its intended purpose related to hospital management.</li>
          <li>Provide accurate information when using the system, especially regarding patient data and hospital resources.</li>
          <li>Respect the privacy and confidentiality of any information entered into the system.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">2. Data Privacy</h3>
        <p className="text-gray-600 mb-4">
          We are committed to ensuring that your data is protected. All patient and hospital data entered into the system will be securely stored and processed according to applicable data protection laws. You are responsible for ensuring the accuracy of the data you input into the system.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Limitation of Liability</h3>
        <p className="text-gray-600 mb-4">
          While we strive to ensure the accuracy and reliability of the queuing system, we do not guarantee uninterrupted or error-free operation. We will not be held responsible for any delays, losses, or damages arising from the use or inability to use this system, including but not limited to system downtime or inaccurate data.
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Modifications to the System</h3>
        <p className="text-gray-600 mb-4">
          We reserve the right to update or modify the system at any time, including adding new features or making improvements to the user experience. These changes may be applied without prior notice, and continued use of the system after changes are implemented constitutes your acceptance of these updates.
        </p>

        <h3 className="text-xl font-semibold mb-2">5. Termination of Use</h3>
        <p className="text-gray-600 mb-4">
          We reserve the right to terminate or restrict access to the OPD queuing system if there is any misuse or violation of these terms.
        </p>

        <h3 className="text-xl font-semibold mb-2">6. Governing Law</h3>
        <p className="text-gray-600 mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction/Country]. Any disputes related to these terms will be handled by the courts of [Insert Jurisdiction].
        </p>

        <h3 className="text-xl font-semibold mb-2">7. Contact Information</h3>
        <p className="text-gray-600">
          If you have any questions or concerns regarding these terms, please contact us at [Insert Contact Information].
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
