import React from "react";
import "../pages/BookOne.css";
import { useNavigate } from "react-router-dom";
import DrKumar from "../assets/DrKumar.svg";

export default function BookTwo() {
  const navigate = useNavigate();

  return (
    <div>
      <section className=" flex justify-center">
        <div className="container  flex flex-col justify-center items-center  p-4 lg:p-8">
          <div className="radio-input ">
            <label>
              <span className="one">1</span>
            </label>

            <label>
              <span className="two">2</span>
            </label>

            <label>
              <span className="three">3</span>
            </label>

            <label>
              <span className="four">4</span>
            </label>
          </div>
          <div className="radio-input plain text-center">
            <label>
              <span className=" text-[12px] lg:text-[13.5px]">Select Date</span>
            </label>

            <label>
              <span className=" text-[12px] lg:text-[13.5px]">
                Patient Info
              </span>
            </label>

            <label>
              <span className=" text-[12px] lg:text-[13.5px]">Review</span>
            </label>

            <label>
              <span className=" text-[12px] lg:text-[13.5px]">
                Confirmation
              </span>
            </label>
          </div>
          <div className="bg-[#eff6ff] border border-blue-200 flex gap-4 rounded-2xl mt-3 w-full lg:w-1/2">
            <img src={DrKumar}></img>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="font-bold">Dr. Elsayed Aboshady</h1>
              <h1 className="text-blue-700 font-semibold">General Physician</h1>
              <h1 className="text-gray-600 text-[15px]">
                {" "}
                $50 per consultation
              </h1>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 mt-3 flex flex-col p-2.5 gap-3 rounded-2xl  shadow-lg shadow-blue-300/20">
            <div class="container px-4 w-full border border-blue-400 rounded-2xl ">
              <div class="">
                <div class=" px-8 py-6 rounded-lg ">
                  <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                   Patient Information
                  </h2>
                  <form>
                    <div class="mb-4">
                      <label class="block text-gray-800 mb-1" for="name">
                        Your Name
                      </label>
                      <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block text-gray-800 mb-1" for="email">
                        Your Email
                      </label>
                      <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        type="email"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block text-gray-800 mb-1" for="Phone">
                        Phone Number
                      </label>
                      <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                        placeholder="Enter your phone Number"
                        name="Phone"
                        id="Phone"
                        type="phone"
                      />
                    </div>
                    <div className="mb-4">
                      <label class="block text-gray-800 mb-1" for="message">
                        Your Message
                      </label>
                      <textarea
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                        rows="4"
                        placeholder="Enter your message"
                        name="message"
                        id="message"
                      ></textarea>
                    </div>
                    <button
                      class="w-full bg-blue-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className=" flex justify-between px-3 mt-3">
              <button
                onClick={() => navigate(-1)}
                className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group"
              >
                <span className="relative z-10">BACK</span>
                <span className="absolute inset-y-0 left-[-75%] w-4/12 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
              <button className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
                <span className="relative z-10">Continue</span>
                <span className="absolute inset-y-0 left-[-75%] w-2/12 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
