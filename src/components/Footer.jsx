import React from "react";
import { Heart } from "lucide-react";
import facebook from '../assets/facebook.png'

export default function Footer() {
  return (
    <div>
      <section className="bg-gray-800 flex justify-center">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-10 bg-gray-800 text-gray-300 p-5 ">
          <div className="w-11/12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Heart
                  className="bg-blue-600 p-2 rounded-xl"
                  size={33}
                  color="white"
                />
                <h1 className="font-bold text-[20px] lg:text-[23px] text-blue-500">
                  Medicare
                </h1>
              </div>
              <h1>
To become a trusted platform for easy access to healthcare anytime, anywhere.              </h1>
            </div>
          </div>
          <div className=" flex flex-col  gap-1 ">
            <h1 className="font-bold mb-3 text-white">For Patients</h1>
            <h1>Find Doctor</h1>
            <h1>Specialities</h1>
            <h1>Contact</h1>
            <h1>Login</h1>
          </div>
          <div className=" flex flex-col justify-between gap-1 ">
            <h1 className="font-bold mb-3 text-white">Social Media</h1>
            
            <h1>Facebook</h1>
            <h1>Whatsapp</h1>
            <h1>Instgram</h1>
          </div>
          <div className=" flex flex-col justify-between gap-1 ">
            <h1 className="font-bold mb-3 text-white">Help Support</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms of Service</h1>
            <h1>Help Center</h1>
           
          </div>
          
        </div>
      </section>
    </div>
  );
}
