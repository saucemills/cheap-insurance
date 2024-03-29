/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from "react";

export default function Footer() {
  return (
    <div className="relative bottom-0 w-full h-20 bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-col flex-wrap justify-center items-center mx-auto max-w-6xl">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white mb-2">
            Cheaper Insurance Nevada
          </span>
        </a>
        <a className="text-white" href="/privacy">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
