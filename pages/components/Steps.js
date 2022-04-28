/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from "react";

function Steps() {
  return (
    <div className="px-4 py-8 mx-auto mb-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-12 lg:py-20">
      <div className="grid items-center justify-center gap-1 row-gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div className="px-8 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            1. Answer simple questions
          </h6>
          <div className="mb-2 text-gray-700">
            Just follow the prompts to tell us about your vehicle and who needs
            coverage.
          </div>
        </div>
        <div className="px-8 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            2. We process the information
          </h6>
          <div className="mb-2 text-gray-700">
            Behind the scenes, our innovative technology hones in on which
            insurers are best for drivers like you.
          </div>
        </div>
        <div className="px-8 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            3. Compare and save
          </h6>
          <div className="mb-2 text-gray-700">
            We give you the best rates and coverages for you to evaluate and
            make the decision best for you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
