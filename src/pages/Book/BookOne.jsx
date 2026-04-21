import React from "react";
import { useNavigate } from "react-router-dom";
import DrKumar from "../../assets/DrKumar.svg";
import './BookOne.css'

export default function BookOne() {
  const navigate = useNavigate();

  return (
    <div>
      <section className=" flex justify-center">
        <div className="container  flex flex-col justify-center items-center  p-4 lg:p-8">
              <div class="loaderone">
            <div class="barone"></div>
            <div class="check-bar-containerone">
              <div></div>
              <div class="checkone">
                <svg
                  stroke="white"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 12.75 6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <div class="check">
                <svg
                  stroke="white"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 12.75 6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <div class="check">
                <svg
                  stroke="white"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 12.75 6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <div class="check">
                <svg
                  stroke="white"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 12.75 6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className=" w-full lg:w-1/2 flex justify-between mt-3 items-center  text-[12px] lg:text-[16px] px-3 text-green-800 mb-2 ">
            <span className="bg-green-300 px-2 py-1 rounded-2xl font-bold">
              Select Date
            </span>

            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-2xl font-bold">
              {" "}
              Patient Info
            </span>

            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-2xl font-bold">
              Review
            </span>

            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-2xl font-bold">
              Confirmation
            </span>
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
          <div className=" w-full lg:w-1/2 mt-3 flex flex-col p-2.5 gap-3 rounded-2xl border border-blue-400 shadow-lg shadow-blue-300/20">
            <h1 className="font-bold text-[20px] text-center lg:text-start">Select Date & Time</h1>
            <h1 className="font-bold text-[15px]  text-center lg:text-start">Available Dates</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              <div className=" flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-bold text-[12px] lg:text-[14px]">
                  Thursday, April 18, 2024
                </h1>
                <h1 className="font-semibold text-[11px] text-gray-700">
                  4 slots available
                </h1>
              </div>
              <div className=" flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-bold text-[12px] lg:text-[14px]">
                  Friday, April 19, 2024
                </h1>
                <h1 className="font-semibold text-[11px] text-gray-700">
                  4 slots available
                </h1>
              </div>
              <div className=" flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-bold text-[12px] lg:text-[14px]">
                  Saturday, April 20, 2024
                </h1>
                <h1 className="font-semibold text-[11px] text-gray-700">
                  4 slots available
                </h1>
              </div>
            </div>
            <h1 className="font-bold text-[15px] text-center lg:text-start">Available Times</h1>
            <div className="grid grid-cols-4 gap-2">
              <div className=" flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-semibold text-[14px]">9:00 Am</h1>
              </div>
              <div className="flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-semibold text-[14px]">10:00 Am</h1>
              </div>
              <div className=" flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-semibold text-[14px]">11:00 Am</h1>
              </div>
              <div className="flex flex-col justify-center items-center rounded-2xl border border-blue-300 py-4 gap-1">
                <h1 className="font-semibold text-[14px]">12:00 Am</h1>
              </div>
            </div>
            <div className=" flex justify-between px-3 mt-3">
           <button onClick={() => navigate(-1)} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
            <span className="relative z-10">BACK</span>
            <span className="absolute inset-y-0 left-[-75%] w-4/12 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          </button>
                 <button onClick={() => navigate("/bookTwo")} className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
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
