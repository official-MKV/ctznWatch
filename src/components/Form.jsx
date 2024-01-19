import React, { useState } from "react";
import Select from "react-select";
import SpringModal from "./Pop.jsx";
import { collection, addDoc } from "firebase/firestore";
import loading from "../assets/loading.svg";

import { db } from "../firebase__init.js";
import {
  statesWithLocalGovernments,
  statesInNigeria,
} from "../Data/locationData.js";

function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const sendtoDatabase = async (event) => {
    event.preventDefault();
    setSending(true);
    try {
      const docRef = await addDoc(collection(db, "Tips"), {
        crimeType: selectedCrime.value,
        state: selectedState.value,
        location: location,
        information: crimeInfo,
      });
      setIsOpen(true);
      setSelectedCrime("");
      setSelectedState("");
      setLocation("");
      setCrimeInfo("");
      setSending(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setSending(false);
    }
  };
  const crimesInNigeria = [
    { label: "Theft", value: "Theft" },
    { label: "Assault", value: "Assault" },
    { label: "Burglary", value: "Burglary" },
    { label: "Robbery", value: "Robbery" },
    { label: "Vandalism", value: "Vandalism" },
    { label: "Fraud", value: "Fraud" },
    { label: "Cybercrime", value: "Cybercrime" },
    { label: "Kidnapping", value: "Kidnapping" },
    { label: "Harassment", value: "Harassment" },
    { label: "Domestic Violence", value: "Domestic Violence" },

    // Add other states as needed
  ];
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [location, setLocation] = useState(null);
  const [crimeInfo, setCrimeInfo] = useState(null);
  const [sending, setSending] = useState(false);
  const handleCrimeChange = (selectedOption) => {
    setSelectedCrime(selectedOption);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  return (
    <div className="relative lg:w-[50rem] w-full  ">
      <SpringModal
        text={"Thank You for your information"}
        subText={
          "Note this information will not be traced backed to you.It is completeley anonymous"
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <form class="max-w-sm mx-auto text-black  ">
        <div class="mb-5">
          <label for="Crime" class="block mb-2 text-sm font-medium  text-dark">
            Crime Type
          </label>
          <div className="w-full">
            <Select
              options={crimesInNigeria}
              onChange={handleCrimeChange}
              value={selectedCrime}
              isSearchable
              placeholder="Select a state..."
              className="basic-single"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div class="mb-5">
          <label for="state" class="block mb-2 text-sm font-medium  text-dark">
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
            for="address"
            class="block mb-2 text-sm font-medium  text-dark"
          >
            Location of crime
          </label>
          <input
            type="text"
            id="address"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            class="shadow-sm  border border-[gray]/30 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   placeholder-gray-400  "
            placeholder="123 Main Street, Lagos, Nigeria, 100001"
            required
          />
        </div>
        <div class="mb-5">
          <label
            type="text"
            id="information"
            class="block mb-2 text-sm font-medium  text-dark"
          >
            Information
          </label>
          <textarea
            onChange={(e) => {
              setCrimeInfo(e.target.value);
            }}
            value={crimeInfo}
            class="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500  w-full p-2.5 "
          />
        </div>

        <div class="flex items-start mb-5 text-dark">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label for="terms" class="ms-2 text-sm font-medium text-gray-900 ">
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          onClick={sendtoDatabase}
          class="text-light bg-action hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
        >
          {sending ? (
            <img className="w-[30px] h-[30px]" src={loading} />
          ) : (
            "Report Crime"
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
