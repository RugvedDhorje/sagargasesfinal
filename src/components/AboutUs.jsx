import { useEffect, useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutUs = () => {
  const [toggleFaq_1, setToggleFaq_1] = useState(false);
  const [toggleFaq_2, setToggleFaq_2] = useState(false);
  const [toggleFaq_3, setToggleFaq_3] = useState(false);
  const [toggleFaq_4, setToggleFaq_4] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="w-11/12 md:w-10/12 mx-auto rounded-lg bg-cover bg-center mt-10"
        style={{
          backgroundImage: `linear-gradient(to right,#003973, transparent), url("/images/productpage_bg_2.png")`,
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
          <h1 className="text-3xl md:text-[50px] md:py-10 py-5 text-white font-normal mx-auto max-w-screen-2xl">
            About Us
          </h1>
        </motion.div>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto my-10 flex flex-col md:flex-row max-w-screen-2xl">
        <div className="w-full md:w-8/12 md:mr-16 text-[#3d4351]">
          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{
              duration: 1,
            }}
            className="text-2xl md:text-[30px] font-semibold"
          >
            Your Trusted Partner for Industrial and Medical Gases
          </motion.h2>
          <p className="text-[14px] md:text-[16px] mt-2">
            With over 30 years of experience, Sagar Gases Private Limited is a
            leading provider of industrial gases, medical gases, and specialty
            gases in India. We have built a reputation for excellence by
            delivering high-quality gas solutions tailored to the needs of
            industries like healthcare, steel, cement, pharmaceuticals, and
            chemicals. Our cutting-edge manufacturing technologies and
            comprehensive distribution network ensure consistent, reliable gas
            supply. At Sagar Gases, we focus on providing cryogenic gases such
            as Liquid Medical Oxygen (LMO), Nitrogen, Carbon Dioxide (CO₂), and
            Nitrous Oxide (N₂O). Our state-of-the-art facilities and world-class
            safety standards make us a trusted partner for industries requiring
            high-purity gas solutions. As a top supplier of bulk and packaged
            gases, Sagar Gases delivers superior solutions that are tailored to
            meet specific customer needs. Here’s why we stand out in the
            industry:
            <ul className="list-disc ml-4 md:ml-6">
              <li className="text-[16px] mt-2">
                <b>Decades of Expertise :</b> With more than 30 years of
                experience in the gas industry, we provide tailored gas
                solutions that meet the complex demands of industrial and
                medical sectors.
              </li>
              <li className="text-[16px] mt-2">
                <b>Advanced Cryogenic Technology :</b> Our use of Cryogenic PSA
                and Membrane Technology ensures that our gases meet the highest
                purity standards, making them suitable for critical industries
                like healthcare and manufacturing.
              </li>
              <li className="text-[16px] mt-2">
                <b>Comprehensive Distribution :</b> We operate 10 manufacturing
                facilities and 25 distribution centers, ensuring seamless and
                timely delivery of gases to all parts of India. Our mobile
                transport tankers are equipped with real-time tracking systems
                to ensure safety and punctuality.
              </li>
              <li className="text-[16px] mt-2">
                <b>Leader in Healthcare Gases :</b> We are pioneers in Liquid
                Medical Oxygen (LMO) installations, serving major healthcare
                institutions like AIIMS, Fortis, and the Apollo Group, with
                daily production exceeding 36,000 m³ of medical oxygen.
              </li>
              <li className="text-[16px] mt-2">
                <b>Sustainability :</b> We are committed to eco-friendly
                practices, reducing our environmental impact through sustainable
                production methods and efficient logistics.
              </li>
            </ul>
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="w-full md:w-4/12 lg:my-auto h-64 md:h-80 mt-6 md:mt-0 bg-cover bg-center"
        >
          <img
            src="\images\factory.png"
            alt="product image"
            className="h-full w-full object-cover rounded-lg shadow-lg my-auto"
          />
        </motion.div>
      </div>
      <div className="w-11/12 md:w-8/12 mx-auto max-w-screen-xl border border-1 border-slate-200 rounded-md my-7">
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{
            duration: 1,
          }}
          className="py-3 font-semibold text-2xl md:text-[30px] px-4 text-[#0156d7]"
        >
          Our Vision
        </motion.h2>
        <p className="px-4 text-[14px] md:text-[16px] mb-5">
          At Sagar Gases, we aim to continue being a leader in gas supply
          solutions, providing high-purity gases that meet the evolving needs of
          global industries. We envision a future where sustainability and
          innovation are at the forefront of everything we do, helping our
          clients achieve operational excellence while minimizing environmental
          impact.
        </p>
      </div>
      {/* toggle */}
      <div className="w-11/12 md:w-8/12 h-auto mx-auto max-w-screen-xl border border-1 border-slate-200 mb-10 rounded-md">
        <div className=" w-5/6  mx-auto h-auto">
          <div
            className="flex justify-between py-2"
            onClick={() => setToggleFaq_1(!toggleFaq_1)}
          >
            <h1 className="font-medium my-2 text-[14px] md:text-[16px]">
              70+ Tons Per Day Production
            </h1>
            <span>{!toggleFaq_1 ? <ChevronDown /> : <ChevronUp />}</span>
          </div>
          <hr className="h-[2px]" />
          {toggleFaq_1 && (
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className="my-2 text-[14px] md:text-[16px]">
                Our Jalna plant produces over 70 TPD of Liquid Oxygen and Liquid
                Nitrogen, ensuring an uninterrupted supply for critical sectors.
              </p>
              <hr />
            </motion.div>
          )}
        </div>
        <div className="w-5/6 mx-auto h-auto">
          <div
            className="flex justify-between py-2 "
            onClick={() => setToggleFaq_2(!toggleFaq_2)}
          >
            <h1 className="font-medium my-2 text-[14px] md:text-[16px]">
              400K+ Tonnes of Liquid Storage Capacity
            </h1>
            <span>{!toggleFaq_2 ? <ChevronDown /> : <ChevronUp />}</span>
          </div>
          <hr className="h-[2px]" />
          {toggleFaq_2 && (
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className="my-2 text-[14px] md:text-[16px]">
                With a 400,000+ tonnes capacity for Liquid Medical Oxygen and
                Nitrogen, we provide security and reliability to both industrial
                and healthcare sectors.
              </p>
              <hr />
            </motion.div>
          )}
        </div>
        <div className="w-5/6 mx-auto h-auto">
          <div
            className="flex justify-between py-2"
            onClick={() => setToggleFaq_3(!toggleFaq_3)}
          >
            <h1 className="font-medium my-2 text-[14px] md:text-[16px]">
              Global Reach
            </h1>
            <span>{!toggleFaq_3 ? <ChevronDown /> : <ChevronUp />}</span>
          </div>
          <hr className="h-[2px]" />
          {toggleFaq_3 && (
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className="my-2 text-[14px] md:text-[16px]">
                We serve over 100 countries worldwide, delivering gases that
                meet international standards of quality and safety.
              </p>
              <hr />
            </motion.div>
          )}
        </div>
        <div className="w-5/6 mx-auto h-auto">
          <div
            className="flex justify-between py-2"
            onClick={() => setToggleFaq_4(!toggleFaq_4)}
          >
            <h1 className="font-medium my-2 text-[14px] md:text-[16px]">
              Award-Winning Reliability
            </h1>
            <span>{!toggleFaq_4 ? <ChevronDown /> : <ChevronUp />}</span>
          </div>

          {toggleFaq_4 && (
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <hr className="h-[2px]" />
              <p className="my-2 text-[14px] md:text-[16px]">
                Our commitment to quality control and timely delivery has earned
                us the trust of some of the biggest names in the healthcare and
                industrial sectors.
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <div className="w-11/12 md:w-8/12 max-w-screen-xl mx-auto border border-1 border-slate-200 rounded-md my-7">
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{
            duration: 1,
          }}
          className="py-3 font-semibold text-2xl md:text-[30px] px-4 text-[#0156d7]"
        >
          Partner with Sagar Gases Today
        </motion.h2>
        <p className="px-4 text-[14px] md:text-[16px] mb-5">
          Join Sagar Gases Private Limited and benefit from our industry-leading
          expertise, high-purity gas solutions, and reliable service. We are
          dedicated to ensuring your operations run smoothly, with uninterrupted
          gas supplies that meet your needs — whether for medical care,
          manufacturing, or industrial processes.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
