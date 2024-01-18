import React, { useState } from "react";
import Select from "react-select";
function Form() {
  const statesInNigeria = [
    { value: "Abuja", label: "Abuja" },
    { value: "Lagos", label: "Lagos" },
    { value: "Kano", label: "Kano" },
    // Add other states as needed
  ];
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
  const handleCrimeChange = (selectedOption) => {
    setSelectedCrime(selectedOption);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  return (
    <div className="relative lg:w-[50rem] w-full  ">
      <form class="max-w-sm mx-auto text-black  ">
        <div class="mb-5">
          <label
            for="Crime"
            class="block mb-2 text-sm font-medium text-gray-900 text-dark"
          >
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
          <label
            for="state"
            class="block mb-2 text-sm font-medium text-gray-900 text-dark"
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
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 text-dark"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="123 Main Street, Lagos, Nigeria, 100001"
            required
          />
        </div>
        <div class="mb-5">
          <label
            type="text"
            id="information"
            class="block mb-2 text-sm font-medium text-gray-900 text-dark"
          >
            Information
          </label>
          <textarea class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500  w-full p-2.5 dark:bg-gray-700 " />
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
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
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
          class="text-light bg-action hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Report Crime
        </button>
      </form>
    </div>
  );
}

export default Form;
