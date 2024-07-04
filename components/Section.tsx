import React from "react";
import Image from "next/image";
import h6 from "../public/h6.jpg";

export const Section = () => {
  return (
    <div className="flex justify-around mt-44 mb-16 ml-24 ">
      <div className="w-[30%]">
        <h1 className="text-slate-500 text-sm">SECTION</h1>
        <p className=" my-10 text-lg font-semibold">
          Our team of experienced agents is dedicated to helping you navigate
          the complex world of real estate.
        </p>
        <p className="w-4/6 mt-16 text-slate-500 text-sm">
          We understand that buying or selling a home can be a daunting process,
          which is why we are here to make it as seamless and stress-free as
          possible.
        </p>
      </div>
      <div className="w-[45%] ">
        <Image src={h6} alt="h1" className="w-10/12"></Image>
      </div>
    </div>
  );
};
