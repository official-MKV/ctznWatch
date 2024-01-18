import React from "react";
import { useState } from "react";
import Features from "./Features";
import Form from "./Form";

export default function Hero() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Team", path: "javascript:void(0)" },
  ];

  return (
    <section className="py-28 bg-black text-light">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-dark  font-bold">
            <span className="flex gap-[0.3rem]">
              {" "}
              <span>Help keep Nigeria</span>
              <svg
                viewBox="0 0 72 72"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-[1]"
              >
                <path d="m5 17h62v38h-62z" fill="#fff" />
                <path d="m5 17h21v38h-21z" fill="#186648" />
                <path d="m46 17h21v38h-21z" fill="#186648" />
                <path
                  d="m5 17h62v38h-62z"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              {"  "}
              safe
            </span>
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Give information anonymously
          </h2>
          <p className="text-[#999999]">
            In a world where safety is a collective responsibility, Citizen
            Assist Watch invites you to be an active participant in securing
            your community. By joining our movement, you become a vital part of
            a network committed to fostering safer neighborhoods.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-center text-white font-medium  duration-150 hover:bg-indigo-500"
            >
              Keep the community safe
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 rounded-lg md:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="blue"
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
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <Form />
          {/* <img
            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            className=" md:rounded-tl-[108px]"
            alt=""
          /> */}
        </div>
      </div>
      <div className="mt-14 px-4 md:px-8">
        <Features />
      </div>
    </section>
  );
}
