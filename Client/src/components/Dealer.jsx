import React from "react";
import logo from "../assets/logo.jpg";
const Dealer = () => {
  return (
    <>
      <div>
        <div className="box flex flex-col justify-center items-center my-4 w-full h-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-10 flex-wrap p-3 w-[60vw] md:w-auto md:p-0 bg-siteBlue rounded-2xl md:rounded-l-full md:rounded-r-full">
            <div>
              <img
                src={logo}
                alt=""
                className="rounded-full object-contain w-16 lg:w-20"
              />
            </div>
            <div className="flex flex-row items-center gap-5 flex-wrap justify-center">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Vishal Chauhan
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl">Phone : 9871838347</h2>
              </div>
              <div className="flex flex-col items-center justify-center text-white">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold ">
                  Distance : <span className="text-siteBlue">20Km</span>
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl">Phone : 9871838347</h2>
              </div>
              <div className="flex flex-col items-center lg:flex-row justify-center text-white">
                <h1 className="text-lg lg:text-2xl">Rating:</h1>
                <p>🌟🌟🌟🌟🌟</p>
              </div>
            </div>
            <div className="flex-1 w-full text-white">
              <button className="w-full bg-sitegreen text-textBlack flex justify-center items-center md:rounded-full md:p-3 lg:p-5 md:py-5 lg:py-7">
                Deal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealer;