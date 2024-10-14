// import React, { useRef } from "react";
// import { X } from 'lucide-react';

// const PopContactForm = ({ onclose }) => {
//     const formRef = useRef();
//     const closeForm = (e) => {
//         if (formRef.current === e.target) {
//             onclose();
//         }
//     }

//     return (
//         <div
//             ref={formRef}
//             onClick={closeForm}
//             className="fixed inset-0 bg-black bg-opacity-30 z-50 backdrop-blur-sm flex justify-center items-center">
//             <div className="relative max-w-screen-2xl bg-white h-auto max-h-[90vh] w-11/12 md:w-3/6 mx-auto p-6 rounded-2xl shadow-lg overflow-y-auto">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-xl font-semibold">Contact Us</h2>
//                     <button onClick={onclose}>
//                         <X size={30} />
//                     </button>
//                 </div>

//                 <form action="submit" className="space-y-4">
//                     <div className="sm:flex gap-4">
//                         <div className="sm:w-1/2">
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                 placeholder="Enter your name"
//                                 required
//                             />
//                         </div>
//                         <div className="sm:w-1/2 mt-4 sm:mt-0">
//                             <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 name="city"
//                                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                 placeholder="Enter your city"
//                             />
//                         </div>
//                     </div>

//                     <div className="sm:flex gap-4">
//                         <div className="sm:w-1/2">
//                             <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
//                             <input
//                                 type="text"
//                                 id="mobile"
//                                 name="mobile"
//                                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                 placeholder="Enter your mobile number"
//                                 required
//                             />
//                         </div>
//                         <div className="sm:w-1/2 mt-4 sm:mt-0">
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                 placeholder="Enter your email"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//                         <input
//                             type="text"
//                             id="company"
//                             name="company"
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                             placeholder="Enter your company"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                             placeholder="Enter your message"
//                             rows={4}
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full sm:w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mx-auto block">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default PopContactForm;

// !!!!!!!!!!!!!!

import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import Swal from 'sweetalert2'

const PopContactForm = ({ onclose }) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });
  const formRef = useRef();
  const closeForm = (e) => {
    if (formRef.current === e.target) {
      onclose();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d504f3f-b4da-467d-a7ee-ccb3fcd4d5d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Message send Successfully!",
            icon: "success"
          });
    }
    setFormData({
      name: "",
      city: "",
      mobile: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <div
      ref={formRef}
      onClick={closeForm}
      className="fixed inset-0 bg-black bg-opacity-30 z-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="relative max-w-screen-2xl bg-white h-auto max-h-[90vh] w-11/12 md:w-3/6 mx-auto p-6 rounded-2xl shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <button onClick={onclose}>
            <X size={30} />
          </button>
        </div>

        <form action="submit" onSubmit={onSubmit} className="space-y-4">
          <div className="sm:flex gap-4">
            <div className="sm:w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="sm:w-1/2 mt-4 sm:mt-0">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your city"
              />
            </div>
          </div>

          <div className="sm:flex gap-4">
            <div className="sm:w-1/2">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="sm:w-1/2 mt-4 sm:mt-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your company"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your message"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mx-auto block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopContactForm;
