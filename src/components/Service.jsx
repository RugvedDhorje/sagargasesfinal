import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <div
        ref={ref}
        className="w-full bg-[#f1f1f1] h-auto flex justify-center"
      >
        <div className="w-11/12 max-w-screen-2xl mx-auto sm:w-5/6 my-10 sm:my-[100px]">
          {inView && (
            <div className="w-full fade-in">
              <h1 className="mt-2 text-[20px] sm:text-[40px] leading-snug sm:leading-snug font-medium  capitalize text-[#365888] text-left">
              Supplying high-purity Oxygen, Nitrogen, and Argon for industries like healthcare and manufacturing. Sagar Gases ensures reliability and innovation in gas supply solutions. 
              </h1> 
              <hr className="mt-5 h-[1px] bg-[#909496] border-0" />
            </div>
          )}
          <div className="w-full mt-5">
            <h2 className="text-[#909496] leading-8 sm:leading-10 text-[24px] sm:text-[35px] font-normal mt-2 text-center sm:text-left">
              Core Molecules
            </h2>
            <motion.div
              className="w-full bg-gradient-to-r from-[#006b8d] to-[#0156d7] rounded-3xl py-8 md:flex mt-10"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              {[
                "O₂ Oxygen",
                "CO₂ Carbon Dioxide",
                "N₂ Nitrogen",
                "A₂ Argon",
                "H₂ Hydrogen",
                "NH₃ Ammonia",
              ].map((gas, index) => {
                const [symbol, name] = gas.split(" ");
                return (
                  <motion.div
                    key={index}
                    className="w-full sm:w-1/6 flex flex-col items-center justify-center border-b-2 sm:border-b-0 sm:border-r-2 border-white mb-6 sm:mb-0"
                    variants={itemVariants}
                  >
                    <h1 className="text-white text-[50px] sm:text-[70px] flex items-center justify-center leading-none">
                      {symbol}
                      <sub className="text-[20px] sm:text-[30px] mt-4 sm:mt-8">
                        {symbol === "O₂" ||
                        symbol === "CO₂" ||
                        symbol === "N₂" ||
                        symbol === "A₂" ||
                        symbol === "H₂"
                          ? ""
                          : ""}
                      </sub>
                    </h1>
                    <h4 className="text-white text-[16px] sm:text-[20px] mb-2">
                      {name}
                    </h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
