"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/fox.json";
import Link from "next/link";
import { register } from "module";

export default function Signup() {
  return (
    <main className="bg-[#23304c] flex min-h-screen flex-col items-center justify-center p-6 sm:p-24">
      <img
        src="./Ellipse.png"
        className="z-20 animate-ping w-6 absolute left-24 top-56"
      />
      <img
        src="./Ellipse.png"
        className="z-20 animate-ping w-6 absolute right-96 top-36"
      />
      <img
        src="./Ellipse.png"
        className="z-20 animate-ping w-6 absolute left-64 bottom-24"
      />
      <img
        src="./Ellipse.png"
        className="z-20 animate-ping w-6 absolute right-64 bottom-24"
      />
      <img
        src="./Ellipse.png"
        className="z-20 animate-ping w-6 absolute right-40 top-64"
      />
      <img
        src="./Ellipse.png"
        className="z-20 animate-ping w-6 absolute right-50 top-14"
      />

      <div className="bg-[#5faab1] sm:rounded-3xl shadow-lg flex flex-col sm:flex-row w-full max-w-4xl -mt-7 ">
        <div className="w-full sm:w-3/5 p-5 ">
          <div className="text-left font-bold text-lg animate-bounce">
            <img src="./package.png" className="h-8 animate-bounce" />
            <span className="text-[#23304c] ">Big</span>Dev
          </div>
          <div className="py-5 sm:py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#23304c] mb-2">
              Signup to Account
            </h2>
            <div className="border-2 w-10 border-[#23304c] inline-block mb-4"></div>

            {/* Email and password input */}
            <div className="flex flex-col">
              <form>
                <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                    className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    required
                    className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                  />
                </div>
                <button
                type="submit"
                className="border-2 border-[#356169] rounded-full px-8 py-2 inline-block font-semibold hover:bg-[#356169] hover:text-white text-x hover:scale-105 duration-300 text-center">
                Register
              </button>
              </form>
              {/* Below password */}

              
              </div>
            
          </div>
          
        </div>

        {/* Right side */}
        <div className="w-full sm:w-2/5 bg-[#356169] text-white rounded-tl-2xl sm:rounded-bl-2xl sm:rounded-br-2xl sm:rounded-tr-2xl py-5 sm:py-30 px-6 sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hello,</h2>
          <div className="border-2 w-10 border-white inline-block mb-4"></div>
          <p className="mb-6 sm:mb-12 text-2xl">Welcome to Big Dev</p>
          <div className="flex flex-col w-full justify-center items-center">
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center "
              loop={true}
            />
          </div>

          <p className="mb-2 sm:mb-2">Already Have Account?</p>

          {/* Signup button */}
          <Link
            href="login"
            className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-[#356169] text-x hover:scale-110 duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
