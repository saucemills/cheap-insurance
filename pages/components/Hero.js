/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from "react";
import { useRouter } from "next/router";
import qs from "qs";

function Hero() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Name: `${event.target.first_name.value} ${event.target.last_name.value}`,
      Email: event.target.email.value,
      Phone: event.target.phone.value,
    };

    const endpoint =
      "https://www.blitzleadmanager.com/login/Form.aspx?id=84183cd3-132c-4a55-af6e-450e8cb24704&mode=silent";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "no-cors",
    };

    const response = await fetch(`${endpoint}&${qs.stringify(data)}`, options);
    console.log(response);

    const fullData = {
      FirstName: event.target.first_name.value,
      LastName: event.target.last_name.value,
      Email: event.target.email.value,
      Phone: event.target.phone.value,
    };
    router.push(`/form?${qs.stringify(fullData)}`);
  };
  return (
    <section className="mt-7 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          Save on your auto insurance
          <span className="text-blue-700"> today</span>!
        </h1>
        <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          Just by answering a few simple questions about yourself and your
          vehicle, you can then compare rates with the most reputable companies
          to save on your auto insurance.
        </p>
        <div>
          <form
            className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  className="block py-2.5 px-0 xl:w-3/4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="flex">
                  <div className="relative z-0 mb-6 pr-2 w-full group">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="first_name"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="last_name"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="outline-none mb-2 bg-gray-700 text-white mr-3 text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto"
              >
                Get Quote
              </button>
              <a href="tel:+7023897341">
                <button
                  type="button"
                  className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto"
                >
                  Call Us Now
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 text-center mt-8 lg:mt-0 lg:ml-3">
        <img
          src="cars.svg"
          alt="cars on street"
          className="w-full mx-auto sm:w-10/12  lg:w-full stroke-blue-700"
        />
      </div>
    </section>
  );
}

export default Hero;
