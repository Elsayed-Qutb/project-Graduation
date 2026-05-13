import React from "react";
// import DrKumar from "../assets/DrKumar.svg";
import { MapPinPlus } from "lucide-react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import amira from "../pages/specialities/doctors/amiraelsayed.png";
// import ahmed from "../pages/specialities/doctors/ahmedabdelraouf.png";
// import gharam from "../pages/specialities/doctors/gharamhussein.png";
// import khadija from "../pages/specialities/doctors/khadijaehab.png";
// import abdullah from "../pages/specialities/doctors/abdullahhassan.png";
// import randa from "../pages/specialities/doctors/randahamdy.png";
// // import mahmoud from "./doctors/mahmoudsherif.png";
// // import reham from "./doctors/rehamabdelghafar.png";
// // import salma from "./doctors/salmaadel.png";
// // import amany from "./doctors/amanywahba.png";
// // import hanady from "./doctors/hanadywahba.png";
// // import hana from "./doctors/hanaelsherbiny.png";
// // import hadeer from "./doctors/hadeerelshafei.png";
// // import kamillia from "./doctors/kamilliagerges.png";
// // import youstina from "./doctors/youstinamalak.png";



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
            <h1 className="font-bold text-[40px]">Find & Book Top Doctors</h1>
            <p className="text-gray-500 text-center text-[25px] lg:text-[16px] ">
              Search from 10,000+ verified doctors across all specialities. Book
              appointments instantly.
            </p>
             <button onClick={() => navigate("/doctors-list")} className="relative overflow-hidden px-4 py-2 bg-blue-700 text-white rounded-[20px] group">
            <span className="relative z-10">View All Doctors</span>
            <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
          </button>
          </div>
          </div>
      </section>
    </div>

  );
}
