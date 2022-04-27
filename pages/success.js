import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";

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
              <button
                type="button"
                onClick={handleClick}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default success;
