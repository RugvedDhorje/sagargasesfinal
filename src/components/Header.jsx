import { useState, useEffect } from "react";
import {
  Cylinder_List,
  Product_List,
  Service_List,
} from "../assets/assets";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PopContactForm from "./PopContactForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowFixedNavbar(true);
    } else {
      setShowFixedNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen h-auto">
      {/* Main Background Section */}
      <div
        className="w-full mx-auto min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to right,#003973, transparent), url('/images/bg_img_5.png')`,
        }}
      >
        {/*above Navbar */}
        <div className="absolute max-w-screen-2xl mx-auto inset-0 w-10/12 pt-8 md:pt-4 ">
          <div className="absolute w-[100%]">
            <div className="list-none lg:flex lg:justify-end py-4 hidden">
              <li className="text-lg text-white mr-6 ">Blogs & Case Studies</li>
              <li
              onClick={() => setShowForm(true)}
               className="text-lg text-white mr-12 cursor-pointer">Contacts</li>
               {showForm && <PopContactForm onclose={() => setShowForm(false)} />}
              <div
                className="border-2  border-white w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/sagar-gases-pvt-limited/",
                    "_blank"
                  )
                }
              >
                <span className="text-white text-lg text-center">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </div>
              <div className="border-2 border-white w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                <span className="text-white text-lg">
                  <i className="fa-brands fa-facebook"></i>
                </span>
              </div>
              <div className="border-2 border-white w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                <span className="text-white text-lg">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
              <div 
              onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCEV9wiSQUytY3Np-UMT2qRA",
                    "_blank"
                  )
                }
              className="border-2 border-white w-[30px] h-[30px] rounded-full flex items-center justify-center hover:-translate-y-1 duration-300">
                <span className="text-white text-lg">
                  <i className="fa-brands fa-youtube"></i>
                </span>
              </div>
            </div>

            {/* Initial Navbar */}
            <nav className="w-[100%] relative h-[80px] sm:h-[100px] bg-white flex justify-between gap-4 sm:gap-10 rounded-lg px-4 sm:px-10 items-center">
              <div className="h-full w-8/12 sm:w-5/12 flex items-center">
                <img
                  src="\images\main__logo.png"
                  alt="Logo"
                  className="sm:w-[80px] h-[80%] w-auto sm:h-[80%]"
                />
                <div>
                  <h4 className="md:text-2xl text-[12px]  font-semibold text-[#006db3] slide-in leading-snug">
                    Sagar Gases Pvt Ltd
                  </h4>
                  <p className="sm:text-[14px] text-[8px] text-center slide-in text-red-600">
                    Breaking the Barriers...
                  </p>
                </div>
              </div>
              <div className="lg:flex justify-between w-8/12 sm:w-5/12 list-none hidden">
                <Link to={"/"}>
                  <li className="relative group text-sm sm:text-xl md:text-base text-slate-500 hover:text-[#003973] duration-300">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
                <Link
                  to={"/product"}
                  onMouseEnter={() => setIsProductHovered(true)}
                >
                  <li className="relative group text-sm sm:text-xl md:text-base text-slate-500 hover:text-[#003973] duration-300 cursor-pointer">
                    Product & services
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
                {isProductHovered && (
                  <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    onMouseLeave={() => setIsProductHovered(false)}
                    className="absolute top-[110px] w-[calc(100%)] bg-white border rounded-lg shadow-lg px-5 py-10 z-20 flex"
                    style={{ left: 0 }}
                  >
                    <div className="w-2/5 mr-5">
                      <h2 className="font-bold text-[24px] text-[#006db3]">
                        Products
                      </h2>
                      <div className="h-auto flex flex-wrap">
                        {Product_List.map((product) => (
                          <div key={product.id} className="w-1/2">
                            <Link to={`/product/${product.id}`}>
                              <h3 className="text-[16px] mt-3">
                                {product.name} {product.symbol}
                              </h3>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-1/5 mr-5 pl-5 border-l-2 border-slate-100">
                      <h2 className="font-bold text-[24px] text-[#006db3]">
                        Cylinders
                      </h2>
                      <div className="h-auto">
                        {Cylinder_List.map((c) => (
                          <div key={c.cylinder_Id} className="w-full">
                            <Link to={`/product/cylinder/${c.cylinder_Id}`}>
                              <h3 className="text-[16px] mt-3">{c.name}</h3>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-2/5 pl-5 border-l-2 border-slate-100">
                      <h2 className="font-bold text-[24px] text-[#006db3]">
                        Services
                      </h2>
                      <div className="h-auto">
                        {Service_List.map((s) => (
                          <div key={s.service} className="w-full">
                            <Link to={`/product/service/${s.service}`}>
                              <h3 className="text-[16px] mt-3">{s.name}</h3>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                <Link to={"/infrastructure"}>
                  <li className="relative group text-sm sm:text-xl md:text-base text-slate-500 hover:text-[#003973] duration-300">
                    Infrastructure
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="relative group text-sm sm:text-xl md:text-base text-slate-500 hover:text-[#003973] duration-300">
                    About us
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
              </div>
              <div className="lg:hidden hover:text-[#003973] duration-300 cursor-pointer">
                <Menu onClick={() => setIsOpen(!isOpen)} />
                {isOpen && (
                  <div
                    className={
                      "absolute z-10 lg:hidden top-24 sm:top-28 rounded-md left-0 w-full bg-white flex-col items-center gap-4 text-lg transform transition-transform"
                    }
                    style={{
                      transition: "transform 0.3s ease,opacity 0.3s ease",
                    }}
                  >
                    <Link to={"/"}>
                      <li
                        onClick={() => setIsOpen(!isOpen)}
                        className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                      >
                        Home
                      </li>
                    </Link>
                    <Link to={"/product"}>
                      <li
                        onClick={() => setIsOpen(!isOpen)}
                        className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                      >
                        Product & Service
                      </li>
                    </Link>
                    <Link to={"/infrastructure"}>
                      <li
                        onClick={() => setIsOpen(!isOpen)}
                        className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                      >
                        Infrastructure
                      </li>
                    </Link>
                    <Link to={"/about"}>
                      <li
                        onClick={() => setIsOpen(!isOpen)}
                        className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                      >
                        About Us
                      </li>
                    </Link>
                    <li
                      onClick={() => setIsOpen(!isOpen)}
                      className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                    >
                      Blogs & CaseStudies
                    </li>
                    <li
                       onClick={() => setShowForm(true)}
                      className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                    >
                      Contact
                    </li>
                    {showForm && <PopContactForm onclose={() => setShowForm(false)} />}
                    <div className="flex justify-center my-4 gap-4">
                      <div
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/company/sagar-gases-pvt-limited/",
                            "_blank"
                          )
                        }
                        className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300"
                      >
                        <span className="text-sky-400 text-lg text-center">
                          <i className="fa-brands fa-linkedin"></i>
                        </span>
                      </div>
                      <div className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                        <span className="text-sky-400 text-lg">
                          <i className="fa-brands fa-facebook"></i>
                        </span>
                      </div>
                      <div className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                        <span className="text-sky-400 text-lg">
                          <i className="fa-brands fa-instagram"></i>
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          window.open(
                            "https://www.youtube.com/channel/UCEV9wiSQUytY3Np-UMT2qRA",
                            "_blank"
                          )
                        }
                        className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center hover:-translate-y-1 duration-300"
                      >
                        <span className="text-sky-400 text-lg">
                          <i className="fa-brands fa-youtube"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Fixed Navbar on Scroll */}
            {showFixedNavbar && (
              <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                }}
                className="fixed top-0 w-[100%] left-0 bg-[#f1f1f1] shadow-lg flex justify-between sm:gap-10  sm:px-10 items-center h-[70px] sm:h-[100px] z-50"
              >
                <div className="relative flex w-10/12 max-w-screen-2xl mx-auto justify-between items-center">
                  <div className="sm:h-[90px] h-[60px] sm:w-1/12 w-3/12 flex items-center">
                    <img
                      src="\images\main__logo.png"
                      alt="Logo"
                      className="sm:w-[90px] sm:h-[90px] h-[60px] w-auto"
                    />
                  </div>
                  <div className="lg:flex w-8/12 sm:w-6/12 list-none justify-between mr-1 hidden">
                    <Link to={"/"}>
                      <li className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </Link>
                    <Link
                      to={"/product"}
                      onClick={() => setIsProductHovered(false)}
                      onMouseEnter={() => setIsProductHovered(true)}
                    >
                      <li className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300">
                        Product & Services
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </Link>
                    <Link to={"/infrastructure"}>
                      <li className="relative group text-sm sm:text-xl md:text-base text-slate-500 hover:text-[#003973] duration-300">
                        Infrastructure
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </Link>
                    {isProductHovered && (
                      <motion.div
                        initial={{ y: 30 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.5,
                        }}
                        onMouseLeave={() => setIsProductHovered(false)}
                        className="absolute max-w-screen-2xl mx-auto top-[110px] ml-20 w-[calc(90%)] bg-white border rounded-lg shadow-lg px-5 py-10 z-20 flex"
                        style={{ left: 0 }}
                      >
                        <div className="w-2/5 mr-5">
                          <h2 className="font-bold text-[24px] text-[#006db3]">
                            Products
                          </h2>
                          <div className="h-auto flex flex-wrap">
                            {Product_List.map((product) => (
                              <div key={product.id} className="w-1/2">
                                <Link to={`/product/${product.id}`}>
                                  <h3 className="text-[16px] mt-3">
                                    {product.name} {product.symbol}
                                  </h3>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="w-1/5 mr-5 pl-5 border-l-2 border-slate-100">
                          <h2 className="font-bold text-[24px] text-[#006db3]">
                            Cylinders
                          </h2>
                          <div className="h-auto">
                            {Cylinder_List.map((c) => (
                              <div key={c.cylinder_Id} className="w-full">
                                <Link to={`/product/cylinder/${c.cylinder_Id}`}>
                                  <h3 className="text-[16px] mt-3">{c.name}</h3>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="w-2/5 pl-5 border-l-2 border-slate-100">
                          <h2 className="font-bold text-[24px] text-[#006db3]">
                            Services
                          </h2>
                          <div className="h-auto">
                            {Service_List.map((s) => (
                              <div key={s.service} className="w-full">
                                <Link to={`/product/service/${s.service}`}>
                                  <h3 className="text-[16px] mt-3">{s.name}</h3>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <Link to={"/about"}>
                      <li className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300">
                        About us
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </Link>
                    <li
                    onClick={() => setShowForm(true)}
                     className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300 cursor-pointer">
                      contact us
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    {showForm && <PopContactForm onclose={() => setShowForm(false)} />}
                  </div>
                </div>

                <div className="lg:hidden hover:text-[#003973] duration-300 cursor-pointer mr-2">
                  <Menu onClick={() => setIsOpen(!isOpen)} />
                  {isOpen && (
                    <div
                      className={
                        "absolute z-10 lg:hidden top-24 sm:top-28 rounded-md left-0 w-full bg-white flex-col items-center gap-4 text-lg transform transition-transform "
                      }
                      style={{
                        transition: "transform 0.3s ease,opacity 0.3s ease",
                      }}
                    >
                      <Link to={"/"}>
                        <li
                          onClick={() => setIsOpen(!isOpen)}
                          className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                        >
                          Home
                        </li>
                      </Link>
                      <Link to={"/product"}>
                        <li
                          onClick={() => setIsOpen(!isOpen)}
                          className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                        >
                          Product & Service
                        </li>
                      </Link>
                      <Link to={"/infrastructure"}>
                        <li
                          onClick={() => setIsOpen(!isOpen)}
                          className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                        >
                          Infrastructure
                        </li>
                      </Link>
                      <Link to={"/about"}>
                        <li
                          onClick={() => setIsOpen(!isOpen)}
                          className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                        >
                          About Us
                        </li>
                      </Link>
                      <li
                        onClick={() => setIsOpen(!isOpen)}
                        className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                      >
                        Blogs & CaseStudies
                      </li>
                      <li
                        onClick={() => setShowForm(true)}
                        className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                      >
                        Contact
                      </li>
                      {showForm && <PopContactForm onclose={() => setShowForm(false)} />}
                      <div className="flex justify-center my-4 gap-4">
                        <div
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/company/sagar-gases-pvt-limited/",
                            "_blank"
                          )
                        }
                         className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                          <span className="text-sky-400 text-lg text-center">
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </div>
                        <div className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                          <span className="text-sky-400 text-lg">
                            <i className="fa-brands fa-facebook"></i>
                          </span>
                        </div>
                        <div className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 hover:-translate-y-1 duration-300">
                          <span className="text-sky-400 text-lg">
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </div>
                        <div 
                        onClick={() =>
                          window.open(
                            "https://www.youtube.com/channel/UCEV9wiSQUytY3Np-UMT2qRA",
                            "_blank"
                          )
                        }
                        className="border-2 border-sky-400 w-[30px] h-[30px] rounded-full flex items-center justify-center hover:-translate-y-1 duration-300">
                          <span className="text-sky-400 text-lg">
                            <i className="fa-brands fa-youtube"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.nav>
            )}

            {/* Content Section */}
            <div className="mt-12 w-full h-[70%] sm:mt-12 md:mt-16 fade-in">
              <h1 className="lg:w-5/6  sm:text-[5vw] text-[8vw] sm:font-normal font-semibold text-white leading-snug sm:leading-none sm:text-left">
                Powering Industries with High-Quality Industrial Gases
              </h1>
              <h4 className="text-[14px] sm:text-[18px] text-white mr-0 sm:mr-28 mt-4 sm:mt-6 text-left">
                Supplying Pure Oxygen, Nitrogen, and Argon for Diverse
                Industrial Applications. At Sagar Gases Pvt. Ltd., we specialize
                in providing top-tier industrial gases that meet the needs of a
                variety of industries, including healthcare, manufacturing, and
                metalworking. Our commitment to quality and innovation makes us
                your go-to partner for all your gas supply needs.
              </h4>
              <Link to={"/about"}>
                <div className="flex justify-center sm:justify-start">
                  <button className="border-2 font-semibold border-white text-white px-6 py-2 rounded-full mt-6 sm:mt-12 group hover:text-[#003973] hover:bg-white duration-500">
                    About us
                    <span className="text-white ml-2 group-hover:text-[#003973] group-hover:translate-x-2 duration-500">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
