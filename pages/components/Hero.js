/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import {useState} from 'react';
import Link from 'next/link';

function Hero() {
  const [zipcode, setZipcode] = useState('');

  const handleChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      zipcode: e.target.zipcode.value,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = '/api/form';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result);
  };
  return (
    <section className="mt-7 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        Save on your auto insurance
          <span className="text-blue-700"> today</span>
        </h1>
        <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Just by answering a few simple questions about yourself and your vehicle, you can then compare rates with the most reputable companies.
        </p>
        <div>
          <form action='/api/form' method='post' className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start" onSubmit={handleSubmit}>
            <input
              type="text"
              id='zipcode'
              name='zipcode'
              required
              onChange={handleChange}
              value={zipcode}
              placeholder="Enter your zipcode"
              className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
            />
            <button type='submit' className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              <Link href={`/form?zip=${zipcode}`} >
               Get Quote
              </Link>
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 text-center mt-8 lg:mt-0 lg:ml-3">
        <img src="cars.svg" className="w-full mx-auto sm:w-10/12  lg:w-full stroke-blue-700" />
      </div>

    </section>
  );
}

export default Hero;
