import { useState } from "react";
import SpringModal from "./Pop";
import Select from "react-select";
import { collection, addDoc } from "firebase/firestore";
import loading from "../assets/loading.svg";
import { db } from "../firebase__init";

import {
  statesWithLocalGovernments,
  statesInNigeria,
} from "../Data/locationData.js";

export default () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLGA, setSelectedLGA] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const sendtoDatabase = async (event) => {
    event.preventDefault();
    setSending(true);
    try {
      const docRef = await addDoc(collection(db, "Member"), {
        state: selectedState.value,
        lga: selectedLGA.value,
        phone: phone,
        email: email,
      });
      setIsOpen(true);
      setEmail("");
      setPhone("");
      setSelectedLGA("");
      setSelectedState("");
      setSending(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setSending(false);
    }
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedLGA(null); // Reset LGA when state changes
  };
  const handleLgaChange = (selectedOption) => {
    setSelectedLGA(selectedOption);
  };
  return (
    <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 my-[6rem]">
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        text={"Thank You for signing up "}
        subText={"Expect frequent information from us."}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-dark font-semibold md:text-4xl">
            Stay Informed, <span className="text-action">Stay Secure</span>
          </h3>
          <p className="text-gray-500 leading-relaxed mt-3">
            Join the Citizen Assist Initiative and take a step towards a safer
            community. By registering with us, you provide your contact details,
            allowing our dedicated team to send you verified and personalized
            security updates based on your location. Your anonymity is our
            priority, and we strive to keep you informed about security concerns
            without requiring any information from you.
          </p>
        </div>

        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <div className="mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div class="mb-5">
                <label
                  for="LGA"
                  class="block mb-2 text-sm font-medium  text-dark"
                >
                  State
                </label>
                <div className="w-full">
                  <Select
                    options={statesInNigeria}
                    onChange={handleStateChange}
                    value={selectedState}
                    isSearchable
                    placeholder="Select a state..."
                    className="basic-single"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div class="mb-5">
                <label
                  for="state"
                  class="block mb-2 text-sm font-medium text-dark"
                >
                  LGA
                </label>
                <div className="w-full">
                  <Select
                    options={statesWithLocalGovernments[selectedState?.value]}
                    onChange={handleLgaChange}
                    value={selectedLGA}
                    isSearchable
                    placeholder="Select an LGA..."
                    className="basic-single text-black"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium  text-dark"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  class="border border-[gray]/50 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="vem@example.com"
                  required
                />
              </div>
              <label
                for="phone-input"
                class="block mb-1 text-sm font-medium text-dark"
              >
                Phone number
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input
                  type="phone"
                  id="phone-input"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-[gray]/30 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   "
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="09006694231"
                  required
                />
              </div>

              <button
                onClick={sendtoDatabase}
                className="w-[70%] px-4 py-2 text-light font-medium bg-action hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 text-center flex items-center justify-center"
              >
                {sending ? (
                  <img className="w-[30px] h-[30px]" src={loading} />
                ) : (
                  "submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
