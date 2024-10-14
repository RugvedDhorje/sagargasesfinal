import {
  Cylinder_List,
  Product_List,
  Service_List,
} from "../assets/assets";
import { Link } from "react-router-dom";
import { Cog, ChevronRight, ArrowRight } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProductsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      {/* Banner section */}
      <div className="w-full bg-gradient-to-b from-[#051f38] to-[#043e64] h-auto">
        <div className="py-16 md:py-32">
          <div
            className="relative h-[400px] sm:h-[500px] w-10/12 md:w-11/12 sm:w-full bg-cover bg-center rounded-3xl mx-auto max-w-screen-2xl"
            style={{
              backgroundImage: `linear-gradient(to right,#003973, transparent), url('/images/bg_img_5.png')`,
            }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="ml-6 md:ml-20 pt-16 lg:pt-20 md:pt-16"
            >
              <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-snug text-white">
                High-Quality Industrial Gases - Oxygen,
                <br /> Nitrogen, Argon & More
              </h1>
              <p className="hidden sm:block w-full md:w-2/3 text-white text-[16px] md:text-[18px] leading-tight mt-3">
                At Sagar Gases Pvt. Ltd., we specialize in supplying a wide
                range of industrial gases to meet the needs of various
                industries, including healthcare, metal fabrication, food
                processing, and more. Our gases are available in liquid and
                compressed forms, ensuring high purity and performance. Learn
                more about our products below.
              </p>
              <div
               onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/sagar-gases-pvt-limited/",
                  "_blank"
                )
              }
               className="flex justify-center rounded-full items-center border-2 w-[150px] md:w-[170px] border-white mt-8 group hover:bg-white duration-500">
                <button className="group-hover:text-[#003973] duration-500 font-medium py-2 rounded-full px-3 text-white text-[16px] md:text-[18px]">
                  Know more
                </button>
                <ArrowRight className="text-white group-hover:text-[#003973] duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* product section */}
      <div className="w-full h-auto">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="w-11/12 mx-auto max-w-screen-2xl my-[20px] md:my-[40px] text-[30px] md:text-[40px] leading-10 font-semibold text-[#909496]"
        >
          Products
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="w-11/12 h-auto mx-auto max-w-screen-2xl bg-gradient-to-r from-[#006b8d] to-[#0156d7] flex flex-wrap rounded-2xl mb-[50px] md:mb-[100px]"
        >
          {Product_List.map((product) => (
            <>
            <motion.div
              variants={itemVariants}
              key={product.id}
              className="text-white flex flex-col justify-center items-center py-4 md:py-5 w-1/2 md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-white my-6 hover:scale-105 duration-300"
            >
              <Link to={`/product/${product.id}`}>
              <div className="h-full w-full">
              <h1 className="text-[40px] md:text-[50px] text-center font-semibold px-4">
                  {product.symbol}
                </h1>
                <p className="text-[18px] md:text-[20px] font-semibold">
                  {product.name}
                </p>
              </div>
              </Link>
            </motion.div>
            </>
          ))}
        </motion.div>
      </div>

      {/* cylinder section */}
      <div ref={ref}>
        {inView && (
          <div className="w-full h-auto">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-11/12 mx-auto max-w-screen-2xl my-[20px] md:my-[40px] text-[30px] md:text-[40px] leading-10 font-semibold text-[#909496]"
            >
              Other Products & Services
            </motion.h1>
            <div className="flex flex-col  lg:flex-row items-center gap-5 justify-center mb-[100px] md:mb-[150px] mx-auto max-w-screen-2xl">
              <div className="w-11/12 lg:w-7/12 md:w-11/12 h-auto md:h-auto rounded-2xl border-2 border-[#e1e3e7] flex">
                <div className="w-full md:w-3/5 h-full">
                  <div className="w-11/12 md:w-5/6 mx-auto mt-4 md:mt-10 pl-5 text-[#3a4353]">
                    <motion.h2
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="text-[30px] md:text-[40px] font-bold hover:scale-105 hover:text-[#0156d7] duration-300"
                    >
                      Cylinders
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="text-[18px] md:text-[24px]"
                    >
                      Our supply and packaging options
                    </motion.p>
                    <hr className="mt-2" />
                  </div>
                  <motion.div
                    initial={{ x: -70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-11/12 md:w-5/6 md:mt-5 mt-2 mx-auto flex justify-center sm:justify-normal flex-wrap"
                  >
                    {Cylinder_List.map((c) => (
                      <div key={c.cylinder_Id}>
                        <h2 className="sm:px-2 px-4 md:py-5 py-2 text-[20px] md:text-[26px] font-semibold hover:underline duration-300 cursor-pointer hover:text-[#0156d7] hover:scale-105">
                          <Link to={`/product/cylinder/${c.cylinder_Id}`}>
                            {c.name}
                          </Link>
                        </h2>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right image container */}
                <div
                  className="hidden md:block md:w-2/5 h-auto rounded-r-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/images/productPage_cylinder.png")`,
                  }}
                ></div>
              </div>

              {/* Service section */}
              <div
                className="w-5/6 md:w-4/6 lg:w-4/12 h-auto md:h-auto rounded-2xl bg-cover bg-center relative overflow-hidden                                                 ``"
                style={{ backgroundImage: `url("/images/productpage_card.png")` }}
              >
                {/* Add a blue overlay with opacity */}
                <div className="absolute inset-0 bg-[#0156d7] opacity-80"></div>

                <div className="relative z-10 flex items-center justify-between mx-7 md:mx-10">
                  <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-[30px] md:text-[40px] leading-10 font-semibold text-white my-7"
                  >
                    Services
                  </motion.h1>
                  <Cog className="w-10 h-10 text-white" />
                </div>
                <hr className="relative z-10 mx-7" />

                <div className="relative z-10 mx-5 md:mx-10 my-4 md:mt-7">
                  {Service_List.map((service) => (
                    <motion.h2
                      key={service.service}
                      initial={{ x: -70, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.9 }}
                      className="text-lg md:text-xl my-4 md:my-5 font-normal flex items-center text-white cursor-pointer hover:underline duration-300"
                    >
                      <ChevronRight />
                      <Link to={`/product/service/${service.service}`}>
                        {service.name}
                      </Link>
                    </motion.h2>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
