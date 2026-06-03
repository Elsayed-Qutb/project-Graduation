import React from "react";
import { Stethoscope } from "lucide-react";
import { Leaf } from "lucide-react";
import { Baby } from 'lucide-react';
import { Bone } from 'lucide-react';
import { HeartPlus } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Tablets, Bean, Activity, Ear, Syringe, Venus, HouseHeart } from 'lucide-react';
import teeth from "../assets/teeth.png";
import { useNavigate } from "react-router-dom";

export default function Specialities() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12 border-b border-black/15">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6 mb-4">
          <div className="flex flex-col items-center gap-1 mb-2.5 lg:mb-6">
            <h1 className="font-bold text-[40px]">Choose the Speciality</h1>
            <p className="text-gray-500 text-center text-[20px] lg:text-[16px] ">
              Find the right specialist for your health needs. 15+ medical
              specialities covered.
            </p>
          </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 lg:gap-4.5 mb-6">
              <div onClick={() => navigate("/generalPractice")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Stethoscope
                className="bg-[#e7f6fd] rounded-2xl size-10 p-1.5"
                color="#3ba0de"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">General Practice</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Colds, fevers, infections & more
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
               500+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/dentistry")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <img
                className="w-3/12 bg-[#dedede] rounded-2xl p-1.5"
                src={teeth}
              ></img>
              <h1 className="font-bold text-[14px] lg:text-[16px]">Dentistry</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Dental care & oral health
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                400+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/dermatology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Leaf
                className="bg-[#e6f9f5] rounded-2xl size-10 p-1.5"
                color="#29b694"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Dermatology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Skin, hair & nail care
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                450+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/gynecology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Venus 
                className="bg-[#ffe5f5] rounded-2xl size-10 p-1.5"
                color="#d03678"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Gynecology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Women's health 
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                600+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/pediatrics")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Baby
                className="bg-[#ffedd3] rounded-2xl size-10 p-1.5"
                color="#d6662f"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Pediatrics</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Child health specialists
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                700+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/orthopedics")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Bone 
                className="bg-[#e7f9ed] rounded-2xl size-10 p-1.5"
                color="#3ab96d"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Orthopedics</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Bone & joint specialists
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                800+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/cardiology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <HeartPlus 
                className="bg-[#f8e5e3] rounded-2xl size-10 p-1.5"
                color="#d32e31"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Cardiology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Heart & cardiovascular
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                500+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/psychiatry")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Brain 
                className="bg-[#f4e8ff] rounded-2xl size-10 p-1.5"
                color="#9647e4"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Psychiatry</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Mental health & wellness
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                250+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/ophthalmology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Eye 
                className="bg-[#cffbfe] rounded-2xl size-10 p-1.5"
                color="#52b3c8"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Ophthalmology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Eye care & vision
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                450+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/endocrinology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Tablets 
                className="bg-[#cee0ff] rounded-2xl size-10 p-1.5"
                color="#001a46"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Endocrinology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Hormonal disorders
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                550+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/nephrology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Bean 
                className="bg-[#ffebeb] rounded-2xl size-10 p-1.5"
                color="#e76b6b"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Nephrology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Kidney care
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                500+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/neurology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Activity 
                className="bg-[#ffecde] rounded-2xl size-10 p-1.5"
                color="#502100"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Neurology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Nervous system disorders
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                300+ doctors
              </p>
            </div>

            <div onClick={() => navigate("/otolaryngology")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Ear 
                className="bg-[#f6ffcd] rounded-2xl size-10 p-1.5"
                color="#415000"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Otolaryngology</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Ears, nose & throat
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                650+ doctors
              </p>
            </div>

             <div onClick={() => navigate("/plastic-surgery")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <Syringe 
                className="bg-[#ffd4ff] rounded-2xl size-10 p-1.5"
                color="#b93ab9"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Plastic Surgery</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Cosmetic procedures
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                800+ doctors
              </p>
            </div>

             <div onClick={() => navigate("/physical-therapy")} className="cursor-pointer shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl border border-black/20 hover:border-blue-400 transition duration-200 text-center">
              <HouseHeart 
                className="bg-[#e2fff0] rounded-2xl size-10 p-1.5"
                color="#004121"
              />
              <h1 className="font-bold text-[14px] lg:text-[16px]">Physical Therapy</h1>
              <p className=" font-medium text-[11px] lg:text-[13px] text-gray-600">
                Movement & injury rehabilitation
              </p>
              <p className=" font-semibold text-[14px] text-blue-400">
                750+ doctors
              </p>
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