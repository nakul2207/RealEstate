"use client";
import React from "react";
import Link from "next/link";

export const Nav = () => {
  return (
    <div>
      <nav className="mt-3 top-3 w-full p-4 pb-7 flex justify-self-stretch items-center bg-white shadow-md z-10">
        <div className="text-black font-bold ml-32 text-3xl mr-20">Estate</div>
        <div className="flex space-x-14 mr-80">
          <Link href="/" className="text-black hover:text-gray-700 cursor-pointer relative">
            <span className="custom-hover">Home</span>
          </Link>
          <Link href="/Price" className="text-black hover:text-gray-700 cursor-pointer relative">
            <span className="custom-hover">Price</span>
          </Link>
          <Link href="/Aboutus" className="text-black hover:text-gray-700 cursor-pointer relative">
            <span className="custom-hover">About us</span>
          </Link>
          <Link href="/FAQ" className="text-black hover:text-gray-700 cursor-pointer relative">
            <span className="custom-hover">FAQ</span>
          </Link>
        </div>
        <Link href="/Contactus">
          <button className="border border-black text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-100">
            Contact
          </button>
        </Link>
      </nav>

      <style jsx>{`
        .custom-hover {
          position: relative;
          display: inline-block;
        }
        .custom-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          bottom: -0.25rem;
          left: 0;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        .custom-hover:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
};