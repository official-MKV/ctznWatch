import React from "react";
import TRT from "../assets/TRT.png";

const Promo = () => {
  return (
    <div className="w-full h-[18rem] bg-black flex flex-col items-center justify-center">
      <h1 className="text-[2rem] font-black  text-light text-wrap text-center">
        Citizen Assist Initiative
      </h1>
      <p className="text-dark">sponsored by</p>
      <div className="flex justify-center items-center flex-wrap gap-x-12  mt-3 text-light">
        <span className=" w-full h-full flex items-center mx-[1rem]">
          <img src={TRT} className="h-[7rem]" />
          <p className="text-dark text-wrap">
            Transatlantic Trusted Partners Limited
          </p>
        </span>
      </div>
      <a className="flex gap-[1.5rem] text-center items-center text-light hover:bg-light hover:text-black cursor-pointer p-[0.6rem] rounded-[1rem] mb-5 ">
        Become a Sponsor
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 scale-150"
        >
          <path
            fillRule="evenodd"
            d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default Promo;
