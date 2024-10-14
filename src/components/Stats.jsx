import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Stats = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div
      ref={ref}
      className="h-auto bg-gradient-to-r from-[#006b8d] to-[#0156d7] pb-10 sm:pb-20"
    >
      {inView && (
        <div className="pb-10 sm:pb-20 max-w-screen-2xl mx-auto">
          <div className="w-11/12 sm:w-5/6 mx-auto py-5 sm:py-[50px]">
            <motion.h1
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="text-white text-[24px] sm:text-[30px] md:text-[50px] font-normal mt-2 text-center sm:text-left"
            >
              Key Facts
            </motion.h1>
          </div>
          <div className="w-11/12 sm:w-5/6 h-auto sm:h-auto flex flex-wrap mx-auto rounded-3xl">
            <div
              className={`w-full sm:w-1/2 lg:w-1/4 h-auto rounded-t-3xl sm:rounded-none md:rounded-tl-2xl lg:rounded-l-3xl bg-[#5f81b2] flex items-center justify-center p-4 
            ${isAnimated ? "animate-fade-in-up delay-1" : ""}`}
            >
              <div className="w-full">
                <StatsCard
                  title=" Leading supplier of industrial, medical, and specialty gases."
                  end={30}
                  icon="+"
                />
              </div>
            </div>

            <div
              className={`w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-auto
            ${isAnimated ? "animate-fade-in-up delay-2" : ""}`}
            >
              <div className="w-full h-auto lg:h-[50%] bg-[#909496] sm:rounded-tr-2xl lg:rounded-none flex items-center justify-center p-4">
                <div className="w-full">
                  <StatsCard title="Skilled team ensuring smooth operations and high-quality service."
                   end={1100} icon="+" />
                </div>
              </div>

              <div className="w-full h-auto lg:h-[50%] bg-[#9eaeca] flex items-center justify-center p-4">
                <div className="w-full">
                  <StatsCard
                    title=" Modern facilities across Maharashtra for bulk gas production."
                    end={10}
                    icon=""
                  />
                </div>
              </div>
            </div>

            <div
              className={`w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-auto
            ${isAnimated ? "animate-fade-in-up delay-3" : ""}`}
            >
              <div className="w-full h-auto lg:h-[50%] bg-[#5f81b2] flex items-center justify-center p-4">
                <div className="w-full">
                  <StatsCard title="An extensive network across India, ensuring reliable and timely delivery of gases."
                   end={25} icon="" />
                </div>
              </div>
              <div className="w-full h-auto lg:h-[50%] bg-[#cbc7c7] flex items-center justify-center sm:rounded-bl-2xl lg:rounded-none p-4">
                <div className="w-full">
                  <StatsCard
                    title="Large storage capacity for Liquid Oxygen, Nitrogen, and Medical Oxygen."
                    end={400}
                    icon="K+"
                  />
                </div>
              </div>
            </div>
            <div
              className={`w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-auto rounded-b-3xl sm:rounded-none md:rounded-r-3xl
            ${isAnimated ? "animate-fade-in-up delay-4" : ""}`}
            >
              <div className="w-full h-auto  lg:h-[50%] bg-[#909496] flex items-center justify-center p-4 lg:rounded-tr-3xl sm:rounded-none">
                <div className="w-full">
                  <StatsCard
                    title="tons/day of Liquid Medical Oxygen (LMO) and Liquid Nitrogen at our Jalna plant."
                    end={70}
                    icon="+"
                  />
                </div>
              </div>
              <div className="w-full h-auto lg:h-[50%] bg-[#9eaeca] flex items-center justify-center p-4 sm:rounded-br-2xl lg:rounded-br-3xl sm:rounded-none rounded-b-xl">
                <div className="w-full">
                  <StatsCard
                    title="Supporting healthcare with 36,000 m³ of Medical Oxygen produced daily."
                    end={36000}
                    icon="+ m³ "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;

const StatsCard = ({ title, end, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="h-full flex flex-col justify-center">
      <div className="text-center text-white text-[24px] sm:text-[30px] md:text-[40px] font-normal">
        {inView && (
          <CountUp start={0} end={end} duration={2.75} separator="," />
        )}
        <span>{icon}</span>
      </div>
      <h2 className="text-center text-white text-[14px] sm:text-[16px] mx-2">
        {title}
      </h2>
    </div>
  );
};
