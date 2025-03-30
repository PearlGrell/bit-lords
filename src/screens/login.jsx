"use client"
import React from "react"
import backgroundImage from "../assets/bg.png"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const nav = useNavigate();
  return (
    <section 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-12 py-16">
        <div className="w-1/2 pr-12 animate-fade-in-left">
          <div className="text-white space-y-6">
            <h2 className="text-7xl font-extrabold tracking-tight leading-tight">
              Welcome Back
            </h2>
            <p className="text-xl font-light opacity-90 max-w-md">
              Sign in to manage your subscriptions with ease and precision.
            </p>
          </div>
        </div>

        <div className="w-1/2 pl-12">
          <div className="p-10 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl max-w-lg mx-auto animate-fade-in-right">
            <div className="mb-8 text-center">
              <h3 className="text-4xl font-bold text-gray-800 tracking-tight">
                Sign In
              </h3>
              <p className="text-gray-500 text-lg mt-2 font-light">
                Enter your credentials below
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="mail@gmail.com"
                  className="w-full text-base px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/70 shadow-sm transition-all duration-300 hover:shadow-md"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full text-base px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/70 shadow-sm transition-all duration-300 hover:shadow-md"
                />
              </div>

              <div className="text-right">
                <a 
                  href="/forgot-password" 
                  className="text-sm text-purple-500 hover:text-purple-700 transition-colors duration-200 font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={()=>nav('/')}
                  className="w-full flex justify-center bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-4 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center space-y-4 mt-6">
                <p className="text-sm text-gray-600 font-medium">
                  New here?
                </p>
                <a
                  href="/signup"
                  className="w-full flex justify-center bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-50 py-4 rounded-xl tracking-wide font-semibold cursor-pointer transition-all duration-300 text-lg hover:border-purple-600 hover:text-purple-600"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
      `}</style>
    </section>
  )
}