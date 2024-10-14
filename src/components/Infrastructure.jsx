import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";


const Infrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        className="w-full md:w-10/12 mx-auto rounded-lg bg-cover bg-center mt-10"
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
          className="ml-4 md:ml-10"
        >
          <h1 className="text-[30px] md:text-[50px] py-5 text-white font-normal mx-auto">
            Infrastructure
          </h1>
        </motion.div>
      </div>

      <div className="w-full md:w-10/12 mx-auto my-10 flex flex-col lg:flex-row max-w-screen-2xl">
        <div className="lg:w-8/12 w-10/12 mx-auto lg:mr-16 text-[#3d4351]">
          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{
              duration: 1,
            }}
            className="text-[20px] md:text-[30px] font-semibold"
          >
            World-Class Infrastructure for Gas Production
          </motion.h2>
          <p className="text-[14px] md:text-[16px] mt-4">
            At Sagar Gases Private Limited, we have invested heavily in creating
            state-of-the-art infrastructure to support our production of
            industrial and medical gases. With 10 manufacturing facilities and
            25 distribution centers across Maharashtra, we ensure a reliable
            supply of Liquid Oxygen, Nitrogen, and Nitrous Oxide to industries
            such as healthcare, pharmaceuticals, steel, and manufacturing. Our
            flagship Jalna Plant, commissioned in December 2021, boasts a
            production capacity of 70 tons per day (TPD), producing Liquid
            Medical Oxygen (LMO) and Liquid Nitrogen. This facility, along with
            a storage capacity of 400 MT of Liquid Oxygen and 200 MT of
            Nitrogen, ensures uninterrupted supply to meet the growing demand of
            medical centers, industrial plants, and government institutions
            across Western India.
          </p>
          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{
              duration: 1,
            }}
            className="text-[20px] md:text-[30px] font-semibold"
          >
            Supporting India&lsquo;s Healthcare & Industry
          </motion.h2>
          <p className="text-[14px] md:text-[16px] mt-4">
            As a leading manufacturer in the healthcare segment, we have
            supplied critical gases to some of India’s top medical institutions,
            including AIIMS, Fortis, and Apollo Group of Hospitals. With a daily
            production of 36,000+ m³ of Medical Oxygen, we help healthcare
            providers deliver life-saving care to patients across the country.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:w-4/12 w-full h-auto my-auto mt-10 lg:mt-0"
        >
          <img
            src="\images\infrastructure_1.png"
            alt="product image"
            className="h-[250px] md:h-[400px] md:w-full w-10/12 mx-auto rounded-lg object-cover"
          />
        </motion.div>
      </div>

      <div className=" w-10/12 h-auto mb-10 mx-auto max-w-screen-2xl">
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{
            duration: 1,
          }}
          className="text-[20px] md:text-[30px] font-semibold"
        >
          Key Features of Our Infrastructure:
        </motion.h2>
        <ul className="list-disc text-[14px] md:text-[16px] ml-5 mt-4">
          <li>
            Cutting-Edge Technology: We employ Cryogenic PSA and Membrane
            Technology to ensure high-purity gases, with Oxygen purity levels
            reaching 99.5% to 99.8% and Nitrous Oxide purity of up to 99.2%.
          </li>
          <li>
            High-Capacity Storage: Our facilities can store 400,000+ tonnes of
            Liquid Oxygen and Nitrogen, guaranteeing steady supplies even during
            peak demand.
          </li>
          <li>
            Transport Fleet: We operate a fleet of mobile transport tankers
            (VITTs) with capacities up to 60,000 m³, ensuring safe and timely
            delivery.
          </li>
          <li>
            Sustainability Focus: We invest in eco-friendly production processes
            that optimize energy use and reduce our carbon footprint, reflecting
            our commitment to sustainable operations.
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row justify-between mt-10">
          <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
           className="w-full sm:w-[48%]">
            <img
              className="rounded-lg shadow-md w-full h-auto"
              src="\images\infrastructure_2.png"
              alt="Infrastructure 2"
            />
          </motion.div>
          <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
           className="w-full sm:w-[48%] mt-5 sm:mt-0">
            <img
              className="rounded-lg shadow-md w-full h-auto"
              src="\images\infrastructure_3.png"
              alt="Infrastructure 3"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Infrastructure;
