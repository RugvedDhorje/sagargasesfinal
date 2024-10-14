import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Service_List } from '../assets/assets';

const ServiceDetail = () => {
  const { service } = useParams();


  const currentService = Service_List.find((item) => item.service === service);
  console.log(currentService)
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!currentService) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div
        className="w-full bg-cover bg-center mt-10"
        style={{
          backgroundImage: `linear-gradient(to right,#003973, transparent), url("/images/productpage_bg.png")`,
        }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{
            duration: 1,
          }}
          className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl"
        >
          <h1 className="text-3xl md:text-[50px] sm:py-10 py-5 text-white font-normal">
            {currentService.name}
          </h1>
        </motion.div>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto my-10 flex flex-col md:flex-row max-w-screen-2xl">
        <div className="md:w-8/12 md:mr-16 text-[#3d4351]">
          <p className="text-[16px]">{currentService.description}</p>
          <div className="border border-1 border-slate-200 rounded-md my-5">
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{
                duration: 1,
              }}
              className="py-3 w-11/12 mx-auto font-semibold text-[16px] px-4 text-[#0156d7]"
            >
              Applications
            </motion.h2>
            <ul className="px-4 w-11/12 mx-auto list-disc custom-list list-inside text-left text-[14px] sm:text-[16px] mb-5">
              {currentService.application.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{
                duration: 1,
              }}
              className="font-semibold text-[18px] mb-2 text-[#0156d7]"
            >
              Why Choose Us?
            </motion.h2>
            <ul className="px-4 list-disc custom-list list-inside text-left text-[14px] sm:text-[16px] mb-5">
              {currentService.supply.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:w-4/12 w-3/6 mx-auto my-10 lg:my-auto bg-cover bg-center"
        >
          <img src={currentService.img} alt="product image" className="rounded-lg mx-auto md:mx-0" />
        </motion.div>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl bg-slate-100 flex flex-col md:flex-row justify-center gap-4 items-center rounded-xl py-4 mb-10">
        <h2 className="text-[24px] md:text-[30px] text-[#003973] font-light text-center md:text-left">
          Discover How {currentService.name} Can Improve Your Process
        </h2>
        <button className="mt-4 md:mt-0 border-2 text-[16px] font-semibold border-[#003973] text-[#003973] px-6 py-2 rounded-full hover:text-white hover:bg-[#003973] duration-500">
          Talk to us
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceDetail;
