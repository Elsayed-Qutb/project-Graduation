import React from "react";
import Doctor from "../assets/doctor.jpg";

export default function Hero() {
  return (
    <div>
      <section className=" flex justify-center border-b-2 border-black/15 lg:border-none">
        <div className="container  grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-stretch p-1.5 lg:p-1.5 lg:px-0">
          <div className="flex flex-col order-2 lg:order-1 py-8 lg:p-10  justify-between items-center lg:items-start gap-7 ">
            <p className="font-semibold bg-blue-100 text-blue-900 px-1.5 py-1.5 rounded-2xl w-7/12  lg:w-5/12 text-center text-[13px]">
              Together we build trust
            </p>
            <h1 className="font-bold text-[38px] text-black text-center lg:text-start">
              Welcom to <br></br>{" "}
              <span className="text-blue-600 tracking-widest text-[42px]">
                Medicare
              </span>
            </h1>
            <p className="text-gray-500 font-semibold text-[14px] lg:text-[16px] text-center lg:text-start">
              Find trusted doctors, clinics, and hospitals near you. Online &
              in-clinic consultations available 24/7.
            </p>
            <div className="  lg:w-11/12 p-1 lg:p-2 shadow-lg shadow-black/30 rounded-2xl grid grid-cols-2 border border-blue-200 gap-2">
              <button className="relative overflow-hidden px-2 py-2 lg:px-4 lg:py-2 bg-blue-500 text-white rounded-[14px] group">
                <span className="relative z-10">Book an Appointment</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
              <button className="relative overflow-hidden px-2 py-2 lg:px-4 lg:py-2 bg-blue-500 text-white rounded-[14px] group">
                <span className="relative z-10">Find a Doctor</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
             
              
            </div>
            <div class="container-input">
              <input
                type="text"
                placeholder="Search"
                name="text"
                className="input "
              ></input>
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <img
            className="rounded-2xl order-1 lg:order-2 w-11/12 shadow-lg shadow-black/40"
            src={Doctor}
          ></img>
        </div>
      </section>
    </div>
  );
}
