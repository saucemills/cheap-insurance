/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable max-len */
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";

// eslint-disable-next-line require-jsdoc
function success() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <main className="h-screen m-0">
      <div className="min-h-full mb-[-40px]">
        <Navbar />
        <div className="flex justify-center mt-5">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b text-blue-700 border-gray-300">
              Success!!
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Submission accepted
              </h5>
              <p className="text-gray-700 text-base mb-4">
                A specialist will contact you within the next 24-48 hours with
                your cheapest possible quote.
              </p>
              <a className="flex justify-center mb-2" href="tel:7023897341">
                <button className="outline-none bg-blue-700 hover:bg-blue-800 text-white text-center px-4 py-3 rounded-md shadow w-1/2 ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    Call Us Now!
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default success;
