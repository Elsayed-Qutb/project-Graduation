import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm p-1 mb-3 ">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center gap-2">
          <Heart
            className="bg-blue-600 p-2 rounded-xl"
            size={40}
            color="white"
          />
          <h1 className="font-bold text-[20px] lg:text-[27px] text-blue-700">Medicare</h1>
        </div>

        <nav className="hidden lg:flex gap-7 font-medium text-gray-600 shadow-md shadow-blue-600/20 p-3 rounded-2xl border border-blue-200">
          <a href="#" className="hover:text-blue-500 transition">
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
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
        </nav>

        <div className=" hidden lg:flex gap-3">
          <button className="btn"  >
            <span className="span-mother">
              <span>L</span>
              <span>o</span>
              <span>g</span>
              <span>i</span>
              <span>n</span>
            </span>
            <span className="span-mother2">
              <span>L</span>
              <span>o</span>
              <span>g</span>
              <span>i</span>
              <span>n</span>
            </span>
          </button>

          <button className="btn">
            <span className="span-mother">
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span> </span>
              <span>I</span>
              <span>n</span>
            </span>
            <span className="span-mother2">
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span> </span>
              <span>I</span>
              <span>n</span>
            </span>
          </button>
        </div>

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
          <a href="#">Home</a>
          <a href="#">Doctors</a>
          <a href="#">Specialties</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

          <button className= "bg-blue-500 px-4 py-2 rounded-lg text-white w-32">
            Login
          </button>

          <button className="border border-blue-500 px-4 py-2 rounded-lg text-blue-500 w-32">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
