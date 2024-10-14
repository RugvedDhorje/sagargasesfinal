import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Cylinder_List,
  Product_List,
  Service_List,
} from "../assets/assets";
import { motion } from "framer-motion";
import PopContactForm from "./PopContactForm";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowFixedNavbar(true);
    } else {
      setShowFixedNavbar(false);
    }
  };

const handleClick = () => {
  setIsOpen(!isOpen);
  setShowForm(true);
}

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className=" w-[100%] left-0 bg-[#f1f1f1] shadow-lg flex sm:gap-10 px-4 sm:px-10 items-center h-[70px] sm:h-[100px] z-50"
      >
        <div className="relative w-10/12 mx-auto max-w-screen-2xl justify-between flex items-center">
          <div className="h-[70px] sm:h-[90px] flex items-center sm:w-1/12 w-3/12">
            <img
              src="\images\main__logo.png"
              alt="Logo"
              className="sm:w-[90px] sm:h-[90px] h-[60px] w-auto "
            />
          </div>
          <div className="lg:flex w-8/12 sm:w-7/12 list-none justify-between hidden">
            <Link to={"/"}>
              <li className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300 ">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
            <Link
              to={"/product"}
              onClick={() => setIsProductHovered(false)}
              onMouseEnter={() => setIsProductHovered(true)}
            >
              <div>
                <li className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300">
                  Product & Services
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </div>
            </Link>
            {isProductHovered && (
              <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                }}
                onMouseLeave={() => setIsProductHovered(false)}
                className="absolute top-[110px] max-w-screen-2xl mx-auto ml-20 w-[calc(90%)] bg-white border rounded-lg shadow-lg px-5 py-10 z-20 flex"
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
              <li className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300">
                About us
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
            <li
              onClick={() => setShowForm(true)}
              className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300 cursor-pointer"
            >
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
            </li>
            {showForm && <PopContactForm onclose={() => setShowForm(false)} />}
          </div>
        </div>
        <div className="lg:hidden hover:text-[#003973] duration-300 cursor-pointer">
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
              <div className="flex justify-center my-4 gap-4" >
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
            <div className="sm:h-[90px] h-[70px] sm:w-1/12 w-3/12 flex items-center">
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
                onClick={() => setShowForm2(true)}
                className="relative group text-sm sm:text-lg md:text-base text-slate-500 hover:text-[#003973] duration-300 cursor-pointer"
              >
                contact us
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#003973] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </div>
            {showForm2 && <PopContactForm onclose={() => setShowForm2(false)} />}
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
                  onClick={() => handleClick()}
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
    </div>
  );
};

export default Navbar;
