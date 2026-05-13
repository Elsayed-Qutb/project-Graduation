import React from "react";
import { Stethoscope } from "lucide-react";
import { Leaf } from "lucide-react";
import { Baby } from 'lucide-react';
import { Bone } from 'lucide-react';
import { HeartPlus } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Eye } from 'lucide-react';
import teeth from "../assets/teeth.png";
import { useNavigate } from "react-router-dom";

export default function Specialities() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12 border-b border-black/15">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6 mb-4">
          <p className="font-semibold bg-blue-100 text-blue-900 px-1.5 py-1.5 rounded-2xl w-4/12  lg:w-1/12 text-center text-[13px] mb-9">
            Specialities
          </p>

          <div className="flex flex-col items-center gap-1 mb-2.5 lg:mb-6">
            <h1 className="font-bold text-[25px]">Browse by Speciality</h1>
            <p className="text-gray-500 text-center text-[14px] lg:text-[16px] ">
              Find the right specialist for your health needs. 25+ medical
              specialities covered.
            </p>
            <h1 className="font-bold text-[25px]">Choose from:</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2.5 lg:gap-4.5 mb-6">
            
            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Stethoscope className="bg-[#e7f6fd] rounded-2xl size-10 p-1.5" color="#3ba0de" />
              <h1 className="font-bold text-[14px] lg:text-[16px]">General Practice</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Colds, fevers, infections & more
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                1,000+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <img className="w-3/12 bg-[#dedede] rounded-2xl p-1.5" src={teeth} />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Dentistry</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Dental care & oral health
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                1,500+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Leaf className="bg-[#e6f9f5] rounded-2xl size-10 p-1.5" color="#29b694" />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Dermatology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Skin, hair & nail care
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                800+ doctors
              </p>
            </div>

          </div>

          <h1 className="font-bold text-[25px] text-center">And more...</h1>

          <br />

          <button
            onClick={() => navigate("/specialtiesList")}
            className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[14px] group"
          >
            <span className="relative z-10">View All Specialities</span>
            <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          </button>

        </div>
      </section>
    </div>
  );
}