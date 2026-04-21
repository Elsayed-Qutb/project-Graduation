import React from "react";
import DrKumar from "../assets/DrKumar.svg";
import { MapPinPlus } from "lucide-react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Doctor from "../assets/doctor.jpg";



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
              appointment instantly.
            </p>
             <button className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[14px] group">
            <span className="relative z-10">View All Doctors</span>
            <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          </button>
          </div>

          <div className=" p-2 flex flex-col gap-5 w-12/12">
            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={DrKumar}></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Elsayed Aboshady</h1>
                <p className="text-blue-600">General Physician</p>
                <p className="text-gray-600 texxt-[15px]">
                  15+ years Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.8</h1>
                  </div>
                  <p className="text-gray-600">(2847 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    Apollo Clinic, Koramangala, Bangalore
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  ₹500
                </p>
                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={DrKumar}></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr.Engy Soliman</h1>
                <p className="text-blue-600">Dermatologist</p>
                <p className="text-gray-600 texxt-[15px]">
                  12+ years Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.8</h1>
                  </div>
                  <p className="text-gray-600">(2847 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    Skin Care Center, Indiranagar, Bangalore
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  ₹700
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={DrKumar}></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr.Amr Omran</h1>
                <p className="text-blue-600">Dr. Suresh Menon</p>
                <p className="text-gray-600 texxt-[15px]">
                  9+ years Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.8</h1>
                  </div>
                  <p className="text-gray-600">(2847 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    Heart Care Hospital, Jayanagar, Bangalore
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  ₹200
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={DrKumar}></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Engy Basem</h1>
                <p className="text-blue-600">Pediatrician</p>
                <p className="text-gray-600 texxt-[15px]">
                  15+ years Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.8</h1>
                  </div>
                  <p className="text-gray-600">(2847 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                     Children's Clinic, Whitefield, Bangalore
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  ₹500
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 p-2 shadow-lg shadow-black/30 rounded-2xl relative">
              <img src={DrKumar}></img>

              <div className=" w-9/12 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr.Alaa Etman</h1>
                <p className="text-blue-600">General Physician</p>
                <p className="text-gray-600 texxt-[15px]">
                  11+ years Experience
                </p>

                <div className="flex gap-2 items-center  ">
                  <div className="flex items-center  bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className=" size-5 " color="#24c364" />
                    <h1 className="  font-bold text-[16px] ">4.8</h1>
                  </div>
                  <p className="text-gray-600">(2847 reviews)</p>
                </div>

                <div className="flex gap-2 items-center ">
                  <MapPinPlus className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-7 p-1.5" />
                  <p className="text-gray-600">
                    Apollo Clinic, Koramangala, Bangalore
                  </p>
                </div>
              </div>

              <div className=" flex flex-col items-end gap-2">
                <h1 className="hidden lg:flex text-gray-600 font-bold">
                  Consultation Fee
                </h1>
                <p className="mb-7 font-bold text-[22px] absolute bottom-52 left-63 lg:static bg-blue-500 lg:bg-blue-50/5 text-white lg:text-black rounded-2xl p-1.5 ">
                  ₹400
                </p>
                <button className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
