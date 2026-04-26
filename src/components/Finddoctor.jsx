import React from "react";
// import DrKumar from "../assets/DrKumar.svg";
import { MapPinPlus } from "lucide-react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import amira from "./doctors/amiraelsayed.png";
import ahmed from "./doctors/ahmedabdelraouf.png";
import gharam from "./doctors/gharamhussein.png";
import khadija from "./doctors/khadijaehab.png";
import abdullah from "./doctors/abdullahhassan.png";
import randa from "./doctors/randahamdy.png";
import mahmoud from "./doctors/mahmoudsherif.png";
// import reham from "./doctors/rehamabdelghafar.png";
// import salma from "./doctors/salmaadel.png";
// import amany from "./doctors/amanywahba.png";
// import hanady from "./doctors/hanadywahba.png";
// import hana from "./doctors/hanaelsherbiny.png";
// import hadeer from "./doctors/hadeerelshafei.png";
// import kamillia from "./doctors/kamilliagerges.png";
// import youstina from "./doctors/youstinamalak.png";



export default function Finddoctor() {
    const navigate = useNavigate();
  
  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6 ">
          <p className="font-semibold bg-blue-100 text-blue-900 px-1.5 py-1.5 rounded-2xl w-4/12  lg:w-1/12 text-center text-[13px] mb-9">
            Find Doctors
          </p>
          <div className="flex flex-col items-center gap-2.5 lg:gap-4 mb-2.5 lg:mb-6">
            <h1 className="font-bold text-[25px]">Find & Book Top Doctors</h1>
            <p className="text-gray-500 text-center text-[14px] lg:text-[16px] ">
              Search from 50,000+ verified doctors across all specialities. Book
              appointments instantly.
            </p>
             <button className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
            <span className="relative z-10">View All Doctors</span>
            <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          </button>
          </div>

          <div className=" p-2 flex flex-col gap-5 w-12/12">
            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={amira} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Amira El-Sayed</h1>
                <p className="text-blue-600">General Physician</p>
                <p className="text-gray-600 texxt-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.2</h1>
                  </div>
                  <p className="text-gray-600">(540 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                El-Nahda Clinic, Tanta, Egypt</p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 700
                </p>
                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={ahmed} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr.Ahmed Abdelraouf</h1>
                <p className="text-blue-600">Cardiologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  20+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.5</h1>
                  </div>
                  <p className="text-gray-600">(1580 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 500
                </p>
                <button  className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={gharam} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr.Gharam Hussein</h1>
                <p className="text-blue-600">Gynecologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  15+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.1</h1>
                  </div>
                  <p className="text-gray-600">(508 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Motherly Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 200
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={khadija} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. KHadija Ehab</h1>
                <p className="text-blue-600">Cardiologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  15+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.8</h1>
                  </div>
                  <p className="text-gray-600">(980 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    Delta Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 300
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={abdullah} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Abdullah Hassan</h1>
                <p className="text-blue-600">Orthopedic</p>
                <p className="text-gray-600 texxt-[15px]">
                  11+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">3.9</h1>
                  </div>
                  <p className="text-gray-600">(850 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Life Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 600
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={randa} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Randa Hamdy</h1>
                <p className="text-blue-600">Orthopedic</p>
                <p className="text-gray-600 texxt-[15px]">
                  15+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.5</h1>
                  </div>
                  <p className="text-gray-600">(1369 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Motherly Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>


              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 250
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            {/* <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={reham} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Reham Abdelghafar</h1>
                <p className="text-blue-600">Dentist</p>
                <p className="text-gray-600 texxt-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">3.9</h1>
                  </div>
                  <p className="text-gray-600">(549 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Bright Smile Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 200
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={salma} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Salma Adel</h1>
                <p className="text-blue-600">Orthopedic</p>
                <p className="text-gray-600 texxt-[15px]">
                  5+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.6</h1>
                  </div>
                  <p className="text-gray-600">(368 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Motherly Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 200
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={amany} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Amany Wahba</h1>
                <p className="text-blue-600">Dermatologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.2</h1>
                  </div>
                  <p className="text-gray-600">(780 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Clear Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 300
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={hanady} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Hanady Wahba</h1>
                <p className="text-blue-600">Orthopedic</p>
                <p className="text-gray-600 texxt-[15px]">
                  11+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.1</h1>
                  </div>
                  <p className="text-gray-600">(680 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Clear Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 300
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={hana} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Hana El-Sherbiny</h1>
                <p className="text-blue-600">General Physician</p>
                <p className="text-gray-600 texxt-[15px]">
                  11+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">3.9</h1>
                  </div>
                  <p className="text-gray-600">(467 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 250
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={hadeer} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Hadeer EL-Shafei</h1>
                <p className="text-blue-600">Orthopedic</p>
                <p className="text-gray-600 texxt-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.3</h1>
                  </div>
                  <p className="text-gray-600">(848 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Life Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 200
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={kamillia} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Kamillia Gerges</h1>
                <p className="text-blue-600">Ophthalmologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  15+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.2</h1>
                  </div>
                  <p className="text-gray-600">(1058 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Horus Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 300
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={youstina} className="w-32 h-32 object-cover rounded-xl"></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Youstina Malak</h1>
                <p className="text-blue-600">Ophthalmologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">3.8</h1>
                  </div>
                  <p className="text-gray-600">(795 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                  Horus Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  L.E. 250
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </div>
  );
}
