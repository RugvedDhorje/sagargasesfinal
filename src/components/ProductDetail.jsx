import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Product_List } from "../assets/assets";

const ProductDetail = () => {
  const { id } = useParams(); // Ensure the param name matches the dynamic route
  const productId = Number(id); // Convert the param from string to number
  const product = Product_List.find((p) => p.id === productId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found!</div>;
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
          className="w-11/12 mx-auto max-w-screen-2xl"
        >
          <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] py-5 text-white font-normal">
            {product.name} {product.symbol}
          </h1>
        </motion.div>
      </div>

      <div className="w-11/12 mx-auto my-10 flex flex-col lg:flex-row max-w-screen-2xl">
        {/* Left section for product description */}
        <div className="lg:w-8/12 mr-0 lg:mr-16 text-[#3d4351]">
          <p className="text-[14px] sm:text-[16px]">{product.description}</p>
          <div className="border border-1 border-slate-200 rounded-md my-5">
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{
                duration: 1,
              }}
              className="py-3 w-11/12 mx-auto font-semibold text-[16px] sm:text-[18px] px-4 text-[#0156d7]"
            >
              Applications
            </motion.h2>
            <ul className="px-4 list-disc custom-list list-inside text-left text-[14px] w-11/12 mx-auto sm:text-[16px] mb-5">
              {product.application.map((point, index) => (
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
              className="font-semibold text-[16px] sm:text-[18px] mb-2 text-[#0156d7]"
            >
              Our supply and packaging options
            </motion.h2>
            <p className="text-[14px] sm:text-[16px]">{product.supply}</p>
          </div>
        </div>

        {/* Right section for product image */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:w-4/12 w-3/6 mx-auto my-10 lg:my-auto bg-cover bg-center"
        >
          <img
            src={product.img}
            alt="product image"
            className="rounded-lg w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Call to action section */}
      <div className="w-11/12 mx-auto max-w-screen-2xl bg-slate-100 flex flex-col lg:flex-row justify-center gap-6 items-center rounded-xl py-6 px-4 mb-10">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] text-[#003973] font-light text-center lg:text-left">
          Discover How {product.name} Can Improve Your Process
        </h2>
        <button className="border-2 text-[16px] font-semibold border-[#003973] text-[#003973] px-6 py-2 rounded-full hover:text-white hover:bg-[#003973] duration-500">
          Talk to us
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
