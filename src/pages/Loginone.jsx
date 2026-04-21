import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import Users from "../assets/user.png";
import doctoricon from "../assets/doctoricon.svg";

export default function Loginone() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-sm p-1 mb-3 ">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <Heart
              className="bg-blue-600 p-2 rounded-xl"
              size={40}
              color="white"
            />
            <h1 className="font-bold text-[20px] lg:text-[27px] text-blue-700">
              Medicare
            </h1>
          </div>

          <nav className="hidden lg:flex gap-7 font-medium text-gray-600 shadow-md shadow-blue-600/20 p-3 rounded-2xl border border-blue-200">
            <a
              onClick={() => navigate("/")}
              className="hover:text-blue-500 transition"
            >
              Home
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Doctors
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Specialties
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              About
            </a>
            <a
              onClick={() => navigate(-1)}
              className="hover:text-blue-500 transition"
            >
              Back
            </a>
          </nav>

          <div className="lg:hidden p-3">
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-2 w-8 cursor-pointer"
            >
              <span
                className={`h-[3px] bg-black rounded transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : "w-1/2"
                }`}
              ></span>

              <span
                className={`h-[3px] bg-black rounded transition-all duration-300 ${
                  open ? "opacity-0" : "w-full"
                }`}
              ></span>

              <span
                className={`h-[3px] bg-black rounded transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : "w-1/2 self-end"
                }`}
              ></span>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden flex flex-col items-center gap-4 py-5 bg-white shadow-md">
            <a onClick={() => navigate("/")}>Home</a>
            <a href="#">Doctors</a>
            <a href="#">Specialties</a>
            <a href="#">About</a>
            <a onClick={() => navigate(-1)}>Back</a>
          </div>
        )}
      </header>
      <section className="">
        <div className=" flex flex-col items-center text-center">
          <h1 className="font-bold text-[34px] lg:text-[40px] ">
            Join Medicare Today <br></br>
            <span className="text-blue-800">Your health, all in one place</span>
          </h1>
          <p className="font-medium text-[22px] text-gray-500">
            With you, we build trust.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-1/2 mt-7 gap-5 mb-3">
            <div className=" rounded-2xl flex flex-col justify-center items-center gap-6 border-t-6 border px-6 p-12 border-blue-500 shadow-lg shadow-black/25 text-center">
              <img className="w-2/12" src={doctoricon}></img>
              <h1 className="font-bold text-[29px]">Doctor</h1>
              <h1>
                Join our platform, and manage your appointments professionally
              </h1>
              <button onClick={() => navigate("/loginDoctor")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                <span className="relative z-10">Register as a Doctor</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </div>
            <div className=" rounded-2xl flex flex-col justify-center items-center gap-6 border-t-6 border px-6 p-12 border-blue-500 shadow-lg shadow-black/25 text-center">
              <img src={Users}></img>
              <h1 className="font-bold text-[29px]">Patient</h1>
              <h1>Find the best doctors and manage your health</h1>
              <button onClick={() => navigate("/accPatient")} className="relative overflow-hidden px-4 py-2 bg-blue-500 text-white rounded-[14px] group">
                <span className="relative z-10">Register as a patient</span>
                <span className="absolute inset-y-0 left-[-75%] w-1/2 bg-white/70 rotate-12 blur-lg z-0 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
