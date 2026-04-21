import React from "react";
import { useNavigate } from "react-router-dom";
import google from '../assets/google.png'
import facebook2 from '../assets/facebook2.png'
import instagram from '../assets/instagram.png'
import "./Signin.css";

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div>
      <section className=" flex justify-center items-center min-h-screen w-full px-4س">
        <div className=" flex flex-col px-3 justify-center items-center ">
          <div className="heading mb-5">
            <div className=" flex flex-col  text-center">
              <h1 className="font-bold text-[34px] lg:text-[40px] ">
                Welcome Back <br></br>
                <span className="text-blue-800">Sign in to Medicare</span>
              </h1>
              <p className="font-medium text-[22px] text-gray-500">
                Your health, one login away{" "}
              </p>
            </div>
          </div>

          <div className="container1">
            <form className="form">
              <input
                placeholder="E-mail"
                id="email"
                name="email"
                type="email"
                className="input"
                required
              />

              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                className="input"
                required
              />

              <span className="forgot-password">
                <a href="#">Forgot Password ?</a>
              </span>

              <input value="Sign In" type="submit" className="login-button" />
            </form>

            <div className="social-account-container">
              <span className="title">Or Sign in with</span>

              <div className="social-accounts">
                <button className="social-button google">
                <img src={facebook2}></img>
               
                </button>

                <button className="social-button Facebook">
                <img src={google}></img>
               
                </button>

                <button className="social-button Instgram">
                  <img src={instagram}></img>
                    
                </button>
              </div>
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
