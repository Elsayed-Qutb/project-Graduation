import React from "react";
import { MapPinPlus, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import amira from "./doctors/amiraelsayed.png";
import hana from "./doctors/hanaelsherbiny.png";

export default function GeneralPractice() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6">

          <div className="flex flex-col items-center gap-4 mb-6">
            <h1 className="font-bold text-[25px] text-center">
              Search For Doctors in <b>General Practice</b> in <b>Tanta</b>
            </h1>
          </div>

          <div className="flex flex-col gap-5 w-full">

            <div className="flex flex-col lg:flex-row justify-between gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={amira} className="w-32 h-32 object-cover rounded-xl" />
             <div className="w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Amira El-Sayed</h1>
                <p className="text-blue-600">General Physician</p>
                <p className="text-gray-600 text-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                    <p className="text-gray-600">(540 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl p-1.5">
                  L.E. 700
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={hana} className="w-32 h-32 object-cover rounded-xl" />
            <div className="w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Hana El-Sherbiny</h1>
                <p className="text-blue-600">General Physician</p>
                <p className="text-gray-600 text-[15px]">
                  11+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">3.9</h1>
                  </div>
                  <p className="text-gray-600">(467 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl p-1.5">
                  L.E. 700
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

              <span className="agreement">
              <button onClick={() => navigate(-1)} className=" login-button px-3 py-1.5 bg-[#1192d3] rounded-2xl text-white font-bold">Back</button>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}