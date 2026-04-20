import { CalendarCheck2 } from 'lucide-react';
import { Users } from 'lucide-react';
import { MapPinPlus } from 'lucide-react';
import { Award } from 'lucide-react';
import { Heart } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="flex justify-center mt-4 lg:mt-12">
        <div className="container flex flex-col justify-center items-center p-3.5 lg:p-6 ">
          <p className="font-semibold bg-blue-100 text-blue-900 px-1.5 py-1.5 rounded-2xl w-4/12  lg:w-1/12 text-center text-[13px] mb-9">
            About Us
          </p>
          <div className="flex flex-col items-center gap-1 mb-2.5 lg:mb-6">
            <h1 className="font-bold text-[25px]">About MediCare</h1>
            <p className="text-gray-500 text-center text-[14px] lg:text-[16px] ">
              improve the healthcare experience by making it more accessible,
              transparent, and efficient for everyone.
            </p>
          </div>
          <div className=" w-12/12 lg:w-11/12 grid grid-cols-2 lg:grid-cols-4 gap-2 p-0.5 lg:gap-2.5 mb-6">
            <div className=" group shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-[#3cc2a8] transtion duration-200 text-center text-[#3ba0de] hover:text-[#3cc2a8]">
              <Users 
                className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] transition duration-300 rounded-2xl size-10 p-1.5 "
                
              />
              <h1 className="font-bold text-[14px] lg:text-[24px]">
                50,000+
              </h1>
              <p className=" font-normal text-[10px] lg:text-[13px] text-gray-600">
                Verified Doctors
              </p>
            </div>
            <div className=" group shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-[#3cc2a8] transtion duration-200 text-center text-[#3ba0de] hover:text-[#3cc2a8]">
              <CalendarCheck2
                className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-10 p-1.5"
                
              />
              <h1 className="font-bold text-[14px] lg:text-[24px]">
                10 Lakh+
              </h1>
              <p className=" font-normal text-[10px] lg:text-[13px] text-gray-600">
                Appointments Booked
              </p>
            </div>
            <div className=" group shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-[#3cc2a8] transtion duration-200 text-center text-[#3ba0de] hover:text-[#3cc2a8]">
              <MapPinPlus 
                className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-10 p-1.5"
              />
              <h1 className="font-bold text-[14px] lg:text-[24px]">
               100+
              </h1>
              <p className=" font-normal text-[10px] lg:text-[13px] text-gray-600">
                Cities Covered
              </p>
            </div>
            <div className=" group shadow-lg shadow-blue-400/20 p-3 flex flex-col gap-2.5 justify-center items-center rounded-2xl hover:border border border-black/20 hover:border-[#3cc2a8] transtion duration-200 text-center text-[#3ba0de] hover:text-[#3cc2a8]">
              <Award 
                className="bg-[#e7f6fd] group-hover:bg-[#d9ffe7] rounded-2xl size-10 p-1.5"
              />
              <h1 className="font-bold text-[14px] lg:text-[24px]">
               4.8★
              </h1>
              <p className=" font-normal text-[10px] lg:text-[13px] text-gray-600">
                Patient Rating
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
