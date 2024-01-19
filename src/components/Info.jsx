import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      className="w-full h-auto bg-action hover:grayscale-0 grayscale  flex lg:flex-row flex-col items-center lg:items-center  md:items-start justify-center"
      initial={{ filter: "grayscale(100)" }}
      whileInView={{ filter: "grayscale(0)" }}
      transition={{ duration: 2 }}
    >
      <div class="absolute top-0 z-[-2] lg:h-[30rem] md:h-[55rem] h-[80rem] w-screen  bg-[radial-gradient(#BDBCE3_2px,transparent_2px)] bg-[size:30px_30px] opacity-50"></div>
      <div className="lg:max-w-lg lg:ml-[10rem] md:ml-[3rem] md:max-w-lg max-w-xs">
        <p className="text-light lg:text-[45px] text-[30px] text-left font-bold">
          Crime escalation
        </p>
        <p className="text-[white] font-medium mt-5 lg:text-[1rem]  ">
          The escalating rate of crime in Nigeria, particularly within the
          kidnapping industry, has become an ominous threat to the nation's
          security, resulting in immeasurable human suffering. A poignant
          illustration of this crisis is the heart-wrenching incident involving
          the abduction of five sisters in the Bwari area of Abuja. The
          devastating news of Nabeeha's tragic death among the sisters further
          underscores the gravity of the situation. Compounded by the
          kidnappers' audacious demand for a staggering NGN100 million ransom
          for the release of the remaining sisters, this incident serves as a
          stark reminder of the urgent need for comprehensive and decisive
          measures to curb the pervasive criminal activities and protect the
          lives of innocent citizens.
        </p>
      </div>

      <div className=" flex mx-3  h-auto  object flex-wrap gap-y-2 gap-x-3 mt-5 mb-10">
        <img
          src={pic1}
          className="h-[15rem] w-[20rem] scale-[0.8] rounded-xl "
        />
        <img
          src={pic2}
          className="h-[15rem] w-[20rem] scale-[0.8] rounded-xl"
        />
        <img
          src={pic3}
          className="h-[15rem] w-[20rem] scale-[0.8]  rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default Info;
