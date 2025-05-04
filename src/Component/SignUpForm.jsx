import React, { useState } from "react";
import Auction from "../Component/images/Auction.jpg";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  let [change, setchange] = useState(0);
  const handlesignup = () => {
    setchange(1);
  };
  const handleclick = () => {
    setchange(0);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section: Background Image */}
      <section
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${Auction})` }}
      ></section>

      {change === 0 ? (
        <>
        <section className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border-4 border-gray-200 shadow-md flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-center">Sign In</h3>
              <input
                className="text-base md:text-lg border border-gray-300 py-3 px-4 rounded-lg"
                type="text"
                placeholder="UserName"
              />
              <input
                className="text-base md:text-lg border border-gray-300 py-3 px-4 rounded-lg"
                type="password"
                placeholder="Password"
              ></input>
              <button className="bg-blue-700 font-bold hover:bg-blue-800 transition text-white text-lg py-3 rounded-lg">
                Submit
              </button>
              <p
                className="text-center cursor-pointer hover:text-blue-700"
                onClick={handlesignup}
              >
                Sign Up
              </p>
            </div>
          </section>        
        </>
      ) : null}
      {change === 1 ? (
        <>
         <section className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border-4 border-gray-200 shadow-md flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-center">Sign Up</h3>

              <input
                className="text-base md:text-lg border border-gray-300 py-3 px-4 rounded-lg"
                type="text"
                placeholder="Name"
              />
              <input
                className="text-base md:text-lg border border-gray-300 py-3 px-4 rounded-lg"
                type="email"
                placeholder="Email"
              />
              <input
                className="text-base md:text-lg border border-gray-300 py-3 px-4 rounded-lg"
                type="tel"
                placeholder="Contact Number"
              />
              <input
                className="text-base md:text-lg border border-gray-300 py-3 px-4 rounded-lg"
                type="password"
                placeholder="Password"
              />

              <button className="bg-blue-700 hover:bg-blue-800 transition text-white text-lg py-3 rounded-lg">
                Submit
              </button>
              <p
                className="text-center cursor-pointer hover:text-blue-700"
                onClick={handleclick}
              >
                Sign In
              </p>
            </div>
          </section>
          
        </>
      ) : null}
      {/* Right Section: Form */}
    </div>
  );
};

export default SignUpForm;
