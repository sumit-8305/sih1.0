import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer class="bg-white mt-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-[black]">मानुषी</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/aboutUs/#Manushiinnovations" class="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="/privacyPolicy" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/docs" class="hover:underline me-4 md:me-6">Documentation</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
