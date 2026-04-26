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
            {/* <div className="  lg:w-11/12 p-1 lg:p-2 shadow-lg shadow-black/30 rounded-2xl  border border-blue-200 gap-2"> */}
              <button className="relative overflow-hidden px-2 py-2 lg:px-4 lg:py-2 bg-blue-500 text-white rounded-[14px] group">
                <span className="relative z-10">Find a Doctor</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </div>
          {/* </div> */}
          <img
            className="rounded-2xl order-1 lg:order-2 w-11/12 shadow-lg shadow-black/40"
            src={Doctor}
          ></img>
        </div>
      </section>
    </div>
  );
}
