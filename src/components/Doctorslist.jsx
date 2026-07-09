import React from "react";
import { MapPinPlus } from "lucide-react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import amira from "../pages/specialities/doctors/amiraelsayed.png";
import ahmed from "../pages/specialities/doctors/ahmedabdelraouf.png";
import gharam from "../pages/specialities/doctors/gharamhussein.png";
import khadija from "../pages/specialities/doctors/khadijaehab.png";
import abdullah from "../pages/specialities/doctors/abdullahhassan.png";
import randa from "../pages/specialities/doctors/randahamdy.png";
import mahmoud from "../pages/specialities/doctors/mahmoudsherif.png";
import reham from "../pages/specialities/doctors/rehamabdelghafar.png";
import salma from "../pages/specialities/doctors/salmaadel.png";
import amany from "../pages/specialities/doctors/amanywahba.png";
import hanady from "../pages/specialities/doctors/hanadywahba.png";
import hana from "../pages/specialities/doctors/hanaelsherbiny.png";
import hadeer from "../pages/specialities/doctors/hadeerelshafei.png";
import kamillia from "../pages/specialities/doctors/kamilliagerges.png";
import youstina from "../pages/specialities/doctors/youstinamalak.png";
import mahmoudh from "../pages/specialities/doctors/mahmoudhamada.png";
import abdo from "../pages/specialities/doctors/abdoahmed.png";
import alaa from "../pages/specialities/doctors/alaagamal.png";
import adam from "../pages/specialities/doctors/adammalek.png";
import amanda from "../pages/specialities/doctors/amandayousry.png";
import carolina from "../pages/specialities/doctors/carolinaemad.png";
import elshafei from "../pages/specialities/doctors/elshafeigalal.png";
import fatma from "../pages/specialities/doctors/fatmaabdelaziz.png";
import ireny from "../pages/specialities/doctors/irenysabry.png";
import mostafa from "../pages/specialities/doctors/mostafasadek.png";
import marina from "../pages/specialities/doctors/marinamina.png";
import loai from "../pages/specialities/doctors/loaihamed.png";
import malak from "../pages/specialities/doctors/malakmourad.png";
import sara from "../pages/specialities/doctors/sarahany.png";
import yara from "../pages/specialities/doctors/yaraelsayed.png";
import fahmy from "../pages/specialities/doctors/fahmysalem.png";


export default function Doctorslist() {
const navigate = useNavigate();
  
  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6 ">

          <div className="flex flex-col items-center gap-2.5 lg:gap-4 mb-2.5 lg:mb-6">
            <h1 className="font-bold text-[40px]">Find & Book Top Doctors</h1>
            <p className="text-gray-500 text-center text-[25px] lg:text-[16px] ">
              Search from 50+ Doctors in <b>Tanta</b>
            </p>

            <div className=" p-2 flex flex-col gap-5 w-12/12">
            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                        <img src={amira} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                         <div className="flex-1 flex flex-col gap-1.5">
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
                              <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                              <p className="text-gray-600">
                                El-Nahda Clinic, Tanta, Egypt
                              </p>
                            </div>
                          </div>
            
                          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                            <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                              Consultation Fee
                            </h1>
                            <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                              L.E. 700
                            </p>
            
                            <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                              <span className="relative z-10">Book Now</span>
                              <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                            </button>
                          </div>
                        </div>
            
                        <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                        <img src={hana} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                        <div className="flex-1 flex flex-col gap-1.5">
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
                              <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                              <p className="text-gray-600">
                                El-Nahda Clinic, Tanta, Egypt
                              </p>
                            </div>
                          </div>
            
                          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                            <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                              Consultation Fee
                            </h1>
                            <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                              L.E. 700
                            </p>
            
                            <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                              <span className="relative z-10">Book Now</span>
                              <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                            </button>
                          </div>
                        </div>

                         <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                          <img src={ahmed} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                          <div className="flex-1 flex flex-col gap-1.5">
                                           <h1 className="font-bold text-[17px]">Dr. Ahmed Abdel-Raouf</h1>
                                           <p className="text-blue-600">Cardiologist</p>
                                           <p className="text-gray-600 text-[15px]">
                                             20+ Years of Experience
                                           </p>
                           
                                           <div className="flex gap-2 items-center">
                                             <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                                               <Star className="size-5" color="#24c364" />
                                               <h1 className="font-bold text-[16px]">4.5</h1>
                                             </div>
                                               <p className="text-gray-600">(1580 reviews)</p>
                                           </div>
                           
                                           <div className="flex gap-2 items-center">
                                             <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                                             <p className="text-gray-600">
                                               El-Nahda Clinic, Tanta, Egypt
                                             </p>
                                           </div>
                                         </div>
                           
                                         <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                                           <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                                             Consultation Fee
                                           </h1>
                                           <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                                             L.E. 500
                                           </p>
                           
                                           <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                                             <span className="relative z-10">Book Now</span>
                                             <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                                           </button>
                                         </div>
                                       </div>
                           
                                       <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                                       <img src={khadija} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                                       <div className="flex-1 flex flex-col gap-1.5">
                                           <h1 className="font-bold text-[17px]">Dr. Khadija Ehab</h1>
                                           <p className="text-blue-600">Cardiologist</p>
                                           <p className="text-gray-600 text-[15px]">
                                             15+ Years of Experience
                                           </p>
                           
                                           <div className="flex gap-2 items-center">
                                             <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                                               <Star className="size-5" color="#24c364" />
                                               <h1 className="font-bold text-[16px]">4.8</h1>
                                             </div>
                                             <p className="text-gray-600">(980 reviews)</p>
                                           </div>
                           
                                           <div className="flex gap-2 items-center">
                                             <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                                             <p className="text-gray-600">
                                               delta Clinic, Tanta, Egypt
                                             </p>
                                           </div>
                                         </div>
                           
                                         <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                                           <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                                             Consultation Fee
                                           </h1>
                                           <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                                             L.E. 300
                                           </p>
                           
                                           <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
<span className="relative z-10">Book Now</span>
<span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
</button>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                    <img src={reham} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                     <div className="flex-1 flex flex-col gap-1.5">
                        <h1 className="font-bold text-[17px]">Dr. Reham Abdel-Ghafar</h1>
                        <p className="text-blue-600">Dentist</p>
                        <p className="text-gray-600 text-[15px]">
                          10+ Years of Experience
                        </p>
        
                        <div className="flex gap-2 items-center">
                          <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                            <Star className="size-5" color="#24c364" />
                            <h1 className="font-bold text-[16px]">3.9</h1>
                          </div>
                            <p className="text-gray-600">(549 reviews)</p>
                        </div>
        
                        <div className="flex gap-2 items-center">
                          <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Bright Smile Clinic, Tanta, Egypt
                          </p>
                        </div>
                      </div>
        
                      <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                        <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                          Consultation Fee
                        </h1>
                        <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                          L.E. 200
                        </p>
        
                        <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                          <span className="relative z-10">Book Now</span>
                          <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                        </button>
                      </div>
                    </div>
        
                    <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                    <img src={mahmoudh} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                    <div className="flex-1 flex flex-col gap-1.5">
                        <h1 className="font-bold text-[17px]">Dr. Mahmoud Hamada</h1>
                        <p className="text-blue-600">Dentist</p>
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
                          <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Bright Smile Clinic, Tanta, Egypt
                          </p>
                        </div>
                      </div>
        
                      <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                        <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                          Consultation Fee
                        </h1>
                        <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                          L.E. 300
                        </p>
        
                        <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                          <span className="relative z-10">Book Now</span>
                          <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                        </button>
                      </div>
                    </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
              <img src={amany} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
               <div className="flex-1 flex flex-col gap-1.5">
                  <h1 className="font-bold text-[17px]">Dr. Amany Wahba</h1>
                  <p className="text-blue-600">Dermatologist</p>
                  <p className="text-gray-600 text-[15px]">
                    10+ Years of Experience
                  </p>
  
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                      <Star className="size-5" color="#24c364" />
                      <h1 className="font-bold text-[16px]">4.2</h1>
                    </div>
                      <p className="text-gray-600">(780 reviews)</p>
                  </div>
  
                  <div className="flex gap-2 items-center">
                    <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      Clear Clinic, Tanta, Egypt
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                  <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                    Consultation Fee
                  </h1>
                  <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                    L.E. 300
                  </p>
  
                  <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                  </button>
                </div>
              </div>
  
              <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
              <img src={sara} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-1.5">
                  <h1 className="font-bold text-[17px]">Dr. Sara Hany</h1>
                  <p className="text-blue-600">Dermatologist</p>
                  <p className="text-gray-600 text-[15px]">
                    9+ Years of Experience
                  </p>
  
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                      <Star className="size-5" color="#24c364" />
                      <h1 className="font-bold text-[16px]">4.0</h1>
                    </div>
                    <p className="text-gray-600">(489 reviews)</p>
                  </div>
  
                  <div className="flex gap-2 items-center">
                    <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      Clear Clinic, Tanta, Egypt
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                  <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                    Consultation Fee
                  </h1>
                  <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                    L.E. 300
                  </p>
  
                  <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                  </button>
                </div>
              </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={abdo} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
             <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Abdo Ahmed</h1>
                <p className="text-blue-600">Endocrinologist</p>
                <p className="text-gray-600 text-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                    <p className="text-gray-600">(760 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 400
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={alaa} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Alaa Gamal</h1>
                <p className="text-blue-600">Endocrinologist</p>
                <p className="text-gray-600 text-[15px]">
                  11+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                  <p className="text-gray-600">(879 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 600
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>
<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                <img src={gharam} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                 <div className="flex-1 flex flex-col gap-1.5">
                    <h1 className="font-bold text-[17px]">Dr. Gharam Hussein</h1>
                    <p className="text-blue-600">Gynecologist</p>
                    <p className="text-gray-600 text-[15px]">
                      15+ Years of Experience
                    </p>
    
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                        <Star className="size-5" color="#24c364" />
                        <h1 className="font-bold text-[16px]">4.1</h1>
                      </div>
                        <p className="text-gray-600">(908 reviews)</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Motherly Clinic, Tanta, Egypt
                      </p>
                    </div>
                  </div>
    
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                    <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                      Consultation Fee
                    </h1>
                    <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                      L.E. 200
                    </p>
    
                    <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    </button>
                  </div>
                </div>
    
                <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                <img src={yara} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1.5">
                    <h1 className="font-bold text-[17px]">Dr. Yara El-Sayed</h1>
                    <p className="text-blue-600">Gynecologist</p>
                    <p className="text-gray-600 text-[15px]">
                      11+ Years of Experience
                    </p>
    
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                        <Star className="size-5" color="#24c364" />
                        <h1 className="font-bold text-[16px]">4.0</h1>
                      </div>
                      <p className="text-gray-600">(508 reviews)</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Motherly Clinic, Tanta, Egypt
                      </p>
                    </div>
                  </div>
    
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                    <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                      Consultation Fee
                    </h1>
                    <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                      L.E. 250
                    </p>
    
                    <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    </button>
                  </div>
                </div>
                
<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={adam} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
             <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Adam Malek</h1>
                <p className="text-blue-600">Nephrologist</p>
                <p className="text-gray-600 text-[15px]">
                  12+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                    <p className="text-gray-600">(760 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Delta Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 400
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={amanda} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Amanda Yousry</h1>
                <p className="text-blue-600">Nephrologist</p>
                <p className="text-gray-600 text-[15px]">
                  9+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.0</h1>
                  </div>
                  <p className="text-gray-600">(667 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    El-Nahda Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 600
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={carolina} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
             <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Carolina Emad</h1>
                <p className="text-blue-600">Neurologist</p>
                <p className="text-gray-600 text-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.3</h1>
                  </div>
                    <p className="text-gray-600">(869 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Neurosmart Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 800
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={elshafei} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. El-Shafei Galal</h1>
                <p className="text-blue-600">Neurologist</p>
                <p className="text-gray-600 text-[15px]">
                  13+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.4</h1>
                  </div>
                  <p className="text-gray-600">(1125 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Neurosmart Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 900
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                   <img src={kamillia} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                    <div className="flex-1 flex flex-col gap-1.5">
                       <h1 className="font-bold text-[17px]">Dr. Kamillia Gerges</h1>
                       <p className="text-blue-600">Ophthalmologist</p>
                       <p className="text-gray-600 text-[15px]">
                         15+ Years of Experience
                       </p>
       
                       <div className="flex gap-2 items-center">
                         <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                           <Star className="size-5" color="#24c364" />
                           <h1 className="font-bold text-[16px]">4.2</h1>
                         </div>
                           <p className="text-gray-600">(1058 reviews)</p>
                       </div>
       
                       <div className="flex gap-2 items-center">
                         <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                         <p className="text-gray-600">
                           Horus Clinic, Tanta, Egypt
                         </p>
                       </div>
                     </div>
       
                     <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                       <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                         Consultation Fee
                       </h1>
                       <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                         L.E. 300
                       </p>
       
                       <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                         <span className="relative z-10">Book Now</span>
                         <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                       </button>
                     </div>
                   </div>
       
                   <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                   <img src={youstina} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                   <div className="flex-1 flex flex-col gap-1.5">
                       <h1 className="font-bold text-[17px]">Dr. Youstina Malak</h1>
                       <p className="text-blue-600">Ophthalmologist</p>
                       <p className="text-gray-600 text-[15px]">
                         10+ Years of Experience
                       </p>
       
                       <div className="flex gap-2 items-center">
                         <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                           <Star className="size-5" color="#24c364" />
                           <h1 className="font-bold text-[16px]">3.8</h1>
                         </div>
                         <p className="text-gray-600">(350 reviews)</p>
                       </div>
       
                       <div className="flex gap-2 items-center">
                         <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                         <p className="text-gray-600">
                           Horus Clinic, Tanta, Egypt
                         </p>
                       </div>
                     </div>
       
                     <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                       <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                         Consultation Fee
                       </h1>
                       <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                         L.E. 250
                       </p>
       
                       <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                         <span className="relative z-10">Book Now</span>
                         <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                       </button>
                     </div>
                   </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                <img src={abdullah} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                 <div className="flex-1 flex flex-col gap-1.5">
                    <h1 className="font-bold text-[17px]">Dr. Abdullah Hassan</h1>
                    <p className="text-blue-600">Orthopedic</p>
                    <p className="text-gray-600 text-[15px]">
                      11+ Years of Experience
                    </p>
    
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                        <Star className="size-5" color="#24c364" />
                        <h1 className="font-bold text-[16px]">3.9</h1>
                      </div>
                        <p className="text-gray-600">(465 reviews)</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Life Clinic, Tanta, Egypt
                      </p>
                    </div>
                  </div>
    
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                    <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                      Consultation Fee
                    </h1>
                    <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                      L.E. 600
                    </p>
    
                    <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    </button>
                  </div>
                </div>
    
                <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                <img src={randa} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1.5">
                    <h1 className="font-bold text-[17px]">Dr. Randa Hamdy</h1>
                    <p className="text-blue-600">Orthopedic</p>
                    <p className="text-gray-600 text-[15px]">
                      15+ Years of Experience
                    </p>
    
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                        <Star className="size-5" color="#24c364" />
                        <h1 className="font-bold text-[16px]">4.5</h1>
                      </div>
                      <p className="text-gray-600">(1369 reviews)</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Life Clinic, Tanta, Egypt
                      </p>
                    </div>
                  </div>
    
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                    <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                      Consultation Fee
                    </h1>
                    <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                      L.E. 400
                    </p>
    
                    <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    </button>
                  </div>
                </div>

 <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={fatma} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
             <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Fatma Abdel-Aziz</h1>
                <p className="text-blue-600">Otolaryngologist</p>
                <p className="text-gray-600 text-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                    <p className="text-gray-600">(760 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Life Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 400
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={ireny} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Ireny Sabry</h1>
                <p className="text-blue-600">Otolaryngologist</p>
                <p className="text-gray-600 text-[15px]">
                  11+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                  <p className="text-gray-600">(879 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Life Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 300
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                <img src={salmaadel} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                 <div className="flex-1 flex flex-col gap-1.5">
                    <h1 className="font-bold text-[17px]">Dr. Salma Adel</h1>
                    <p className="text-blue-600">Pediatrician</p>
                    <p className="text-gray-600 text-[15px]">
                      5+ Years of Experience
                    </p>
    
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                        <Star className="size-5" color="#24c364" />
                        <h1 className="font-bold text-[16px]">4.6</h1>
                      </div>
                        <p className="text-gray-600">(368 reviews)</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Motherly Clinic, Tanta, Egypt
                      </p>
                    </div>
                  </div>
    
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                    <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                      Consultation Fee
                    </h1>
                    <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                      L.E. 200
                    </p>
    
                    <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    </button>
                  </div>
                </div>
    
                <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                <img src={hanady} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1.5">
                    <h1 className="font-bold text-[17px]">Dr. Hanady Wahba</h1>
                    <p className="text-blue-600">Pediatrician</p>
                    <p className="text-gray-600 text-[15px]">
                      11+ Years of Experience
                    </p>
    
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                        <Star className="size-5" color="#24c364" />
                        <h1 className="font-bold text-[16px]">4.1</h1>
                      </div>
                      <p className="text-gray-600">(780 reviews)</p>
                    </div>
    
                    <div className="flex gap-2 items-center">
                      <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Motherly Clinic, Tanta, Egypt
                      </p>
                    </div>
                  </div>
    
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                    <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                      Consultation Fee
                    </h1>
                    <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                      L.E. 300
                    </p>
    
                    <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                    </button>
                  </div>
                </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={mostafa} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
             <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Mostafa Sadek</h1>
                <p className="text-blue-600">Physical Therapist</p>
                <p className="text-gray-600 text-[15px]">
                  10+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                    <p className="text-gray-600">(760 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Move Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 500
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={marina} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Marina Mina</h1>
                <p className="text-blue-600">Physical Therapist</p>
                <p className="text-gray-600 text-[15px]">
                  9+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                  <p className="text-gray-600">(659 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Move Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 600
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

<div className="flex flex-col items-center gap-4 mb-6">

          <div className="flex flex-col gap-5 w-full">

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={loai} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
             <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Loai Hamed</h1>
                <p className="text-blue-600">Plastic Surgeon</p>
                <p className="text-gray-600 text-[15px]">
                  15+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                    <p className="text-gray-600">(1674 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Neptune Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 1000
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
            <img src={malak} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5">
                <h1 className="font-bold text-[17px]">Dr. Malak Mourad</h1>
                <p className="text-blue-600">Plastic Surgeon</p>
                <p className="text-gray-600 text-[15px]">
                  5+ Years of Experience
                </p>

                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                    <Star className="size-5" color="#24c364" />
                    <h1 className="font-bold text-[16px]">4.2</h1>
                  </div>
                  <p className="text-gray-600">(549 reviews)</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    Neptune Clinic, Tanta, Egypt
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                  Consultation Fee
                </h1>
                <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                  L.E. 800
                </p>

                <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                </button>
              </div>
            </div>

<div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                   <img src={hadeer} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                    <div className="flex-1 flex flex-col gap-1.5">
                       <h1 className="font-bold text-[17px]">Dr. Hadeer El-Shafei</h1>
                       <p className="text-blue-600">Psychiatric</p>
                       <p className="text-gray-600 text-[15px]">
                         10+ Years of Experience
                       </p>
       
                       <div className="flex gap-2 items-center">
                         <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                           <Star className="size-5" color="#24c364" />
                           <h1 className="font-bold text-[16px]">4.2</h1>
                         </div>
                           <p className="text-gray-600">(848 reviews)</p>
                       </div>
       
                       <div className="flex gap-2 items-center">
                         <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                         <p className="text-gray-600">
                           El-Amal Clinic, Tanta, Egypt
                         </p>
                       </div>
                     </div>
       
                     <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                       <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                         Consultation Fee
                       </h1>
                       <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                         L.E. 200
                       </p>
       
                       <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
                         <span className="relative z-10">Book Now</span>
                         <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                       </button>
                     </div>
                   </div>
       
                   <div className="flex flex-col lg:flex-row gap-3 p-2 shadow-lg shadow-black/30 rounded-2xl">
                   <img src={fahmy} className="w-32 h-32 object-cover rounded-xl flex-shrink-0" />
                   <div className="flex-1 flex flex-col gap-1.5">
                       <h1 className="font-bold text-[17px]">Dr. Fahmy Salem</h1>
                       <p className="text-blue-600">Psychiatric</p>
                       <p className="text-gray-600 text-[15px]">
                         20+ Years of Experience
                       </p>
       
                       <div className="flex gap-2 items-center">
                         <div className="flex items-center bg-[#eaf8eb] text-[#24c364] rounded-[9px] gap-1.5 px-1.5 py-1">
                           <Star className="size-5" color="#24c364" />
                           <h1 className="font-bold text-[16px]">4.3</h1>
                         </div>
                         <p className="text-gray-600">(2058 reviews)</p>
                       </div>
       
                       <div className="flex gap-2 items-center">
                         <MapPinPlus className="bg-[#e7f6fd] rounded-2xl size-7 p-1.5 flex-shrink-0" />
                         <p className="text-gray-600">
                           El-Amal Clinic, Tanta, Egypt
                         </p>
                       </div>
                     </div>
       
                     <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 lg:gap-2 min-w-[140px]">
                       <h1 className="hidden lg:block text-gray-600 font-bold text-sm">
                         Consultation Fee
                       </h1>
                       <p className="font-bold text-[22px] bg-blue-500 lg:bg-blue-50 text-white lg:text-black rounded-2xl px-3 py-1.5 text-center min-w-[100px]">
                         L.E. 300
                       </p>
       
                       <button onClick={() => navigate("/bookOne")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group w-full lg:w-auto">
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
                   </div>
                   </div>
                   </div>
                   </section>
                   </div>
  );
}