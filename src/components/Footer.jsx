import { useState } from "react";
import PopContactForm from "./PopContactForm";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full bg-[#f1f1f1]">
      <div className="w-11/12 mx-auto max-w-screen-2xl h-auto sm:h-[250px] flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 h-[250px]">
          <div className="mt-10 flex justify-center items-center">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="\images\main__logo.png"
              alt=""
            />
          </div>
          <div className="flex justify-center mt-5 sm:mt-10">
            <button
              onClick={() => setShowForm(true)}
              className="border-2 font-semibold border-slate-400 group text-[#003973] hover:bg-[#006b8d] hover:text-white px-4 sm:px-6 py-2 rounded-full duration-300"
            >
              Contact us
              <span className="text-[#003973] ml-2 group-hover:text-white duration-300">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
            {showForm && <PopContactForm onclose={() => setShowForm(false)} />}
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[200px] my-auto border-l-0 sm:border-l-2 border-slate-300 flex justify-center items-center">
          <div className="list-none flex flex-col gap-2 sm:gap-4">
            <Link to={"/about"}>
              <li className="text-[14px] sm:text-[16px] font-medium text-slate-400">
                Company Overview
              </li>
            </Link>
            <li
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/sagar-gases-pvt-limited/",
                  "_blank"
                )
              }
              className="text-[14px] sm:text-[16px] font-medium text-slate-400 cursor-pointer "
            >
              Our People
            </li>
            <li className="text-[14px] sm:text-[16px] font-medium text-slate-400 cursor-pointer">
              News & Media
            </li>
          </div>
        </div>

        <div className="w-full sm:w-1/3 h-[250px] flex flex-col justify-center items-center">
          <div>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/sagar-gases-pvt-limited/",
                  "_blank"
                )
              }
            >
              <div className="border-2 border-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <span className="text-[#0156d7] text-lg text-center">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </div>
              <p className="text-slate-400 text-[16px] sm:text-[18px]">
                LinkedIn
              </p>
            </div>
            <div className="flex gap-2 mt-2 cursor-pointer">
              <div className="border-2 border-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <span className="text-sky-600 text-lg text-center">
                  <i className="fa-brands fa-facebook"></i>
                </span>
              </div>
              <p className="text-slate-400 text-[16px] sm:text-[18px]">
                Facebook
              </p>
            </div>
            <div className="flex gap-2 mt-2 cursor-pointer">
              <div className="border-2 border-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <span className="text-purple-900 text-lg text-center">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
              <p className="text-slate-400 text-[16px] sm:text-[18px]">
                Instagram
              </p>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCEV9wiSQUytY3Np-UMT2qRA",
                  "_blank"
                )
              }
              className="flex gap-2 mt-2 cursor-pointer"
            >
              <div className="border-2 border-slate-300 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <span className="text-red-700 text-lg text-center">
                  <i className="fa-brands fa-youtube"></i>
                </span>
              </div>
              <p className="text-slate-400 text-[16px] sm:text-[18px]">
                YouTube
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto h-[25px] bg-[#f1f1f1] max-w-screen-2xl">
        <p className="text-[12px] sm:text-[14px] text-slate-400 pb-4 text-center sm:text-left">
          © 2024 Sagar Gases. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
