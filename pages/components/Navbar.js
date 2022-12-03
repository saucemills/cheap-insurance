/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
        <span className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap text-white">
          <Link href="/" className="flex items-center cursor-pointer">
            Cheaper Insurance Nevada
          </Link>
        </span>

        <div className="flex md:order-2 space-x-3">
          <Link href="/form">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 sm:px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get a quote
            </button>
          </Link>
          <a href="tel:+7023897341">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 sm:px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Call Us Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
