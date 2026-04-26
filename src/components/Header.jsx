import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
          <a  className="hover:text-blue-500 transition">
            Home
          </a>
          <a  className="hover:text-blue-500 transition">
            Doctors
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Specialties
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a  className="hover:text-blue-500 transition">
            Contact
          </a>
        </nav>
           <div class="container-input">
              <input
                type="text"
                placeholder="Search"
                name="text"
                className="input "
              ></input>
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>

        <div className=" hidden lg:flex gap-3">
          <button onClick={() => navigate("login")} className="btn "  >
            <span  className="span-mother ">
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span className="text-white/0">-</span>
              <span>u</span>
              <span>p</span>
            </span>
            <span className="span-mother2">
            <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span className="text-white/0">-</span>
              <span>u</span>
              <span>p</span>
            </span>
          </button>

          <button onClick={() => navigate("/signin")} className="btn ">
            <span className="span-mother">
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span className="text-black/5">-</span>
              <span>I</span>
              <span>n</span>
            </span>
            <span className="span-mother2">
              <span>S</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span className="text-black/5">-</span>
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

          <button onClick={() => navigate("/login")} className= "bg-blue-500 px-4 py-2 rounded-lg text-white w-32">
            Login
          </button>

          <button onClick={() => navigate("/signin")} className="border border-blue-500 px-4 py-2 rounded-lg text-blue-500 w-32">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
