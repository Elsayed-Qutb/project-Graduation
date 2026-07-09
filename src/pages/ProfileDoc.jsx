import React from "react";
import { useNavigate } from "react-router-dom";
import youstina from "../pages/specialities/doctors/salmaadel.png";

export default function ProfileDoc() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center mt-10">
      <section className=" p-6 gap-5 flex flex-col justify-center items-center ">
        <div className="flex flex-col  text-center">
          <h1 className="font-bold text-[40px] text-blue-400 rounded-2xl p-2">
            Doctor Profile
          </h1>
          
        </div>

        <div className="container  flex gap-6">
          <div className="w-5/12 rounded-2xl">
            <img className="w-12/12 bg-center rounded-2xl" src={youstina}></img>
          </div>
          <div className=" shadow-lg shadow-black/30 rounded-2xl  w-[60%] flex flex-col justify-center gap-7 p-3">
            <h1 className="font-bold text-[24px]">Dr. amira Elsayed</h1>
            <h1 className="font-bold text-blue-600">General Physician</h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#eff6ff] rounded-2xl p-2">
                <h1 className="text-gray-500 text-[13px]">Experience</h1>
                <h1 className="font-bold text-[18px]">15 years</h1>
              </div>
              <div className="bg-[#f0fdf4] rounded-2xl p-2">
                <h1 className="text-gray-500 text-[13px]">Phone</h1>
                <h1 className="font-bold text-[18px]">01016727695</h1>
              </div>
              <div className="bg-[#fff6ed] rounded-2xl p-2">
                <h1 className="text-gray-500 text-[13px]">Location</h1>
                <h1 className="font-bold text-[18px]">Tanta</h1>
              </div>
              <div className="bg-[#fbf5ff] rounded-2xl p-2">
                <h1 className="text-gray-500 text-[13px]">Total Reviews</h1>
                <h1 className="font-bold text-[18px]">0</h1>
              </div>
            </div>
            <div className="flex gap-3">
              <button
              onClick={() => navigate("/")} className="relative overflow-hidden w-6/12 px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
                <span className="relative z-10">Back</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
              <button className="relative overflow-hidden w-6/12 px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
