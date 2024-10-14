import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicePage = () => {
  const [bg, setBg] = useState('/images/service_bg1.png');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="h-auto w-full bg-[#f1f1f1] flex justify-center items-center py-36"
    >
      {inView && (
        <div
          className="h-[600px] max-w-screen-2xl mx-auto w-10/12 md:w-11/12 sm:w-full bg-cover bg-center flex justify-center items-center rounded-3xl relative"
          style={{
            backgroundImage: `url(${bg})`,
            transition: "background-image 0.8s ease-in-out",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="md:h-[80%] h-[80%] my-auto w-11/12 mx-auto relative z-10 max-w-screen-2xl">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
              }}
              className="md:h-[30%]"
            >
              <h1 className="text-white text-[25px] lg:text-[50px] md:text-[35px] leading-snug font-normal mb-2 md:mb-8 capitalize">
                Sagar Gases Pioneers in Industrial and Medical Gas Solutions 
              </h1>
            </motion.div>
            <hr />
            <div className="sm:h-[70%] h-[90%] w-full mx-auto mt-2 sm:flex sm:flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="sm:h-1/2 h-1/4 sm:w-1/2 w-full flex justify-center items-center group"
                onMouseOver={() => setBg('/images/service_bg1.png')}
              >
                <div className="sm:h-[80%] h-[60%] sm:w-[20%] w-[25%] flex justify-center items-center rounded-full border-2 border-white group-hover:bg-[#0156d7] duration-500">
                  <img src= "/images/img_1.svg" 
                  alt="" className="h-[60%] w-[60%]" />
                </div>
                <div className="h-full w-8/12 ml-8 content-center">
                  <h4 className="text-[16px] md:text-[22px] text-white">
                  Comprehensive Tank Solutions for Hospitals and Industries
                  </h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ x: 250 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="sm:h-1/2 h-1/4 sm:w-1/2 w-full flex justify-center items-center group"
                onMouseOver={() => setBg('/images/service_bg2.png')}
              >
                <div className="sm:h-[80%] h-[60%] sm:w-[20%] w-[25%] flex justify-center items-center rounded-full border-2 border-white group-hover:bg-[#0156d7] duration-500">
                  <img src="/images/img_2.svg"  alt="" className="h-[60%] w-[60%]" />
                </div>
                <div className="h-full w-8/12 ml-8 content-center">
                  <h4 className="text-[16px] md:text-[22px] text-white">
                  Efficient Gas Station Installations
                  </h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ x: -250 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="sm:h-1/2 h-1/4 sm:w-1/2 w-full flex justify-center items-center group"
                onMouseOver={() => setBg('/images/service_bg3.png')}
              >
                <motion.div 
                className="sm:h-[80%] h-[60%] sm:w-[20%] w-[25%] flex justify-center items-center rounded-full border-2 border-white group-hover:bg-[#0156d7] duration-500">
                  <img src="/images/img_3.svg"  alt="" className="h-[60%] w-[60%]" />
                </motion.div>
                <div className="h-full w-8/12 ml-8 content-center">
                  <h4 className="text-[16px] md:text-[22px] text-white">
                  Reliable Maintenance Services for Gas Systems
                  </h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ x: 250 }}  
                animate={{ x: 0 }}
                transition={{
                  duration: 1,
                }}
                className="sm:h-1/2 h-1/4 sm:w-1/2 w-full flex justify-center items-center group"
                onMouseOver={() => setBg('/images/service_bg4.png')}
              >
                <div className="sm:h-[80%] h-[60%] sm:w-[20%] w-[25%] flex justify-center items-center rounded-full border-2 border-white group-hover:bg-[#0156d7] duration-500">
                  <img src="/images/img_4.svg"  alt="" className="h-[60%] w-[60%]" />
                </div>
                <div className="h-full w-8/12 ml-8 content-center">
                  <h4 className="text-[16px] md:text-[22px] text-white">
                  Expert Medical Gas System Integration
                  </h4>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
