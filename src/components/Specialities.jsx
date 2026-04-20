import React from "react";
import { Stethoscope } from "lucide-react";
import { Leaf } from "lucide-react";
import { Baby } from 'lucide-react';
import { Bone } from 'lucide-react';
import { HeartPlus } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Eye } from 'lucide-react';
import teeth from "../assets/teeth.png";

export default function Specialities() {
  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6 ">
          <p className="font-semibold bg-blue-100 text-blue-900 px-1.5 py-1.5 rounded-2xl w-4/12  lg:w-1/12 text-center text-[13px] mb-9">
            Specialities
          </p>
          <div className="flex flex-col items-center gap-1 mb-2.5 lg:mb-6">
            <h1 className="font-bold text-[25px]">Browse by Speciality</h1>
            <p className="text-gray-500 text-center text-[14px] lg:text-[16px] ">
              Find the right specialist for your health needs. 25+ medical
              specialities covered.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 lg:gap-4.5 mb-6">
            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Stethoscope
                className="bg-[#e7f6fd] rounded-2xl size-10 p-1.5"
                color="#3ba0de"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">General Physician</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Cold, fever, infections & mor
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                5,000+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <img
                className="w-3/12 bg-[#dedede] rounded-2xl p-1.5"
                src={teeth}
              ></img>
              <h1 className="font-bold text-[14px] lg:text-[16px]">Dentist</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Dental care & oral health
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                3,200+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Leaf
                className="bg-[#e6f9f5] rounded-2xl size-10 p-1.5"
                color="#29b694"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Dermatologist</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Skin, hair & nail problems
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                2,600+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Baby 
                className="bg-[#ffe5f5] rounded-2xl size-10 p-1.5"
                color="#d03678"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Gynecologist</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Women's health 
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                2,500+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Baby
                className="bg-[#ffedd3] rounded-2xl size-10 p-1.5"
                color="#d6662f"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Pediatrician</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Child health specialists
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                2,100+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Bone 
                className="bg-[#e7f9ed] rounded-2xl size-10 p-1.5"
                color="#3ab96d"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Orthopedic</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Bone & joint specialists
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                1,800+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <HeartPlus 
                className="bg-[#f8e5e3] rounded-2xl size-10 p-1.5"
                color="#d32e31"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Cardiologist</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Heart & cardiovascular
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                1,500+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Brain 
                className="bg-[#f4e8ff] rounded-2xl size-10 p-1.5"
                color="#9647e4"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Psychiatrist</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Mental health & wellness
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                1,200+ doctors
              </p>
            </div>

            <div className="shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transtion duration-200 text-center">
              <Eye 
                className="bg-[#cffbfe] rounded-2xl size-10 p-1.5"
                color="#52b3c8"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Ophthalmologist</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Eye care & vision
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                900+ doctors
              </p>
            </div>
          </div>
          <button className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
            <span className="relative z-10">View All Specialities</span>
            <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          </button>
        </div>
      </section>
    </div>
  );
}
