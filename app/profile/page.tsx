"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animation1.json";
import Link from "next/link";

export default function Profile() {
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
        {/* Left side - Profile Image */}
        <div className="w-full sm:w-3/5 p-5 ">
          <div className="text-left font-bold text-lg animate-bounce">
            <img src="./package.png" className="h-8 animate-bounce" />
            <span className="text-[#23304c] ">Big</span>Dev
          </div>
          <div className="py-5 sm:py-10">
            <h2 className="sm:text-3xl font-bold text-[#23304c] mb-2 -mt-7">
              Profile
            </h2>
            <div className="border-2 w-10 border-[#23304c] inline-block mb-4"></div>
            {/* Profile Image Section */}
            {/* Profile Image Section */}
            <div className="flex items-center justify-center">
              <img
                src="/avatar.png"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#356169] -mt-5"
              />
            </div>

            <div className="flex justify-center ">
              <div className="border-2 w-36 border-[#23304c] inline-block mb-4 mt-2"></div>
            </div>

            {/* Other profile details */}
            <div className="flex flex-col">
              <form>
              <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                <input
                  type="text"
                  required
                  name="username"
                  placeholder="Username"
                  className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                <input
                  required
                  name="email"
                  placeholder="Email"
                  className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Old Password"
                  className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="New Password"
                  className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-[#bfe0e2] p-2 flex items-center rounded-full mb-3">
                <input
                  type="confirmpassword"
                  name="cpassword"
                  required
                  placeholder="Confirm Password"
                  className="ml-2 bg-[#bfe0e2] outline-none text-sm flex-1"
                />
              </div>

              {/* Below password */}

              <button
                
                className="border-2 border-[#356169] rounded-full px-8 py-2 inline-block font-semibold hover:bg-[#356169] hover:text-white text-center text-x hover:scale-105 duration-300"
              >
                save
              </button>
              </form>
            </div>

            {/* Edit Profile Button */}
          </div>
        </div>

        {/* Right side - Additional Info */}
        <div className="w-full sm:w-2/5 bg-[#356169] text-white sm:rounded-3xl  py-5 sm:py-30 px-6 sm:px-12">
          <h2 className="text-2xl sm:text-2xl font-bold mb-2">
            Welcome to Big Dev
          </h2>
          <div className="border-2 w-10 border-white inline-block mb-4"></div>

          {/* Additional Information Section */}
          <div className="text-sm ">
            <p>Skills: Web Development, UX/UI Design</p>
            <p>Interests: Coding, Hiking, Photography</p>
            <p>Projects: 10+ completed</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center"
              loop={true}
            />
          </div>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-[#23304c] text-x hover:scale-105 duration-300 "
          >
            logout
          </Link>
        </div>
      </div>
    </main>
  );
}
