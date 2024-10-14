import React from "react";

const IndustryRole = () => {
  return (
    <div className="bg-white">
      <div className="w-10/12 max-w-screen-2xl my-10  mx-auto">
        <div className="w-full mx-auto max-w-screen-2xl">
          <h2 className="text-[#909496] leading-8 sm:leading-10 text-[24px] sm:text-[35px] font-normal mt-2 text-center sm:text-left">
            Industry 
          </h2>
          <hr className="mt-3 mb-5 h-[1px] bg-slate-200" />
        </div>
        <div className="w-full mx-auto overflow-hidden whitespace-nowrap">
          {/* Outer wrapper with hidden overflow and nowrap to prevent line breaks */}
          <div className="animate-roll text-black text-lg font-normal tracking-widest flex gap-10">
            {/* This div contains the rolling text */}
            <span>Automobile Industry</span>
            <span>Cement Industry</span>
            <span>Food Industry</span>
            <span>Electrical Industry</span>
            <span>Light Industry</span>
            <span>Welding Industry</span>
            <span>Electronics</span>
            <span>Fertilizer</span>
            <span>Aeronautical</span>
            <span>Atomic Center</span>
            <span>Nuclear Station</span>
            <span>Power Generation</span>
            <span>Gas Industries</span>
            <span>Petrochemical</span>
            <span>Refineries</span>
            <span>Hospitals</span>
            <span>Space Research</span>
            <span>Metallurgical</span>
            <span>Education Institution</span>
            <span>Emission Testing</span>
            <span>Pollution Control</span>
            <span>Medical Equipments</span>
          </div>
        </div>
      </div>
    </div>
  );

 
};
export default IndustryRole;

